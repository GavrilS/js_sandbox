console.log(window);
console.dir(window.document);

console.log(document.body.innerHTML);

// document.body.innerHTML = '<h1>Hello World</h1>';

document.querySelector('h1').innerHTML = 'Using querySelector';
console.log(document.getElementById('main'));
document.getElementById('main').innerHTML = '<h1>Main</h1>';

let output;

output = document.all;
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

console.log(output);
