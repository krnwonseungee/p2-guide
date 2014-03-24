#Factory Design Pattern

##What:
A factory is an object that can create other object.

##How:
A Factory has three parts:
1. a Client, which uses the
2. Factory, which creates the
3. Product


The Client just asks the Factory (via a function) for a Product. It's the Factory that worries about the Product type. In fact,  one sign of success is that the Factory could be switched out for another, and the Client wouldn't really notice.

Also, the Factory can be refurbished to make an entirely different Product.

Real world example: you (Client) go buy a bag of potato chips (Product). What impact does the Factory have on which ones you decide to buy?

##Really, how?
###Example:
````javascript

// 1. make a constructor. This isn't the Factory, though! This is the *Product*
function Thing(options){
  ....
}

// 2. make a skeleton Factory-- give it no parameters, no methods
function StuffFactory(){}

// 3. Tie the Factory to its Product via `prototype`.
//    `Thing` is the default Product for this Factory.
StuffFactory.prototype.stuffClass = Thing;

// 4. Add a Product-instance assembly line to the Factory
StuffFactory.prototype.makeThing = function(options){
  if (options.whichStuff === 'thing'){
    // make thing
  }
// 5. Roll the new Product out of the Factory
   return new this.stuffClass(options);
};

// 6. Okay, start this whole thing with a new instance of the Factory,
//    and set it to make a new Product.
var gizmoFactory = new StuffFactory();
var gizmo = gizmoFactory.makeThing({
                  gizmoColor: 'green',
                  gizmoSize: 'medium',
                  gizmoSuperPower: 'clairvoyance'
                  });
````

##How to test this Factory worked:

````javascript
  console.log( gizmo instanceOf Thing === true );
````

##Why:
* you don't always know in advance what you'll need in your software
* you don't want to tie your objects to certain methods, properties, etc. which will change:   the objects being created depend on dynamic properties

##References:
* http://addyosmani.com/resources/essentialjsdesignpatterns/book/
* http://msdn.microsoft.com/en-us/library/ee817667.aspx