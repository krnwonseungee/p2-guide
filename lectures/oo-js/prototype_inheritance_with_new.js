


MountainBike = function(){
  this.type = "mountain"
  this.speed = 0
  this.rate = 2
}
RoadBike = function(){
  this.type = "road"
  this.speed = 0
  this.rate = 4
}

Bicycle = Object.create(MountainBike)
Bicycle.prototype.constructor = super.constructor

Bicycle.prototype.pedal = function(){
  this.speed += rate
}

Bicycle.prototype.toString = function(){
  return "Your " + this.type + " has a current speed of " + this.speed
}

b=new Bicycle("mountain bike")
console.log(b.toString())
console.log(b)
