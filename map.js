const numbers = [2, 4, 7, 4, 6, 9, 10];
const doubleNumber = [];

for (const number of numbers) {
    doubleNumber.push(number * 2);
}

// console.log(doubleNumber);

const v = 15; //global variable 

function num(s) {
    var z = 15;  //z is locol variable
    const sum = s + v + z;
    return sum;

}


// console.log(num(10));
// console.log(z);



const TreeNumber = [1, 2, 3, 4, 5];

// const doubleIT = num => num * 2;

// const makeDoule = TreeNumber.map(doubleIT);
// console.log(makeDoule);



const makeDoule1 = TreeNumber.map(x => x * 2);
console.log(makeDoule1);