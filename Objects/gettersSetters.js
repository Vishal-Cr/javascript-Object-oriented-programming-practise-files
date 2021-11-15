//////Use Object.defineProperty to define getter or setter.
function foods(fruits, veggies) {
  this.fruits = fruits;
  this.veggies = veggies;

  let defaultPrices = { fruit: 150, veggies: 90 };

  this.getdefaultPrices = function () {
    return defaultPrices;
  };

  this.list = function () {
    console.log(fruits, veggies);
  };

  Object.defineProperty(this, "defaultPrices", {
    get: function () {
      return defaultPrices;
    },

    set: function (value) {
      if (!value.f || !value.v) throw new Error("invalid setter");
      defaultPrices = value;
    },
  });
}
let budget1 = new foods("apple", "broccoli");
console.log(budget1.defaultPrices);
