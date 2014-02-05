###JavaScript "This"

"This" keyword is relevant to scope, and what it refers to changes based on the current execution context.

It's kind of like "self," both in what it means and how it's implemeneted. 

"Execution context" is the situation in which 
code is being executed. These are three execution contexts:

1. By default, "this" refers to the global scope. For example, calling console.log(this); will return window, meaning the browser window.

2. When a function is called as a property on a parent object, "this" refers to the parent object inside that function.

3. When a function is called with the new operator, "this" refers to the newly created object inside that function.

4. When a function is called using call or apply, "this" refers to the first argument passed to call or apply. If the first argument is null or not an object, "this" refers to the global object.