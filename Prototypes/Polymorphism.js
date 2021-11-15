// polymorphism means many forms.
//it can be different implementations of the same method

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Polygon() {}

function Triangle() {}

function Square() {}

extend(Triangle, Polygon);
extend(Square, Polygon);

Triangle.prototype.areas = function () {
  console.log("Area of a Triangle");
};
Square.prototype.areas = function () {
  console.log("Area of a Square");
};
const t = new Triangle();
const s = new Square();
const p = new Polygon();

const polygons = [new Square(), new Triangle()];

for (let sides of polygons) {
  //if its a triangle or a square a
  //   different areas implementations will be called.
  sides.areas();
}
