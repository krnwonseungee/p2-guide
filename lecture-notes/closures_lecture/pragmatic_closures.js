function Chef(conf) {
  this.name = conf.name;
  this.ingredients = conf.ingredients;
}

Chef.prototype.makeFood = function() {
  var meal = "Something delicious with: " + this.ingredients.join(', '),
      americanizedName = this.americanizedName();

  console.log(this.americanizedName() + " makes a delicious meal!  " + meal);
  return function() {
    console.log(americanizedName + "'s leftovers are a bounty of " + meal.toLowerCase());
  }
};

Chef.prototype.americanizedName = function() {
  if (this.name.match(/Boiardi/)) {
    return "Chef Boyardee";
  } else {
    return this.name
  }
}

function DbcStudent(name) {
  this.name = name;
  this.hungry = true;
}

DbcStudent.prototype.registerFoodSource = function(source) {
  console.log("Registering " + source.name + " as a food source");
  this.foodSource = source;
}

DbcStudent.prototype.isHungry = function() {
  return this.hungry;
}

DbcStudent.prototype.getMeal = function() {
  this.leftovers = this.foodSource.makeFood();
}

DbcStudent.prototype.work = function() {
  console.log("All DBC students work so very, very hard but especially " + this.name);
}

DbcStudent.prototype.eatLeftovers = function() {
  console.log('Firing up the microwave');
  this.leftovers();
}

aChef = new Chef({name: "Ettore 'Hector' Boiardi", ingredients: ['Pasta', 'Tomato Sauce']});
hungryStudent = new DbcStudent("Aditya Mahesh");

if (hungryStudent) {
  hungryStudent.registerFoodSource(aChef);
  hungryStudent.getMeal();
}

hungryStudent.work();
hungryStudent.work();
hungryStudent.work();
hungryStudent.eatLeftovers();
