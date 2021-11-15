//All the objects in javascript accept only a single object
//also know as it's parent object which is its prototype object.
//prototype is basically a parent object.
//OBJECTBASE --> IS THE ROOT OBJECT IN JAVASCRIPT AND IT DOES NOT HAVE A PARENT.
function Fruit(fruit) {
  this.fruit = fruit;
}
Fruit.prototype.toString = function () {
  return "Fruits are good for health";
};

Fruit.prototype.fruitSeason = function () {
  if (this.fruit == "mango") return "Summer Fruit";
  if (this.fruit == "strawberry") return "Winter Fruit";
  if (this.fruit == "banana") return "All seasonal Fruit";
};
let mango = new Fruit("mango");
let strawberry = new Fruit("strawberry");
let banana = new Fruit("banana");

//Creating my own Prototypal inheritance
//the goal is to make monday,tuesday.. inherit protoype of weekdays object.

function weekDays(diet) {
  return `Weekly Excercise Routine ${diet}`;
}

function Monday(tasks, diet) {
  weekDays.call(this, diet);
  this.tasks = tasks;
}

function Tuesday(tasks) {
  this.tasks = tasks;
}

weekDays.prototype.diet = function () {
  console.log("Keep the diet Clean"); //diet method is inherited by week but how can i make it inherited by other week days.

  //without repeating code.
};
//solution
Monday.prototype = Object.create(weekDays.prototype);
//whenever setting a prototype of an object.
//set the constructor function also
Monday.prototype.constructor = Monday;
const workout = new Monday("Chest Workout", "chicken and salad");
const Jogging = new Tuesday("Jogging");
const week = new weekDays();

//Super constructor can be called using the call function.
