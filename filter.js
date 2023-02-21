const products = [
    { id: 1, name: 'laptop', price: 34000 },
    { id: 2, name: 'tablet', price: 300000 },
    { id: 3, name: 'mobile', price: 48000 },
    { id: 4, name: 'bike', price: 13000 }
]

const result2 = products.filter(value => value.price > 30000);

console.log(result2);

const numbers = [12, 34, 56, 1, 34, 5, 6, 8, 67, 89];

const result = numbers.filter(num => num < 10);
const result3 = numbers.filter(num => num > 10);
const result4 = numbers.filter(num => num > 50);
const result5 = numbers.filter(num => num % 2 === 0);
console.log(result5);