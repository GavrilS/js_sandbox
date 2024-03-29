function sayHello() {
    console.log('Hello World!');
}

// For single export
// export default sayHello;


function sayBye() {
    console.log('Good Bye!');
}

// For multiple export
export {
    sayHello,
    sayBye
};
