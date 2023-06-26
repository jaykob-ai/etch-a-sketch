let pixels = 16;
let pixelSize = 3.75;
let r = document.querySelector(':root');
let penColor = 'blue';
let isColored = false;

const btn = document.getElementById('askHowMany');
btn.addEventListener('click', () => {
    clearGrid();
    pixels = prompt('How many squares would you like on either side?', '');
    makeGrid();
});

const red = document.getElementById('penRed');
red.addEventListener('click', () => {
    isColored = false;
    penColor = 'red';
});
const blue = document.getElementById('penBlue');
blue.addEventListener('click', () => {
    isColored = false;
    penColor = 'blue'
});
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => {
    isColored = false;
    penColor = 'white'
});
const random = document.getElementById('random');
random.addEventListener('click', () => {
    isColored = false;
    penColor = `rgb(${randomValue()},${randomValue()},${randomValue()})`
});
const colored = document.getElementById('colored');
colored.addEventListener('click', () => {isColored = true});

function getPixelSize() {
    pixelSize = 600 / pixels + 'px';
    return pixelSize;
}
function makeGrid() {
    for (let i = 0; i < (pixels * pixels); i++){
        let div = document.querySelector('#grid');
        let pixel = document.createElement('div');
        getPixelSize();
        setPixelSizeInCss();
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', function() {
            if (isColored === false) {
                this.style.backgroundColor = penColor;
            } else {
                this.style.backgroundColor = `rgb(${randomValue()},${randomValue()},${randomValue()})`;
            }
        });
        div.appendChild(pixel);
    }
}
function setPixelSizeInCss() {
    r.style.setProperty('--pixelSize', pixelSize);
}
function clearGrid() {
    let x = document.getElementsByClassName('pixel');
    while(x[0]) { //erik fragen
        x[0].parentNode.removeChild(x[0]);
    }
}
function randomValue() {
    let min = 0;
    let max = 255;
    Math.ceil(min);
    Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}