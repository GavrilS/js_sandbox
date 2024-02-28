// document.querySelectorAll()

const headings = document.querySelectorAll('.heading');

headings.forEach((item, index) => {
    console.log(item);

    if (index === 1) {
        item.style.color = 'green';
    }
});
