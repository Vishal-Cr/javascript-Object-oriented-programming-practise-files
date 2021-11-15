function Dish(item, quantity) {
  this.item = item;
  this.quantity = quantity;
}

function MainIngredients(items) {
  this.items = items;
}

function Cooked(status) {
  this.status = status;
}
MainIngredients.prototype = Object.create(Dish.prototype);

Cooked.prototype = Object.create(Dish.prototype);
//Object.create also sets the constructor to parent object
// So,Resetting the constructor function

MainIngredients.prototype.constructor = MainIngredients;

Cooked.prototype.constructor = Cooked;

const chickenBiryani = new Dish("ChickenBiryani", 1);

const chickenAndRice = new MainIngredients("chicken and Biryani rice");

const availability = new Cooked(true);

//The traditional method to extend prototype.

// MainIngredients.prototype.Dish = function () {
//   console.log("chicken Biryani can be made with chicken and rice");
// };

// Cooked.prototype.MainIngredients = function (value) {
//   if (value == true) return "available";
//   return "Currently not available";
// };

// I want the dish prototype to be inherited by both mainIngredients and availabilty.

// Cooked.prototype.Dish = function () {
//   if (this.status) return "The Ingredients are available to be cooked";
//   return "The ingredients are currently not available. ";
// };

// With the above method the following prototype chain is formed.
// Dish (Have access to the Base-object prototype)
// ^
// MainIngredients(Have access to the Base-Object and Dish prototype)
// ^
// Cooked(Have access to the Base-Object,Dishand and MainIngredients Prototype)

// !!!! But The above method is Long, Tedious and time taking !!!!

//A Slightly Better Way to do the above Solution.

//By using Object.create, just make sure to declare it above the instance declaration of the object.

//There's Just a little flaw with the Object.create implementation,

// above can also prototypal inheritance can also be achived using

//  for ex:
// new MainIngredients.prototype.constructor('paneer');

//this would have given the same result as const paneer =new MainIngredients('paneer');

// but using object.create changes the constructor to the parent object hence we no longer

//create the objects instance based on constructors dynamically.
