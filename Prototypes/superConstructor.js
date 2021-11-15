function Dish(dish) {
  this.dish = dish;
}

function MainIngredients(dish, items) {
  Dish.call(this, dish); //this is how to call super constructor.

  this.items = items;
}

function Cooked(status) {
  this.status = status;
}
MainIngredients.prototype = Object.create(Dish.prototype);

Cooked.prototype = Object.create(Dish.prototype);
//Object.create also sets the constructor to parent object
///// So,Resetting the constructor function

MainIngredients.prototype.constructor = MainIngredients;

Cooked.prototype.constructor = Cooked;
//////

const chickenBiryani = new Dish();

const chickenAndRice = new MainIngredients(
  "chicken biryani",
  "chicken and Biryani rice"
);

const availability = new Cooked(true);
