1.  What makes a Class a class?
  1.  Initializer function
  1.  Attributes
  1.  Methods
1.  [Ruby](./ruby_class_a_class.rb)
  1.  Initializer function comes with attributes setting
  1.  We can add attributes later by means of Ruby's open classes
1.  [Javascript](./js_class_a_class.js)
  1.  Initializer function comes with attributes setting
  1.  We can add attributes later by means of manipulating the instance's prototype
  1.  **Formula**
    1.  Initializer function (with a Captial letter to start)
    1.  Set any attributes based on parameters passed to the function
    1.  Define methods on that thing's prototype
1.  Sometimes we want to have a class that behaves like a Singleton class, or
like a module in Ruby.  We can do that by creating a namespace and binding
methods to it.  [Example](./namespace.js)
1.  There are two ways to define an object with `new Object` and with the
literal syntax `{}`.  [Example](./js_get_an_object.js)
1.  Prototypal inheritance is funny.  We can define prototypes and then change
them on objects.  It's like changing a thing mid-stream.
1.  Prototypal inheritance is philosophically like Aristotelianism versus
the Platonism of class-based inheritance.
[Example](./prototype_inheritance.js)
