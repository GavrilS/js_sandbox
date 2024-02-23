// Arrays
const numbers = [1, 3, 6, 18, 20, 45]
console.log(numbers)

const fruits = ['apple', 'banana', 'strawberry']
console.log(fruits)

const mix = new Array('kiwi', 23, null, undefined)
console.log(mix)

fruits[fruits.length] = 'raspberry'
console.log(fruits)

// Objects

const tasks = new Object({'a':1})
tasks.b = 2

x = tasks

person = {
    'id': 1,
    'name': 'John Doe'
}

x = person

const objMix = {...tasks, ...person}

x = objMix

const objMix2 = Object.assign({}, tasks, person)

x = objMix2

x = Object.keys(tasks)
x = Object.values(person)
x = Object.entries(objMix)
console.log(x)


// Destructuring and naming

const age = 10
const chName = 'Billy'

const child = {
    'age': age,
    'chName': chName
}

const smallPerson = {
    age,
    chName
}

console.log(child)
console.log(smallPerson)

// const { ageVal: age, chname: chName } = smallPerson; // Destructuring

// Destructure arrays
const numbers2 = [1, 2, 3, 4]

const [ first, second, ...rest ] = numbers2
console.log(first, second, rest)
