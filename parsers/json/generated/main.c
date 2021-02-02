#include <time.h>
#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <sys/mman.h>

unsigned int *parse(const char *restrict input, const unsigned int l,
  unsigned int *restrict stack,
  unsigned int *restrict tree);

int64_t timespecDiff(struct timespec *timeA_p, struct timespec *timeB_p)
{
  return ((timeA_p->tv_sec * 1000000000) + timeA_p->tv_nsec) -
          ((timeB_p->tv_sec * 1000000000) + timeB_p->tv_nsec);
}

int main()
{
  FILE *infile;
  char *buffer;
  long numbytes;

  infile = fopen("/home/zaubernerd/workspace/par-gen/package-lock.json", "r");
  fseek(infile, 0, SEEK_END);
  numbytes = ftell(infile);
  fseek(infile, 0, SEEK_SET);
  buffer = (char *)malloc(numbytes + 1);
  fread(buffer, sizeof(char), numbytes, infile);

  unsigned int *stack = malloc(2 + numbytes * 2 * sizeof(unsigned int));
  unsigned int *tree = malloc(6 + numbytes * 6 * sizeof(unsigned int));
  // unsigned int *tree = mmap(NULL, 6 + numbytes * 6 * sizeof(unsigned int),
  //               PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS | MAP_POPULATE,
  //          -1, 0);

  struct timespec start, end;

  clock_gettime(CLOCK_MONOTONIC, &start);

  for (int i = 0; i < 10000; i++)
  {
    parse(buffer, numbytes, stack, tree);
  }

  clock_gettime(CLOCK_MONOTONIC, &end);

  printf("Elapsed: %f ms\n", (double)timespecDiff(&end, &start) / 1000 / 1000);

  fclose(infile);
  free(buffer);
  free(stack);
  free(tree);

  return 0;
}
