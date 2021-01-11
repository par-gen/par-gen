#ifndef DEFINITIONS_H
#define DEFINITIONS_H

#include <stdio.h>
#include <stdlib.h>

struct lexerinputstate
{
  const char *input;
  size_t length;
  size_t offset;
};

void init_lexer(void);

static inline void yyerror(struct lexerinputstate *s, const char *error)
{
  printf("yyerror error: %s\n", error);
  printf("length: %lu, offset: %lu\n", s->length, s->offset);
  abort();
}

#endif
