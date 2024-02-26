// for loops
console.log('for loops');
for (let i = 0; i <= 30; i++) {
    if (i === 10) {
        console.log('Skipping 10...');
        continue;
    }
    if (i === 20) {
        console.log('20 is enough, breaking...');
        break;
    }
    console.log('Number ' + i);
}

// while loop
console.log('while loop');
let k = 0;

while (k <= 30) {
    if (k===10) {
        console.log('Skipping 10...');
        k++;
        continue;
    }
    if (k === 20) {
        console.log('20 is enough, breaking...');
        break;
    }
    console.log('Number ' + k);
    k++;
}

// do while loop
console.log('do while loop');
let j = 0;

do {
    if (j===10) {
        console.log('Skipping 10...');
        j++;
        continue;
    }
    if (j === 20) {
        console.log('20 is enough, breaking...');
        break;
    }
    console.log('Number ' + j);
    j++;
} while (j <= 30);

// array loops: for of loop (works for strings and maps too)
console.log('array loops: for of loop');
const items = ['lamp', 'desk', 'book', 'pen', 'computer'];

for (let item of items) {
    console.log('Item is ' + item);
}

// array loops: for in loop (works for objects and arrays, but it gets the keys/index)
console.log('array loops: for in loop');

let menuObj = {
    'meal1': 'pasta',
    'meal2': 'chicken',
    'meal3': 'fish',
    'meal4': 'salad'
}

for (let key in menuObj) {
    console.log(key, menuObj[key]);
}

// array loops: forEach
console.log('forEach');
items.forEach(function (item) {
    console.log(item);
});

// array loops: filter (returns a new array with the elements of the old one that meet a specific condition)
const longWords = items.filter(function(item) {
    return item.length > 4;
});
console.log('Filter');
console.log(longWords);

// array loops: map (executes the operation for each item in the array and returns the updated array)
console.log('array loops: map');
const numbers = [1, 2, 3, 4, 5];
// This is the shorthand for the callback function, but we can use the long version as well
const doubleNums = numbers.map((number) => number * 2);
console.log(doubleNums);

// array loops: reduce (reduces the values of an array to a single value - good example is the total of a 
// shopping cart)
console.log('array loops: reduce');
// First argument is the next element we will process, current is the current total, 20 is the initial value
// which can be set to anything or skipped all together
const total = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 20);

console.log(total);
