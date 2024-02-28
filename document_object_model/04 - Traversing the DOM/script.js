let output;

const parentFirst = document.querySelector('.parent');

output = parentFirst;
output = parentFirst.children;
output = parentFirst.children[0].innerHTML;
output = parentFirst.children[1].className;
output = parentFirst.children[2].nodeName;

parentFirst.children[1].innerText = 'Hello World';
parentFirst.firstElementChild.innerHTML = 'First Child';
parentFirst.lastElementChild.innerHTML = 'Last Child';

output = parentFirst.childNodes;

console.log(output);
