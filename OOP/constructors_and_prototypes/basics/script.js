// Basic objects - object literals
const rectangle = {
    'height': 20,
    'width': 40,
    'area': function () {
        return this.height * this.width;
    }
};

console.log('Basic object: ', rectangle);
console.log(rectangle.area());

// Constructor functions
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width * this.height;
    }
}

const rect1 = new Rectangle(10, 40);

console.log('rect1: ', rect1);
console.log(rect1.area());

// Property options
rect1.color = 'blue';
rect1.perimeter = function() {
    return 2 * (rect1.width + rect1.height);
};
console.log('rect1: ', rect1);
console.log(rect1.perimeter());

delete rect1.perimeter;
console.log('rect1: ', rect1);

// Get properties
console.log(Object.keys(rect1));
console.log(Object.values(rect1));

// More efficient rectangle object - making use of prototypes
function SmartRectangle(width, height) {
    this.width = width;
    this.height = height;
}

SmartRectangle.prototype.area = function() {
    return this.width * this.height;
};

SmartRectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height);
};

SmartRectangle.prototype.isSquare = function() {
    return this.width === this.height;
};

const rect2 = new SmartRectangle(20, 30);

console.log('rect2: ', rect2);
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquare());
