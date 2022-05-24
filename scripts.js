const DEF_MODE = 'color';
const DEF_COLOR = 'blue';
const DEF_SIZE = 36;

let currMode = DEF_MODE;
let currColor = DEF_COLOR;
let currSize = DEF_SIZE;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const container = document.querySelector('.container');
let root = document.querySelector(':root');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('cellPixels');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');

slider.oninput = function() {
  sliderValue.innerHTML = this.value;
}
slider.oninput = (e) => changeCurrSize(e.target.value);
colorPicker.oninput = (e) => setCurrColor(e.target.value);
colorBtn.onclick = () => setCurrMode('color');
rainbowBtn.onclick = () => setCurrMode('rainbow');
eraseBtn.onclick = () => setCurrMode('eraser');
clearBtn.onclick = () => resetGrid();


window.onload = () => {
  createGrid(DEF_SIZE);
  setCurrMode('color');
  sliderValue.innerHTML = slider.value;
}

// Functions
function changeCurrSize(size) {
  setCurrSize(size);
  sliderValue.innerHTML = slider.value;
  resetGrid();
}

function resetGrid() {
  container.innerHTML = '';
  createGrid(currSize);
}

function createGrid(size) {
  for (var i = 0; i < size; i++) {
    initiateRow(size);
  }
}

function initiateRow(size) {
  for (var i = 0; i < size; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'cell');
    div.addEventListener('mouseover', fill);
    div.addEventListener('mousedown', fill);
    container.appendChild(div);
  }
}

function fill(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if (currMode === 'rainbow') {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  } else if (currMode === 'color') {
    e.target.style.backgroundColor = currColor;
  } else if (currMode === 'eraser') {
    e.target.style.backgroundColor = '#FAEBD7';
  }
}

function changeCurrMode(mode) {
  if (currMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currMode === 'eraser') {
    eraseBtn.classList.remove('active')
  }

  if (mode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (mode === 'color') {
    colorBtn.classList.add('active')
  } else if (mode === 'eraser') {
    eraseBtn.classList.add('active')
  }
}

function setCurrMode(mode) {
  changeCurrMode(mode);
  currMode = mode;
}

function setCurrColor(color) {
  currColor = color;
  root.style.setProperty('--cell-bg-color-var', color);
}

function setCurrSize(size) {
  currSize = size;
  root.style.setProperty('--grid-resolution', size);
}
