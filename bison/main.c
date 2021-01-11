#include <time.h>
#include <stdio.h>
#include "definitions.h"
#include "json.tab.h"

int main(void)
{
  struct lexerinputstate lis;

  FILE *infile;
  char *buffer;
  long numbytes;

  infile = fopen("/home/zaubernerd/workspace/par-gen/test.json", "r");
  fseek(infile, 0, SEEK_END);
  numbytes = ftell(infile);
  fseek(infile, 0, SEEK_SET);
  buffer = malloc(numbytes + 1);
  fread(buffer, sizeof(char), numbytes, infile);
  fclose(infile);

  init_lexer();

  lis.input = buffer;
  lis.length = numbytes;
  lis.offset = 0;

  clock_t start = clock();
  for (int i = 0; i < 1000000; i++)
  {
    lis.offset = 0;
    yyparse(&lis);
  }
  clock_t end = clock();
  printf("Elapsed: %f seconds\n", (double)(end - start) / CLOCKS_PER_SEC);

  free(buffer);

  return 0;
}
