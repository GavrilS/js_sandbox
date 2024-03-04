// this is an example of a post request with the fetch api using a mock server for testing apis
// to check the test server go to => https://jsonplaceholder.typicode.com/posts
function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body
            // when the variable and the value have the same name we can just do:
            // title,
            // body
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123' // not necessary, just an example of a header value
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}


createPost({title: 'My post', body: 'This is a test of the fetch api with a POST method.'});
