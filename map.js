const numbers = [23, 34, 45, 34, 56];

const hello = numbers.map(num => num * 2);
console.log(hello);

const elements = [2, 5, 7, 8, 9];
const hi = elements.map(num1 => num1 * 5);
console.log(hi);

const numbers1 = [12, 56, 87, 44];

const result = numbers1.map(num3 => num3 / 2);
console.log(result);


const names = ['Tom hunks', 'Tommy', 'Tom Hiddelstone', 'Thor'];
const fullName = names.map(name => name.length);
console.log(fullName);

const products = [
    { id: 1, name: 'laptop', price: 34000 },
    { id: 2, name: 'tablet', price: 300000 },
    { id: 3, name: 'mobile', price: 48000 },
    { id: 4, name: 'bike', price: 13000 }
]

const result2 = products.map(value => value.price);

console.log(result2);