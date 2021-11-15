class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hellow There ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); //calls the parent customer.

    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    //Exclusive functions
    return 500;
  }
}

const john = new Customer("john", "Doe", "55-555-5555", "standard");

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
