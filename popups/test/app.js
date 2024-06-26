let activePopup = false;
const mainComponent = document.querySelector('.container');

const getReportPopup = document.querySelector('#get-report');
const getReportBtn = document.querySelector('#btn1');
function getReport() {
    closePopup();
    mainComponent.style.opacity = 0.1;
    getReportPopup.classList.add('open-popup');
    activePopup = true;
}

const submitReportPopup = document.querySelector('#send-report');
const submitReportBtn = document.querySelector('#btn2');
function submitReport() {
    closePopup();
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

document.addEventListener('click', (e) => {
    // console.log('Target: ', e.target);
    if (activePopup&& e.target !== getReportBtn && e.target !== submitReportBtn) {
        const popupClicked = e.target.closest('.popup');
        if (!popupClicked) {
            closePopup();
        }
    }
});

document.addEventListener('keyup', (e) => {
    // console.log('Key up event: \n', e);
    if (e.key === 'Escape' && activePopup) {
        closePopup();
    }
});
