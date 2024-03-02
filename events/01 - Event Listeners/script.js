const clearButton = document.querySelector('#clear');

function onClear() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        if (index === 1) {
            item.innerHTML = 'Saved';
        } else {
            item.outerHTML = '';
        }
    })
}

// JavaScript Event Listener
// clearButton.onclick = function() {
//     alert('Clear Items');
// };

// addEventListener()
clearButton.addEventListener('click', function() {
    alert('Clear Items');
});

clearButton.addEventListener('click', onClear);

//  setTimeout() to remove event listener when it is using a named function
setTimeout(() => clearButton.removeEventListener('click', onClear), 5000);

// replicate event programatically
// setTimeout(() => clearButton.click(), 5000);
