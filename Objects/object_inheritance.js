let name = {
  name: "vishal anthony",
  age: 26,
};

let bio = function (profession, place, hobbies) {
  console.log(
    `${this.name} who is ${this.age}years old is a ${profession} and lives in ${place} and likes to ${hobbies} `
  );
};
// bio.call(name, "Web Developer", "Odisha");
// bio.apply(name, ["Web Developer", "Odisha"]);
let vishal = bio.bind(name, "web developer", "rourkela");
vishal();

////////pollyfill in bind method////////////
//Function.prototype make the bind1 method available to every functions.
Function.prototype.bind1 = function (...args) {
  console.log(args);
  let obj = this;
  let params = args.slice(1);
  return function (args1) {
    obj.apply(args[0], [...params, ...args1]);
  };
};

let anthony = bio.bind1(name, "writer", "bangalore");
anthony("work");
