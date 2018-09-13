// const & let
let name = 'Maxwell';
let test;

console.log(name);
name = 'Jack';

const nums = [1,2,3,4];

const person = {
  name: 'John',
  age: 33
}

person.name = 'Jack'; // valid
nums.push(5); // valid

// arrow functions
// function sayHello() {
//   console.log('hello');
// }

// one line
const sayHello = () => console.log('hello');

// param
const sayWhat = name => console.log(name);

// params
const sayWhat2 = (name, time) => console.log(name);

// template literals
const sayHi = name => console.log(`Hello ${name}`);
sayHello();

// for each
const fruits = ['apples', 'oranges', 'grapes'];
fruits.forEach((fruit, index) => console.log(fruit));

// map
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1));
console.log(singleFruit)

// filter
// returns an array with things filtered out
const people = [
  {id: 1, name: 'Karen'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Mike'}
];

// return a new array
const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// spread
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

console.log(arr2);
console.log('arr3: ', arr3)

const obj = {
  name: 'Max',
  age: 26
}

const obj2 = {
  ...obj,
  email: 'gmail'
}

console.log(obj2)

// destructuring
const profile = {
  person1: 'john doe',
  address: {
    street: '40 main street',
    city: 'evanston',
  },
  hobbies: ['movies', 'music']
}

const { person1, address, hobbies } = profile
const { street } = profile.address;

console.log(person1, address, hobbies, street);

// classes
// functional components vs class-based components
class Person {
  // properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  greet() {
    return `Hello my name is ${this.name} and I am ${this.age}`;
  }
}

const person3 = new Person('John', 22);

// subclasses
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);// inherits properties from Person (name, age)
    this.balance = balance;
  }
}


const customer1 = new Customer('Kris', 44, 300);
console.log(customer1.name);
// modules

// file 1 file1.js
export const name = "Jeff";
export const nums = [1,23, 34];
export default Person;

// file 2 file2.js
import { name, nums } from './file1';
import Person from './file1'; // exported as default, no need for braces
