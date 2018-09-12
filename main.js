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

// spread

// destructuring

// classes

// subclasses

// modules
