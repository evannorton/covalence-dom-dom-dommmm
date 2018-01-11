//listen for button function when content loads
document.addEventListener("DOMContentLoaded", button);
//button function
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

    //buttonClick function
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
            p.style.opacity=".5";
        }

        //listen for mouse to stop hovering over div
        square.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity="0";
        }

        //listen for click on div
    }
}