# par-gen
Fast JavaScript/TypeScript LR(1) parser generator

[![check types and test](https://github.com/par-gen/par-gen/workflows/check%20types%20and%20test/badge.svg)](https://github.com/par-gen/par-gen/actions?query=workflow%3A%22check+types+and+test%22)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

## WIP perf

### Allow perf as user

```shell
sudo sysctl -w kernel.kptr_restrict=0
sudo sysctl -w kernel.perf_event_paranoid=-1
```

([source](http://iv-m.github.io/notes/perf/))

### Profile jitted v8 code with linux perf

```shell
perf record -k mono d8 --perf-prof <your JS file>
perf inject -j -i perf.data -o perf.data.jitted
perf report -i perf.data.jitted
```

([source](https://chromium.googlesource.com/v8/v8/+/82e95f597b3563e3c1947d760ba138f67d45bf6a))

### Profile deoptimizations / V8

Unfortunately [deoptigate](https://github.com/thlorenz/deoptigate) only works with <= Node.js 14.
But there is also [indicium](https://v8.dev/blog/system-analyzer), which can read logs generated via:

```shell
node --log-all
```

Or other logging options - see the indicium instructions.

### TMA (top-down microarchitecture analysis)

http://www.cs.technion.ac.il/~erangi/TMA_using_Linux_perf__Ahmad_Yasin.pdf

Not all EC2 machines support hardware counters: https://oavdeev.github.io/posts/vpmu_support_z1d/
