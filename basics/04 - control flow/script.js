// If/else statements
if (true) {
    console.log('This is true!')
} else {
    console.log('This is not true!')
}

if (false) {
    console.log('This is false!')
}

const d = new Date();
console.log(d);

let hour = d.getHours();

if (hour < 12) {
    console.log('Good morning');
} else if (hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good night');
}


// Switches
let month = d.getMonth();

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    default:
        console.log('It is not the beginning of the year!')
        break;
}

switch (true) {
    case hour < 12:
        console.log('Good M');
        break;
    case hour < 18:
        console.log('Good A');
        break;
    default:
        console.log('Good N');
        break;
}

// Logical operators
// && - will return first false value or the last value
console.log('&&');
let a;
a = 10 && 20;
console.log(a);
a = 10 && undefined && 20;
console.log(a);

// || - will return the first true value or the last value
console.log('||');
a = 10 || 20;
console.log(a);
a = '' || null || 30;
console.log(a);

// ?? - will return the right hand side when the left is null or undefined
console.log('??');
a = 10 ?? 20;
console.log(a);
a = null ?? 40;
console.log(a);

// Ternary operators
let age = 19;

if (age >= 18) {
    console.log('You can drive');
} else {
    console.log('You cannot drive');
}

age >= 18 ? console.log('You can drive') : console.log('You cannot drive');
let canDrive = age >= 18 ? true : false;
let canDrive2 = age >= 18 ? (console.log('True'), 'You can drive') : (console.log('False'), 'You cannot drive');
console.log(canDrive);
console.log(canDrive2);
