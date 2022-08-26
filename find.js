const numbers = [4, 42, 15, 76, 2, 17, 9, 6, 87, 53, 75, 3, 10];
const finddividedByFive = numbers.find(x => x % 5 == 0);
// console.log(finddividedByFive);



const Market = [
    { id: 20, Brand: 'apple', product: 'mobile', price: 70000 },
    { id: 20, Brand: 'apple', product: 'pc', price: 8000 },
    { id: 20, Brand: 'apple', product: 'watch', price: 56000 },
    { id: 20, Brand: 'apple', product: 'ipad', price: 7000 },
    { id: 20, Brand: 'apple', product: 'laptop', price: 32000 }

];

const findlowPrice = Market.find(p => p.price < 10000);
console.log(findlowPrice);