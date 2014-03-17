function Talker(name) {
  this.name = name;

}

// var Talker = function(name) {
//   this.name = name;
// }

var t = new Talker("bob")
Talker.prototype.speak = function(){return "hi"}
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
