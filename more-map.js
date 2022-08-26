const number = [130, 14, 150, 16, 170];
const half = number.map(n => n / 2);
// console.log(half);


const friends = ['Hasan', 'Thamina', 'Kajol', 'lota'];
const fristLetter = friends.map(x => x[0]);
const fristLetter1 = friends.map(x => x.length);
// console.log(...fristLetter);
// console.log(...fristLetter1);


const Market = [
    { id: 20, Brand: 'apple', product: 'mobile', price: 70000 },
    { id: 20, Brand: 'apple', product: 'pc', price: 78000 },
    { id: 20, Brand: 'apple', product: 'watch', price: 56000 },
    { id: 20, Brand: 'apple', product: 'ipad', price: 87000 },
    { id: 20, Brand: 'apple', product: 'laptop', price: 32000 }

];

const getProduct = Market.map(item => item.product);
console.log(...getProduct);