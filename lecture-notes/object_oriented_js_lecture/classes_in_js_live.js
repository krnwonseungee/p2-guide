function Talker(name) {
  this.name = name;
}

Talker.prototype = {
  sayHi: function() {
    return "hello " + this.name;
  },
  dance: function() {
    return "waltz " + this.name;
  }
}

var t = new Talker("Mathilde")
t.sayHi();
console.log(t.dance());

console.log(typeof(Talker));
