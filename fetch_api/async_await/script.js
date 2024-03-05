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

async function handleError() {
    try {
        const res = await fetch('http://httpstat.us/200');
        // const res = await fetch('http://httpstat.us/404');
        // const res = await fetch('http://httpstat.us/500');

        if (!res.ok) {
            throw new Error('Request Failed!');
        }

        const data = await res.text();
        console.log(data);
    } catch(error) {
        console.log('ERROR ', error);
    }
}

getUser();
getUsers();
handleError();
