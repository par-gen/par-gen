package main

import (
	"encoding/json"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"

	"github.com/evanw/esbuild/internal/config"
	"github.com/evanw/esbuild/internal/js_parser"
	"github.com/evanw/esbuild/internal/logger"
)

type SynthEntry struct {
	ID        uint64 `json:"id"`
	Name      string `json:"name"`
	Version   string `json:"version"`
	Resolved  string `json:"resolved"`
	Integrity string `json:"integrity"`
	Dev       bool   `json:"dev"`
}

type PackageJsonDoc struct {
	Name            string            `json:"name"`
	Version         string            `json:"version"`
	Workspaces      []string          `json:"workspaces"`
	Scripts         map[string]string `json:"scripts"`
	Dependencies    map[string]string `json:"dependencies"`
	DevDependencies map[string]string `json:"devDependencies"`
}

type LockPkg struct {
	Name            string            `json:"name"`
	Version         string            `json:"version"`
	Resolved        string            `json:"resolved"`
	Integrity       string            `json:"integrity"`
	Dev             bool              `json:"dev"`
	Optional        bool              `json:"optional"`
	Dependencies    map[string]string `json:"dependencies"`
	DevDependencies map[string]string `json:"devDependencies"`
}

type LockDep struct {
	Version   string `json:"version"`
	Resolved  string `json:"resolved"`
	Integrity string `json:"integrity"`
	Dev       bool   `json:"dev"`
}

type LockfileDoc struct {
	Name            string             `json:"name"`
	LockfileVersion int                `json:"lockfileVersion"`
	Packages        map[string]LockPkg `json:"packages"`
	Dependencies    map[string]LockDep `json:"dependencies"`
}

var sink uint64

func runBench(name string, bytes int, iters int, rounds int, fn func(), comma bool) {
	warmup := iters / 4
	if warmup < 3 {
		warmup = 3
	}
	for i := 0; i < warmup; i++ {
		fn()
	}
	samples := make([]float64, rounds)
	for r := 0; r < rounds; r++ {
		t0 := time.Now()
		for i := 0; i < iters; i++ {
			fn()
		}
		elapsedUs := float64(time.Since(t0).Nanoseconds()) / 1000.0
		samples[r] = elapsedUs / float64(iters)
	}
	sort.Float64s(samples)
	medUs := samples[rounds/2]
	minUs := samples[0]
	opsS := 1e6 / medUs
	mbS := (float64(bytes) * opsS) / (1024.0 * 1024.0)
	c := ""
	if comma {
		c = ","
	}
	fmt.Printf("      %q: { \"medianUs\": %.4f, \"minUs\": %.4f, \"opsPerSec\": %.1f, \"mbPerSec\": %.2f }%s\n",
		name, medUs, minUs, opsS, mbS, c)
}

func benchJSON(manifestPath string, rounds int) {
	raw, err := os.ReadFile(manifestPath)
	if err != nil {
		panic(err)
	}
	var lines []string
	for _, l := range strings.Split(string(raw), "\n") {
		if strings.TrimSpace(l) != "" {
			lines = append(lines, l)
		}
	}
	fmt.Println("{")
	for idx, line := range lines {
		parts := strings.Split(line, "\t")
		key := parts[0]
		path := parts[1]
		iters, _ := strconv.Atoi(parts[2])
		data, err := os.ReadFile(path)
		if err != nil {
			panic(err)
		}
		isArray := false
		for _, b := range data {
			if b != ' ' && b != '\t' && b != '\r' && b != '\n' {
				isArray = (b == '[')
				break
			}
		}
		isPkgJSON := (key == "small")
		fmt.Printf("  %q: {\n", key)
		runBench("encoding/json (Native Go)", len(data), iters, rounds, func() {
			if isArray {
				var entries []SynthEntry
				if err := json.Unmarshal(data, &entries); err != nil {
					panic(err)
				}
				sink += uint64(len(entries))
			} else if isPkgJSON {
				var doc PackageJsonDoc
				if err := json.Unmarshal(data, &doc); err != nil {
					panic(err)
				}
				sink += uint64(len(doc.Name) + len(doc.Scripts))
			} else {
				var doc LockfileDoc
				if err := json.Unmarshal(data, &doc); err != nil {
					panic(err)
				}
				sink += uint64(len(doc.Name) + len(doc.Packages))
			}
		}, false)
		c := ","
		if idx+1 == len(lines) {
			c = ""
		}
		fmt.Printf("  }%s\n", c)
	}
	fmt.Println("}")
}

func benchJS(manifestPath string, rounds int) {
	raw, err := os.ReadFile(manifestPath)
	if err != nil {
		panic(err)
	}
	var lines []string
	for _, l := range strings.Split(string(raw), "\n") {
		if strings.TrimSpace(l) != "" {
			lines = append(lines, l)
		}
	}
	fmt.Println("{")
	for idx, line := range lines {
		parts := strings.Split(line, "\t")
		key := parts[0]
		path := parts[1]
		iters, _ := strconv.Atoi(parts[2])
		isTS := len(parts) > 3 && parts[3] == "1"
		data, err := os.ReadFile(path)
		if err != nil {
			panic(err)
		}
		str := string(data)
		var cfg config.Options
		if isTS {
			cfg.TS.Parse = true
		}
		opts := js_parser.OptionsFromConfig(&cfg)
		fmt.Printf("  %q: {\n", key)
		runBench("esbuild (Native Go js_parser.Parse, zero N-API)", len(data), iters, rounds, func() {
			log := logger.NewDeferLog(logger.DeferLogNoVerboseOrDebug, nil)
			ast, ok := js_parser.Parse(log, logger.Source{Contents: str}, opts)
			if !ok {
				panic("esbuild Parse failed on " + key)
			}
			sink += uint64(len(ast.Parts))
		}, false)
		c := ","
		if idx+1 == len(lines) {
			c = ""
		}
		fmt.Printf("  }%s\n", c)
	}
	fmt.Println("}")
}

func main() {
	mode := "json"
	if len(os.Args) > 1 {
		mode = os.Args[1]
	}
	manifestPath := os.Args[2]
	rounds := 7
	if len(os.Args) > 3 {
		if r, err := strconv.Atoi(os.Args[3]); err == nil {
			rounds = r
		}
	}
	if mode == "js" {
		benchJS(manifestPath, rounds)
	} else {
		benchJSON(manifestPath, rounds)
	}
}
