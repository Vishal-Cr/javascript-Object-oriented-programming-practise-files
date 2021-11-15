//ABSTRACTION IS USED TO HIDE IMPORTANT DETAILS FROM THE CLIENT SIDE IN AN OBJECT.
//Hide the details show the essentials.

function abstractBio(age) {
  let name = "vishal"; //this does'nt and hides it.
  this.name = "vishal"; //this would change
  console.log(this);
  this.age = age;
  return name + age;
}
const vishal = new abstractBio("vishal", 26);
vishal.name = "anthony"; //updating the name
console.log(vishal);

///////PRIVATE PROPERTIES AND METHODS//////
////closures////////
function name() {
  let x = "vishal";
  let y = "anthony";
  function bio() {
    console.log(x); //this is accesible.
    let z = "male";
  }
  //   console.log(z); //this is not accesible
  bio();
}
console.log(name());
