// Create a promise
const promise = new Promise((resolve, reject) => {
    // Perform async tasks here
    setTimeout(() => {
        console.log('Async task')
        resolve();
    }, 1000);
});


// Handle a promise response
promise.then(() => {
    console.log('Promise consumed...')
});


// Errors in promises
const promiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = false;
        let error = true;

        if (!error) {
            resolve('Success!');
        } else {
            reject('Something went wrong inside the promise!');
        }
    }, 1000);
})

// Handle promise errors
// promiseError.then((status) => {
//     console.log(`Promise status: ${status}`);
// })
// .catch((error) => console.log(error))
// .finally(() => console.log('The finally block runs always, but it is not necessary!'));

// Promise chaining
promiseError.then((status) => {
    console.log(`Promise status: ${status}`);
    return 'Success';
})
.then((status) => {
    console.log(status);
    return 'Hello world from promise chaining!';
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
    return 'There was an error';
})
.then((errorMessage) => console.log(`This runs even if there was an error: ${errorMessage}`))
.finally(() => console.log('The finally block runs always, but it is not necessary!'));

console.log('Hello World');
