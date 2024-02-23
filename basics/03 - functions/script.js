function sayHello() {
    console.log('Hello World!');
}

sayHello();


function add(param1, param2) {
    console.log(param1 + param2);
}


add(4, 5);

function subtract(param1, param2) {
    return param1 - param2;
}

const res = subtract(40, 25);

console.log(res, subtract(10, 5))


// Default params
function default_params(user='Tester') {
    // if (!user) {
    //     user = 'Tester';
    // }

    return `User ${user} is available!`;
}

console.log(default_params())
console.log(default_params('Bot'))

function array_params(...params) {
    return params;
}

console.log(array_params(1, 2, 3, 4, 5));
