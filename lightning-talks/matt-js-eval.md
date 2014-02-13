## JavaScript - the eval() function

The eval() function takes a string (of JS code, an expression, etc.) as its argument, which it then evaluates

```JavaScript
eval("2+2");    // returns 4
```

It can also be used to execute a statement or series of statements:

```JavaScript
eval("foo = 2; foo = foo + 2;alert(foo);")    // evalutes the first statement, then opens a dialog box with result of that statement
```

### eval() is dangerous!!!

- eval() will execute whatever code it is passed (provided it's a string) with the privileges of the caller, which can potentially lead to some nasty situations.  Basically it can open up your application a multitude of attacks - any JS injected by an end-user, either maliciously or just stupidly, will execute with the permissions of your webpage.
- it can suck performance-wise, since it runs the interpreter (or worse, the compiler if your code is being compiled)
- Additionally, third party code can see the scope in which eval() was called.

### Ok, if it sucks, why does it exist?  Did people ever use it?

Yes, apparently at one point in time it was used for...

- immediately executing a bit of JS code
- parsing JSON strings, though now you should probably use JSON.parseJSON
- use in educational/programming websites where you want to allow users to immediately see the result of code that they have written

### Where can I still use it?

- arguably, nowhere
- education contexts (let a user write and execute JS in the browser)
- if you need to evaluate input that you control absolutely and that cannot be modified by the user

###Takeaway

If you find yourself using eval(), evaluate why you are using it and see if there is an alternative that gives you the same functionality that you want. It's likely to be safer.

If you decide to use eval() know the dangers/vunerabilities, if there are any, and understand why it's still appropriate to use.

### Resources

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">MDN</a><br/>
<a href="http://stackoverflow.com/questions/197769/when-is-javascripts-eval-not-evil">When is JS eval not evil? (Stack Overflow)</a><br/>
<a href="http://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/">eval() isn’t evil, just misunderstood</a><br/>
