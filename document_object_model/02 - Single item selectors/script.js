// Get element/attribute
console.log(document.getElementById('para1'));
console.log(document.getElementById('head1'));
console.log(document.getElementById('initial_para'));
console.log(document.getElementById('initial_para').id);
console.log(document.getElementById('initial_para').class);
console.log(document.getElementById('initial_para').className);
console.log(document.getElementById('initial_para').getAttribute('id'));

// Set attribute
document.getElementById('head1').setAttribute('class', 'title');
document.getElementById('head1').setAttribute('title', 'Test Heading');

const firstHeading = document.querySelector('h1');
console.log(firstHeading);
firstHeading.innerHTML = 'Hello World';
firstHeading.className = 'world';
firstHeading.style.color = 'red'
console.log(firstHeading);
