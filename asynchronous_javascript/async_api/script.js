let intervalId;

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function startChange() {
    if (!intervalId) {
        intervalId = setInterval(changeRandomColor, 1000);
    }
}

function stopChange() {
    clearInterval(intervalId);
}

document.querySelector('#set-interval').addEventListener('click', startChange);
document.querySelector('#stop-interval').addEventListener('click', stopChange);
