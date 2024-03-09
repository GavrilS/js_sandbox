class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
    }

    get lastName() {
        return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
    }

    set firstName(value) {
        this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }

    set lastName(value) {
        this._lastName = value.charAt(0).toUpperCase() + value.slice(1);
    }

    // Static methods
    static sayHello() {
        console.log('Hello World!');
    }
}


const randomPerson = new Person('john', 'doe');

console.log(randomPerson);
console.log(randomPerson.firstName);
console.log(randomPerson.lastName);
randomPerson.firstName = 'bil';
randomPerson.lastName = 'doe';
console.log(randomPerson);

Person.sayHello();
