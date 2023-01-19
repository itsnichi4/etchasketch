let columns = 16;
let rows = 16;

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

for (let i = 0; i < 3; i++) {
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



let divs = document.querySelectorAll(".row");

let colorClick = false
document.getElementById("Button 1").addEventListener("click", colorClicked)
function colorClicked() {
    colorClick = true
    if (colorClick = true) {
        eraserClick = false
        let changeBackgroundColor = e => { e.target.style.backgroundColor = "red"; }
divs.forEach(div => {
    div.addEventListener("mouseover", changeBackgroundColor);
})
    }
}
let clearDivs = document.getElementById("Button 2")
clearDivs.onclick = function() {location.reload(true)}

let eraserClick = false
document.getElementById("Button 3").addEventListener("click", eraserClicked)
function eraserClicked() {
    eraserClick = true
    colorClick = false
    changeBackgroundColor = e => { e.target.style.backgroundColor = "white"; }
    divs.forEach(div => {
        div.addEventListener("mouseover", changeBackgroundColor)})
    
}
// function eraserClicked(e) {
//     e.target.style.backgroundColor = "white";
// }
// function colorClicked(e) {
//     e.target.style.backgroundColor = "red";
// }
// const changeBackgroundColor = e => { e.target.style.backgroundColor = "red"; }
// divs.forEach(div => {
//     div.addEventListener("mouseover", changeBackgroundColor);
// })



let eventArray = ["mouseover", "click"]
