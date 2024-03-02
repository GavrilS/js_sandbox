const title = document.querySelector('#title');

const onClick = () => {
    console.log('click event');
};

const onDoubleClick = () => {
    if (document.body.style.background !== 'blue') {
        document.body.style.background = 'blue';
        document.body.style.color = 'white';
    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => {
    if (title.innerHTML !== 'Event Listeners') {
        title.innerHTML = 'Event Listeners';
    } else {
        title.innerHTML = 'Right click event';
    }
};

const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');


title.addEventListener('click', onClick);
title.addEventListener('dblclick', onDoubleClick);
title.addEventListener('contextmenu', onRightClick);
title.addEventListener('mousedown', onMouseDown);
title.addEventListener('mouseup', onMouseUp);
title.addEventListener('mousewheel', onMouseWheel);
title.addEventListener('mouseover', onMouseOver);
title.addEventListener('mouseout', onMouseOut);
title.addEventListener('dragstart', onDragStart);
title.addEventListener('drag', onDrag);
title.addEventListener('dragend', onDragEnd);
