
window.addEventListener('load', start);

var redRange = document.querySelector('#red-range');
var redText = document.querySelector('#red-text');
var redR = 0;

var greenRange = document.querySelector('#green-range');
var greenText = document.querySelector('#green-text');
var greenG = 0;

var blueRange = document.querySelector('#blue-range');
var blueText = document.querySelector('#blue-text');
var blueB = 0;

var divCurrentColor = document.querySelector('#current-color');

function start() {
    console.log("DOM carregado");
    redRange.addEventListener('input', countRed);
    greenRange.addEventListener('input', countGreen);
    blueRange.addEventListener('input', countBlue);
}

function countRed (event) {
    redR = event.target.value;
    redText.value = redR;

    divCurrentColor.style.backgroundColor = "rgb(" + redR + "," + greenG + "," + blueB + ")";
}

function countGreen (event) {
    greenG = event.target.value;
    greenText.value = greenG;

    divCurrentColor.style.backgroundColor = "rgb(" + redR + "," + greenG + "," + blueB + ")";
}

function countBlue (event) {
    blueB = event.target.value;
    blueText.value = blueB;

    divCurrentColor.style.backgroundColor = "rgb(" + redR + "," + greenG + "," + blueB + ")";
}
