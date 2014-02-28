function Eagle() {
  this.animal = "Eagle";
  this.sound = "Scrawwww!"
}

Eagle.prototype.say = function() {
  console.log("The " + this.animal.toLowerCase() + " says " + this.sound.toLowerCase());
}

var baldy = new Eagle();
baldy.say();


var kermit = {
  animal: "FrOg",
  sound: "Ribbit"
};

Eagle.prototype.say.call(kermit)


Eagle.prototype.say.call({
  animal: "Pig",
  sound: "Oh Kermeeeee, who loves you more than *moi*?"
})
