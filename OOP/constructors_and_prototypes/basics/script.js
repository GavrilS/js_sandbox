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
