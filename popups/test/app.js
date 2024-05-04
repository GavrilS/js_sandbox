let activePopup = false;
const mainComponent = document.querySelector('.container');

const getReportPopup = document.querySelector('#get-report');
function getReport() {
    mainComponent.style.opacity = 0.1;
    getReportPopup.classList.add('open-popup');
    activePopup = true;
}

const submitReportPopup = document.querySelector('#send-report');
function submitReport() {
    mainComponent.style.opacity = 0.1;
    submitReportPopup.classList.add('open-popup');
    activePopup = true;
}

function closePopup() {
    const activePopups = document.getElementsByClassName('open-popup');
    console.log(activePopups);
    for (const elem of activePopups) {
        console.log(elem);
        elem.classList.remove('open-popup');
        mainComponent.style.opacity = 1;
    }
    activePopup = false;
}

document.body.addEventListener('click', (e) => {
    const popupClicked = e.target.closest('.popup');
    console.log('Closest popup element: ', popupClicked);
    console.log('The body was clicked\n', e.target);
    console.log(`activePopup: `, activePopup);

})
