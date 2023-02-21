const products = [
    { id: 1, name: 'laptop', price: 34000 },
    { id: 2, name: 'tablet', price: 300000 },
    { id: 3, name: 'mobile', price: 48000 },
    { id: 4, name: 'bike', price: 13000 }
]

const result2 = products.find(value => value.price > 40000);

console.log(result2);


const numbers = [12, 34, 56, 1, 34, 5, 6, 8, 25, 67, 89];

const result = numbers.find(num => num % 5 === 0);
console.log(result);

const numbers2 = [1, 3, 5, 7, 9];
const summary = numbers2.map(num => num + 1);
console.log(summary);