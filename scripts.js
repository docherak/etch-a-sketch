const container = document.querySelector('.container');
//const div = document.createElement('div')
//div.classList.add('grid');
//div.textContent = "";

createGrid();

function createGrid() {
  for (var i = 0; i < 16; i++) {
    initiateRow();
  }
}

function initiateRow() {
  for (var i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.textContent = "";
    container.appendChild(div).className = 'grid';
  }
}

//let grid = [];
//for (var i = 0; i < 16; i++) {
//  grid.push(div);
//}
//grid.forEach(elem => container.appendChild(elem));

//for (var i = 0; i < 16; i++) {
//  container.appendChild(div);
//  console.log(container);
//}
