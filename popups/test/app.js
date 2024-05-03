const mainComponent = document.querySelector('.container');
const getReportPopup = document.querySelector('#get-report');
function getReport() {
    mainComponent.style.opacity = 0.1;
    getReportPopup.classList.add('open-popup');
}

function closePopup() {
    const activePopups = document.getElementsByClassName('open-popup');
    console.log(activePopups);
    for (const elem of activePopups) {
        console.log(elem);
        elem.classList.remove('open-popup');
        mainComponent.style.opacity = 1;
    }
}
