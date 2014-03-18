#What's the problem?
Going from Ruby, doesn't JavaScript make your hands hurt?

````javascript
for (var i = 0; i < foo.length; i++){
  var x = 'Bar';    /* this would process fine without that semicolon,
                       so long as there's a linebreak. Note the single-letter
                       variable--that's pretty common in JS. */
}
````

#Why does JavaScript have so much extra punctuation?
In 1995 [Netscape employee Brendan Eich](http://en.wikipedia.org/wiki/JavaScript#Birth_at_Netscape) had the job of creating a scripting language the Netscape browser could use.

Eich based his new language (renamed to take advantage of a partnership with Sun Microsystems, and their trendy new language Java) on the C family of languages, which many sofware developers used at the time. C uses semicolons to end all statements.

````c

printf("Hello, World! \n");
return 0;

````

#So, do I really need to type all this stuff?
We're talking about this because over the last couple years there's been a not-always-polite debate over the subject.

##The Anti-Semicolonists
* [Jacob Thornton](http://byfat.xxx/), one of the contributors to Twitter Bootstrap.

##The Semicolon Status Quo
* [Douglas Crockford](http://www.crockford.com/), also a contributor to Twitter Bootstrap

These two had an [exchange on GitHub](http://trevmex.com/post/21194966996/crockford-on-bootstraps-semicolon-omission-insanely) concerning semicolons that's unintentionally amusing. Pretty soon everybody was talking about...

##The pros and cons
Pro-semicolon:
* Don't guess whether a semicolon's appropriate for a given situation; just put them in all the time
* Your JavaScript will break if somebody [minifies](http://developer.yahoo.com/blogs/ydn/high-performance-sites-rule-10-minify-javascript-7208.html) it, and you don't have semicolons between statements
* Sometimes ASI (see below) guesses wrongly about where you intended to put a semicolon

Anti-semicolon:
* Through something called "ASI" ("Automatic Semi-colon Insertion"), JavaScript is putting them in for you anyway
* Save your fingers for the necessary punctuation
* If you want to work at [GitHub](https://github.com/styleguide/javascript), don't use them

