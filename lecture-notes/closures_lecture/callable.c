#include <stdio.h>

void outer(fromMain) {
  int outerInteger = 2;
  printf("Outer got something from main(%d) and has its own(%d)\n", fromMain, outerInteger);
}

int main(int argc, char *argv[]) {
  int year = 2014;
  printf("Hello Banana Slugs (%d) vintage\n", year);
  outer(year);
  return 0;
}

/* 
 *
 * Let's talk about the obvious here: C is very obvious
 *
 * C is very clear about what's happening, you have to define the type of your
 * variables.  In main() we define `year` as an `int` and give it a value.
 *
 * C has a very verbose style for printing.  You don't get easy string
 * intermpolation like "foo bar #{year}" instead you have to specify the type
 * of thing that's being interpolated
 *
 * functions don't have the keywork `function` but they define a return type,
 * have a name, and take arguments
 *
 * QUESTION:  How could you get "year" into outer()
 * ANSWER: 
 *
*/
