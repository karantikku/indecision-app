class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

const me = new Person("Karan Tikku", 24);
const other = new Person();
console.log(me.getDescription());
console.log(other.getDescription());
