//PRIVATE MEMBERS USING SYMBOLS;
const _name = Symbol();
const _intro = Symbol();
class bio {
  constructor(name) {
    this[_name] = name;
  }
  [_intro]() {}
  //methods are in the prototype of an object.
}
const me = new bio("vishal");
console.log(me);
//symbols cannot be accessed by name;
//However,there's a hack to get the symbols;
const myName = Object.getOwnPropertySymbols(me)[0];
console.log(me[myName]);

//PRIVATE MEMBERS USING WEAKMAPS;
