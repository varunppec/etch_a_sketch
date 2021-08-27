const container = document.querySelector('#container');
const cont = document.createElement('div');
cont.setAttribute('id', "cont");

const div_but = document.createElement('div');
const reset = document.createElement('button');
div_but.classList.add('reset');
div_but.appendChild(reset);
container.appendChild(cont);
container.insertBefore(div_but, cont);

reset.innerText = "Reset";

createGrid();




reset.addEventListener('click', function () {
    const lis = document.querySelectorAll('.square');
    for (let item of lis) {
        item.style.backgroundColor = "white";
    }
    const prompt = Number(window.prompt("No of squares per side:"));
    if (!prompt || (prompt < 1 || prompt > 100)) {
        window.alert("Invalid input. Please enter no from 1-100");
        createGrid();
    }
    for (let item of lis) {
        item.remove();
    }
    createGrid(prompt);

})

function createGrid(n = 16) {
    let square;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square = document.createElement('div');
            square.classList.add('square');
            cont.appendChild(square);
            let no = 320 / n - 2;
            square.style.width = `${no}px`;
            square.style.height = `${no}px`;
            square.style.backgroundColor = "white";
            square.style.border = "1px solid #333333";
        }
    }
    let squares = document.querySelectorAll('.square');
    for (let box of squares) {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "black";
        })
    }
}