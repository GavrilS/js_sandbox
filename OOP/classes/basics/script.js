// Class example
class Shape {
    constructor(type) {
        this.type = type
    }

    logType() {
        console.log('Shape type: ' + this.type);
    }
}

// Inheritance example
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');

        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }

    // Polymorphysm example
    logType() {
        console.log('This is a Rectangle!');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');

        this.radius = radius;
    }
}


const shape = new Shape('Shape');
const rect = new Rectangle(10, 30);
const circle = new Circle(9);

shape.logType();
rect.logType();
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
circle.logType();
