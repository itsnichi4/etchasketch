let colorClick = false;
let eraserClick = false;
let mouseValue = "click";
let currentDrawMode = "mouseover";
let changeBackgroundColor = null ;
main()
    ;

function getRowsCount() {
    let squaresNumber = 0;
    while (30 > squaresNumber || squaresNumber > 100) {
        alert("ERROR! I SAID MIN 30 MAX 60!")
        squaresNumber = prompt('Input the number of squares you want for your canvas(30-60)')
    }

    return squaresNumber;
}
function populateDOM(squaresNumber) {
    let container = document.createElement('div');
    container.className = "container"
    let grid = document.createElement('div');
    grid.className = 'grid';
    let divs = [];
    for (let i = 0; i < squaresNumber; ++i) {
        var column = document.createElement('div'); // create columns
        column.className = 'column';
        for (let j = 0; j < squaresNumber; ++j) {
            let row = document.createElement('div'); // create rows
            row.className = 'row';
            column.appendChild(row);
            divs.push(row);
        }
        grid.appendChild(column);
    }
    document.body.appendChild(container);
    container.appendChild(grid)

    let innerDiv = document.createElement('div');
    innerDiv.className = 'inner-div';

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    innerDiv.appendChild(buttonContainer);

    buttonContainer.appendChild(createClearButton());
    buttonContainer.appendChild(createEraseButton(divs));
    buttonContainer.appendChild(createColorSelectButton(divs));
    buttonContainer.appendChild(createDrawModeHoverButton(divs));
    buttonContainer.appendChild(createDrawModeClickButton(divs));

    buttonContainer.appendChild(document.getElementById("favcolor"))



    container.appendChild(innerDiv);
}

function createClearButton() {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = "Clear";
    button.onclick = () => location.reload(true);
    return (button);
}

function createColorSelectButton(divs) {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = "Color";
    button.addEventListener("click", () => {
        initColorMode(divs);
    });

    return (button);
}

function initColorMode(divs) {
        colorClick = true;
        let colorValue = document.getElementById("favcolor").value;
        changeBackgroundColor = e => { e.target.style.backgroundColor = colorValue; }
        divs.forEach(div => {
            div.removeEventListener("mouseover", changeBackgroundColor);
            div.removeEventListener("click", changeBackgroundColor);
            div.addEventListener(mouseValue, changeBackgroundColor, {once});
        });
        eraserClick = false;

    
}


function createEraseButton(divs) {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = "Eraser";
    button.addEventListener('click', () => {
        eraserClick = true;
        colorClick = false;
        changeBackgroundColor = e => { e.target.style.backgroundColor = null; }
        divs.forEach(div => {
            div.removeEventListener("mouseover", changeBackgroundColor);
            div.removeEventListener("click", changeBackgroundColor);
            div.addEventListener(mouseValue, changeBackgroundColor, {once});
        });
    });

    return (button);
}

function createDrawModeHoverButton(divs) {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = "Draw Hover";
    button.addEventListener('click', () => {
        currentDrawMode = "mouseover";
        mouseValue = "mouseover";
        divs.forEach(div => {
            div.removeEventListener("click", changeBackgroundColor);
            div.addEventListener("mouseover", changeBackgroundColor);
        });
    });
    return (button);
}

function createDrawModeClickButton(divs) {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = "Draw Click";
    button.addEventListener('click', () => {
        currentDrawMode = "click";
        mouseValue = "click";
        divs.forEach(div => {
            div.removeEventListener("mouseover", changeBackgroundColor);
            div.addEventListener("click", changeBackgroundColor);
        })
    })
    return (button);
}

function main() {


    let squaresNumber = getRowsCount();


    populateDOM(squaresNumber);






}

