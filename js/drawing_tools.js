const pen = document.querySelector('#pen');
const eraser = document.querySelector('#eraser');

const penOption = document.querySelector('.pen-option');
const eraserOption = document.querySelector('.eraser-option');

const penSize = document.querySelector('#penSize');
const eraserSize = document.querySelector('#eraserSize');

let currentPenSize = 1;
let currentPenColor = 'black';
let currentEraserSize = 1;

pen.addEventListener('click', function () {
    penOption.classList.toggle('select');
    eraserOption.classList.remove('select');
    ctx.lineWidth = currentPenSize;
    ctx.strokeStyle = currentPenColor;
});

penSize.addEventListener('change', function () {
    let penSizeValue = penSize.value;
    currentPenSize = penSizeValue;
    ctx.lineWidth = currentPenSize;
    ctx.strokeStyle = 'black';
});

eraser.addEventListener('click', function () {
    eraserOption.classList.toggle('select');
    penOption.classList.remove('select');
    ctx.strokeStyle = 'white';
    ctx.lineWidth = currentEraserSize;
});

eraserSize.addEventListener('click', function () {
    let eraserSizeValue = eraserSize.value;
    currentEraserSize = eraserSizeValue;
    ctx.lineWidth = currentEraserSize;
});
