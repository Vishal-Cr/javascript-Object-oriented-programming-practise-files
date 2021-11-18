//In classical oop two types of methods
//inheritanc and static method.
//static  does'nt become a part of the object but of class
//to call a static method an instance of the method is not required.

//static method is used to create utility functions that are not part
//of any object.

class Food {
  constructor(price) {
    this.price = price;
  }
  cooking() {}

  //Static Method
  static parse(str) {
    const price = JSON.parse(str).price;
    return new Food(price);
  }
}

const chicken = Food.parse('{"price":220}');
console.log(chicken);
