var anObject = new Object()
var anotherObject = {
  name: 'bob',
  age: 21,
  eyeColor: 'blue',
  speak: function(){console.log('hi')}
}

var anotherObject1 = {
  name: 'bob',
  age: 21,
  eyeColor: 'blue',
  speak: function(){console.log('hi')}
}

console.log(typeof(anObject))
console.log(typeof(anotherObject))

/*
  * OUTPUT
  * object
  * object
  */
