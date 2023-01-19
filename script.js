let columns = 16;
let rows = 16;
let mouseValue = "click";
let currentDrawMode = "click";
let changeBackgroundColor;

let container = document.createElement('div');
container.className = "container"
let grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create columns
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let row = document.createElement('div'); // create rows
        row.className = 'row';
        column.appendChild(row); 
    }
    grid.appendChild(column); 
}
document.body.appendChild(container);
container.appendChild(grid)

let innerDiv = document.createElement('div');
innerDiv.className = 'inner-div';

let buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
buttonContainer.appendChild(document.getElementById("favcolor"))
for (let i = 0; i < 5; i++) {
    let button = document.createElement('button');
    button.id = 'Button ' + (i + 1);
    button.className = 'button';
    buttonContainer.appendChild(button);
}
innerDiv.appendChild(buttonContainer);

container.appendChild(innerDiv);

document.getElementById("Button 1").innerText = "Color";
document.getElementById("Button 2").innerText = "Clear";
document.getElementById("Button 3").innerText = "Eraser";
document.getElementById("Button 4").innerText = "DrawMode - Hover";
document.getElementById("Button 5").innerText = "DrawMode - Click";

let divs = document.querySelectorAll(".row");
let colorClick = false;
let eraserClick = false;

document.getElementById("Button 1").addEventListener("click", colorClicked)
function colorClicked() {
    colorClick = true;
    let colorValue = document.getElementById("favcolor").value;
    changeBackgroundColor = e => { e.target.style.backgroundColor = colorValue; }
    divs.forEach(div => {
        div.removeEventListener(currentDrawMode, changeBackgroundColor);
        div.addEventListener(mouseValue, changeBackgroundColor);
    });
    eraserClick = false;
}

let clearDivs = document.getElementById("Button 2")
clearDivs.onclick = function() {location.reload(true)}

document.getElementById("Button 3").addEventListener("click", eraserClicked)
function eraserClicked() {
    eraserClick = true;
    colorClick = false;
    changeBackgroundColor = e => { e.target.style.backgroundColor = "white"; }
    divs.forEach(div => {
        div.removeEventListener(currentDrawMode, changeBackgroundColor);
        div.addEventListener(mouseValue, changeBackgroundColor);
    });
}

document.getElementById("Button 4").addEventListener("click", modifyDrawMode);
document.getElementById("Button 5").addEventListener("click", modifyDrawModeClick);

function modifyDrawMode() {
    currentDrawMode = "mouseover";
    mouseValue = "mouseover";
    divs.forEach(div => {
        div.removeEventListener("click", changeBackgroundColor);
        div.addEventListener("mouseover", changeBackgroundColor);
    });
}

function modifyDrawModeClick() {
    currentDrawMode = "click";
    mouseValue = "click";
    divs.forEach(div => {
        div.removeEventListener("mouseover", changeBackgroundColor);
        div.addEventListener("click", changeBackgroundColor);
    });
}

