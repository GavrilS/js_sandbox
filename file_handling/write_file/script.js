// const fileName = 'test_file.txt'
// local path: 

const saveBtn = document.querySelector('#save-btn');
const clearBtn = document.querySelector('#clear-btn');
const message = 'Hello World';


async function onSave() {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write the file
    await writableStream.write(message);

    // close the file and write the contents to disk
    await writableStream.close();
}


async function onClear() {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write the file
    await writableStream.write('');

    // close the file and write the contents to disk
    await writableStream.close();
}


saveBtn.addEventListener('click', onSave);
clearBtn.addEventListener('click', onClear);
