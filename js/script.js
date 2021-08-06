const videoElement = document.querySelector('video');
const canvas = document.getElementById('myCanvas');
const gallery = document.querySelector('.gallery');

const whiteBG = document.querySelector('.white');
const blackBG = document.querySelector('.black');

// video element
(async function () {
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
})();

//array DB
let linesDB = [];
let line = [];
let redoLinesDB = [];
let imgLinks = [];

//canvas
const ctx = canvas.getContext('2d');
ctx.lineCap = 'round'; //round lines
let isPenDown = false;

canvas.addEventListener('mousedown', function (e) {
    if (redoLinesDB.length) {
        redoLinesDB = [];
    }
    // console.log('Inside mouse down');
    isPenDown = true;
    let x = e.clientX - 308;
    let y = e.clientY - 31;
    ctx.beginPath();
    ctx.moveTo(x, y);

    let pointObject = {
        x: x,
        y: y,
        type: 'md',
        lineWidth: ctx.lineWidth,
        strokeStyle: ctx.strokeStyle,
    };
    line.push(pointObject);
});

canvas.addEventListener('mousemove', function (e) {
    if (isPenDown) {
        // console.log('Inside mousemove');
        let x = e.clientX - 308;
        let y = e.clientY - 31;
        ctx.lineTo(x, y);
        ctx.stroke();

        let pointObject = {
            x: x,
            y: y,
            type: 'mm',
        };
        line.push(pointObject);
    }
});

canvas.addEventListener('mouseup', function (e) {
    // console.log('mouseup');
    isPenDown = false;

    linesDB.push(line);
    line = [];

    // console.log(linesDB);
});

whiteBG.addEventListener('click', function () {
    canvas.setAttribute('style', 'background-color:white');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

blackBG.addEventListener('click', function () {
    canvas.setAttribute('style', 'background-color:black');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

gallery.addEventListener('click', function () {
    window.location.assign('pdf.html');
});
