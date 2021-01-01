#include <time.h>
#include <stdio.h>

int input[2816] = {0x61, 0x62, 0x63, 0x66, 0x66, 0x67, 0x68, 0x6d, 0x6e, 0x69, 0x6a, 0x6d, 0x6e};

int _dfa(int input[], int size);

int dfa()
{
  return _dfa(input, 13);
}

int main(void)
{
  clock_t start = clock();
  for (int i = 0; i < 25000000; i++)
  {
    dfa();
  }
  clock_t end = clock();
  printf("Elapsed: %f seconds\n", (double)(end - start) / CLOCKS_PER_SEC);
}
