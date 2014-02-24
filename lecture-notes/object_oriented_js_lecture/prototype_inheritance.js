var ChildPrototype = {
  sayHello: function() {
              console.log("hello mama! " + this.type);
            }
}

var DogPrototype = {
  sayHello: function() {
              console.log("woof, woof, existentialism, woof says the " + this.type);
            },
  breed:  "Cavalier King Charles"
}

var aThing = {
  type: 'doge'
}

aThing.__proto__ = DogPrototype;
aThing.sayHello();
console.log(aThing.breed);

aThing.__proto__ = ChildPrototype;
aThing.sayHello();
console.log(aThing.breed);

/*
 * OUTPUT:
 * woof, woof, existentialism, woof says the doge
 * hello mama! doge
 *
 */
