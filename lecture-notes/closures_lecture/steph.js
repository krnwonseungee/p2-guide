function larry() {
  console.log('hi larry, it is ' + this.day);
}


function greeter(){
  console.log("Hello " + this.name);
}

var names = [{name: "stephen"}, {name: "Chermaine"}]
for (var i =0; i < names.length; i++){
  greeter.call(names[i]);
}


