// fetching a json file
fetch('./users.json')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => console.log(data));


// fetching a text file
fetch('./lorem.txt')
    .then((response) => response.text())
    .then((data) => console.log(data));

// fetching from an api
fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
