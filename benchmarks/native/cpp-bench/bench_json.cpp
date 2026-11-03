#include <ctime>
#include <cstdio>
#include <cstdint>
#include <cstdlib>
#include <cstring>
#include <vector>
#include <algorithm>
#include <string>
#include <fstream>
#include <sstream>

#include "simdjson.h"
extern "C" {
#include "yyjson/src/yyjson.h"
}

static int64_t timespecDiff(struct timespec *timeA_p, struct timespec *timeB_p)
{
  return ((timeA_p->tv_sec * 1000000000LL) + timeA_p->tv_nsec) -
         ((timeB_p->tv_sec * 1000000000LL) + timeB_p->tv_nsec);
}

struct Workload {
  std::string key;
  std::string path;
  int iters;
  char *data;
  size_t len;
};

static bool load_file(const char *path, char **out_data, size_t *out_len)
{
  FILE *f = fopen(path, "rb");
  if (!f) {
    fprintf(stderr, "Cannot open %s\n", path);
    return false;
  }
  fseek(f, 0, SEEK_END);
  long sz = ftell(f);
  fseek(f, 0, SEEK_SET);
  char *buf = (char *)malloc((size_t)sz + simdjson::SIMDJSON_PADDING + 64);
  if (fread(buf, 1, (size_t)sz, f) != (size_t)sz) {
    fclose(f);
    free(buf);
    return false;
  }
  memset(buf + sz, 0, simdjson::SIMDJSON_PADDING + 64);
  fclose(f);
  *out_data = buf;
  *out_len = (size_t)sz;
  return true;
}

template <typename Fn>
static void run_bench(const char *parser_name, size_t bytes, int iters, int rounds, Fn &&fn, bool comma)
{
  int warmup = std::max(3, iters / 4);
  for (int i = 0; i < warmup; i++) {
    fn();
  }
  std::vector<double> samples(rounds);
  for (int r = 0; r < rounds; r++) {
    struct timespec t0, t1;
    clock_gettime(CLOCK_MONOTONIC, &t0);
    for (int i = 0; i < iters; i++) {
      fn();
    }
    clock_gettime(CLOCK_MONOTONIC, &t1);
    double ms = (double)timespecDiff(&t1, &t0) / 1000000.0;
    samples[r] = (ms * 1000.0) / iters;
  }
  std::sort(samples.begin(), samples.end());
  double med_us = samples[rounds / 2];
  double min_us = samples[0];
  double ops_s = 1e6 / med_us;
  double mb_s = ((double)bytes * ops_s) / (1024.0 * 1024.0);
  printf("      \"%s\": { \"medianUs\": %.4f, \"minUs\": %.4f, \"opsPerSec\": %.1f, \"mbPerSec\": %.2f }%s\n",
         parser_name, med_us, min_us, ops_s, mb_s, comma ? "," : "");
}

int main(int argc, char **argv)
{
  if (argc < 3) {
    fprintf(stderr, "Usage: bench_cpp json <manifest.tsv> [rounds]\n");
    return 1;
  }
  const char *manifest_path = argv[2];
  int ROUNDS = argc > 3 ? atoi(argv[3]) : 7;

  std::ifstream mf(manifest_path);
  std::vector<Workload> workloads;
  std::string line;
  size_t max_len = 0;
  while (std::getline(mf, line)) {
    if (line.empty()) continue;
    std::stringstream ss(line);
    std::string key, path, iters_str;
    std::getline(ss, key, '\t');
    std::getline(ss, path, '\t');
    std::getline(ss, iters_str, '\t');
    Workload w{ key, path, atoi(iters_str.c_str()), nullptr, 0 };
    if (!load_file(w.path.c_str(), &w.data, &w.len)) {
      return 1;
    }
    if (w.len > max_len) max_len = w.len;
    workloads.push_back(w);
  }

  simdjson::dom::parser dom_parser;
  (void)dom_parser.allocate(max_len, max_len / 2);

  volatile uint64_t sink = 0;

  printf("{\n");
  for (size_t idx = 0; idx < workloads.size(); idx++) {
    const auto &w = workloads[idx];
    printf("  \"%s\": {\n", w.key.c_str());

    run_bench("yyjson (Native C)", w.len, w.iters, ROUNDS, [&]() {
      yyjson_doc *doc = yyjson_read(w.data, w.len, 0);
      yyjson_val *root = yyjson_doc_get_root(doc);
      sink += yyjson_is_arr(root) ? yyjson_arr_size(root) : yyjson_obj_size(root);
      yyjson_doc_free(doc);
    }, true);

    run_bench("simdjson (Native C++ SIMD)", w.len, w.iters, ROUNDS, [&]() {
      simdjson::dom::element doc;
      auto err = dom_parser.parse((const uint8_t *)w.data, w.len, false).get(doc);
      if (!err) {
        sink += uint64_t(doc.type());
      }
    }, false);

    printf("  }%s\n", idx + 1 == workloads.size() ? "" : ",");
  }
  printf("}\n");
  return 0;
}
