const numbers = [4, 42, 76, 2, 17, 9, 6, 87, 53, 75, 3, 10,];
const numberlessthan20 = numbers.filter(x => x > 20);
// console.log(...numberlessthan20);



const Market = [
    { id: 20, Brand: 'apple', product: 'mobile', price: 70000 },
    { id: 20, Brand: 'apple', product: 'pc', price: 8000 },
    { id: 20, Brand: 'apple', product: 'watch', price: 56000 },
    { id: 20, Brand: 'apple', product: 'ipad', price: 7000 },
    { id: 20, Brand: 'apple', product: 'laptop', price: 32000 }

];


// const expensive = Market.filter(pro => pro.price > 10000);
// const expensive = Market.filter(pro => pro.price < 10000);
// const expensive = Market.filter(pro => pro.price < 100000);
const expensive = Market.filter(pro => pro.price > 100000);
console.log(expensive);
