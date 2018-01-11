document.addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let btnText =  document.createTextNode("Add square!");
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);
    let id = 0;

    button.addEventListener("click", addSquare);
    function addSquare() {
        id++;
        let square = document.createElement("div");
        square.id = id;
        square.className = "black-square";
        let p = document.createElement("p");
        let squareText = document.createTextNode(id);
        p.appendChild(squareText);
        square.appendChild(p);
        document.body.appendChild(square);
    }
}