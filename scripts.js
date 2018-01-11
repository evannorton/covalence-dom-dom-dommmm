//listen for button function when content loads
document.addEventListener("DOMContentLoaded", button);
function button() {
    //create button
    let button = document.createElement("button");
    //add button text
    let btnText =  document.createTextNode("Add square!");
    //set button class
    button.className = "button";
    //put text in button
    button.appendChild(btnText);
    //put button in body
    document.body.appendChild(button);
    //create id counter
    let id = 0;

    //listen for button click
    button.addEventListener("click", buttonClick);
    function buttonClick() {
        //increment id
        id++;
        //create div
        let square = document.createElement("div");
        //set id to incremented id
        square.id = id;
        //set div class
        square.className = "black-square";
        //create p
        let p = document.createElement("p");
        //create squareText variable and set it to the id
        let squareText = document.createTextNode(id);
        //put square text into p
        p.appendChild(squareText);
        //put p in the div
        square.appendChild(p);
        //put div in the body
        document.body.appendChild(square);
        //set opacity of p to 0
        p.style.opacity = "0";
        
        //listen for mouse to hover over div
        square.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity="1";
        }

        //listen for mouse to stop hovering over div
        square.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity="0";
        }

        //listen for click on div
        square.addEventListener("click", squareClick);
        function squareClick() {
            //generate random int 1 through 5
            let num = Math.floor(Math.random() * 6);
            //set color based on int value
            if (num === 0) {
                square.style.backgroundColor = "red";
            } else if (num === 1) {
                square.style.backgroundColor = "blue";
            } else if (num === 2) {
                square.style.backgroundColor = "yellow";
            } else if (num === 3) {
                square.style.backgroundColor = "green";
            } else if (num === 4) {
                square.style.backgroundColor = "purple";
            } else if (num === 5) {
                square.style.backgroundColor = "orange";
            }
        }
    }
}