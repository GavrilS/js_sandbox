const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exampleUser = {
            'name': 'John Doe',
            'email': 'jdoe@example.com',
            'age': 33
        };
        resolve(exampleUser);
    }, 1000);
});

// handle async code with .then() syntax
promise.then((data) => console.log('from .then()', data));

// handle async code with async & await
async function getUser() {
    const result = await promise;
    console.log('from async&await', result);
}

async function getUsers() {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();

    console.log(data);
}

getUser();
getUsers();
