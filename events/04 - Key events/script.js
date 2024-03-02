const input = document.querySelector('#input');

const onKeyPress = () => console.log('key press event');
const onKeyUp = () => console.log('key up event');
const onKeyDown = (e) => {
    console.log('key down event');
    console.log(e);
};

input.addEventListener('keypress', onKeyPress);
input.addEventListener('keyup', onKeyUp);
input.addEventListener('keydown', onKeyDown);
