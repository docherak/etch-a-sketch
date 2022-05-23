const container = document.querySelector('.container');

const slider = document.getElementById('myRange');
const output = document.getElementById('cell-pixels');
output.innerHTML = slider.value;


createGrid(24);


// Functions

function createGrid(size) {
  for (var i = 0; i < size; i++) {
    initiateRow(size);
  }
}

function initiateRow(size) {
  for (var i = 0; i < size; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'cell');
    container.appendChild(div);
  }
}

slider.oninput = function() {
  output.innerHTML = this.value;
}
