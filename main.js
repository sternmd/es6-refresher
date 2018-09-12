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

// classes

// subclasses

// modules
