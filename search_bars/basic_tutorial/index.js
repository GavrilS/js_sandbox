const people = [
    {name: 'john doe', email: 'jdoe@test.com'},
    {name: 'billy jean', email: 'bjean@test.com'},
    {name: 'david schwimmer', email: 'dschwimmer@dl.com'},
    {name: 'betty white', email: 'bwhite@fly.com'},
    {name: 'henry cavil', email: 'henry@transparentorg.com'},
    {name: 'NA', email: 'NA@test.com'},
    {name: 'anon', email: 'anon@na.com'},
    {name: 'john doe junior', email: 'jdoe@test.com'},
    {name: 'john doe senior', email: 'jdoe@test.com'},
    {name: 'john doe lookalike', email: 'jdoe@smartlooks.com'},
    {name: 'susan madeupname', email: 'jdoe@nonexistant.com'},
]

const list = document.querySelector('.results-list');
function setList(results) {
    clearList();
    for (const person of results) {
        // console.log(person);
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');
        const text = document.createTextNode('Name: ' + person.name + '; Email: ' + person.email);
        resultItem.appendChild(text);
        list.appendChild(resultItem);
    }

    if ( results.length === 0 ) {
        noResults();
    }
}
setList(people);

function clearList() {
    // for (const li of list.children) {
    //     list.removeChild(li);
    // }
    while ( list.firstChild ) {
        list.removeChild(list.firstChild);
    }
}

function noResults() {
    const error = document.createElement('li');
    error.classList.add('error-message');
    const text = document.createTextNode('No results found...');
    error.appendChild(text);
    list.appendChild(error);
}

const searchInput = document.querySelector('.input');
searchInput.addEventListener('input', (e) => {
    let value = e.target.value;

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(people.filter(person => {
            return person.name.toLowerCase().includes(value) || person.email.toLowerCase().includes(value);
        }));
    }
})

const clearButton = document.querySelector('.clear-results');
clearButton.addEventListener('click', () => {
    clearList();
})
