//This is a new way to crete objects and implement inheritance
//although Javascript does'nt have classes like other languages
//They are basically just syntactical sugar.

//////HOISTING.///////
// Hoisted Means raised to the top.
//Function Declaration
function sayHello() {}

//Function Expression.
const sayGoodbye = function () {};

//Function declaration are hoisted but expressions are not.

//Class Declaration.
class Circle {}

//Class Expression
const Square = class {};

//Unlike functions class declaration and expressions are not hoisted.
