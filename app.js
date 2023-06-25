let pixels = 16;
let pixelSize = 3.75;
let r = document.querySelector(':root');

const btn = document.getElementById('askHowMany');
btn.addEventListener('click', () => {
    clearGrid();
    pixels = prompt('How many pixels would you like on either side?', '');
    makeGrid();
});
/* console.log(pixels);
const test = document.getElementById('test');
test.addEventListener('click', () => alert(pixels)); */

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