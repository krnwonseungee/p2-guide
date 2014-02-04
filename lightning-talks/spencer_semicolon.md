When should I use a semi-colon?

Short Answer: Use one after every statement. 

Long Answer: Although semi-colons are not explicitly required and the javascript interpreter will most likely insert semi-colons correctly there are still some edge cases (See example below). Also, some Javascript compressors will break code when the script is compressed so having semi-colons in place will prevent this frustration.

For example:
```javascript
// define a function

var spencerRulez = function () {
    //...
} // semicolon missing at this line

// then execute some code inside a closure
(function () {
    //...
})();

This will be interpreted as:

var fn = function () {
    //...
}(function () {
    //...
})();
```
Example of what a statement is:

```javascript
if (condition) {
  statement_1;
} else {
  statement_2;
 };
 ```