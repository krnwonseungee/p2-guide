function Talker(word) {
  this.word = word;
}

Talker.prototype.sayHello = function() {
  console.log("Hello " + this.word);
}

var en_espana = new Talker("mundo");
en_espana.sayHello();
var en_la_france = new Talker("le monde");
en_la_france.sayHello()
