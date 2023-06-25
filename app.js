let pixels = 16;
let pixelSize = 3.75;
let r = document.querySelector(':root');
let penColor = 'blue';

const btn = document.getElementById('askHowMany');
btn.addEventListener('click', () => {
    clearGrid();
    pixels = prompt('How many squares would you like on either side?', '');
    makeGrid();
});

const red = document.getElementById('penRed');
red.addEventListener('click', () => penColor = 'red');
const blue = document.getElementById('penBlue');
blue.addEventListener('click', () => penColor = 'blue');
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => penColor = 'white');

function getPixelSize() {
    pixelSize = 720 / pixels + 'px';
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
            this.style.backgroundColor = penColor;
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