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
