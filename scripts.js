document.addEventListener("DOMContentLoaded", button());

function button() {
    let button = document.createElement("button");
    let btnText =  document.createTextNode("Add square!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", addSquare());
    function addSquare() {
        let square = document.createElement("div");
        square.className = "black-square";
        document.body.appendChild(square);
    }
}