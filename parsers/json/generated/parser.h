#define undefined (-1)

struct lexeme
{
  unsigned int state;
  int start;
  int end;
};

extern struct lexeme lexeme;

void lexer_next(const char *input, const unsigned int offset,
                const unsigned int l);
