'use strict';

function drawTextbox(whichChar){
    let target = whichChar.div;
    console.log(window.getComputedStyle(whichChar.div).top);

    let textbox = document.createElement("div");
    textbox.className = "textbox";

    let text = document.createElement("p");
    text.innerHTML = whichChar.text;
    text.style.margin = 0;

    textbox.addEventListener("animationend", () => {
        //somehow need to keep parent and child ref to delete the textbox here with node.deleteelm()
    });

    textbox.append(text);
    target.appendChild(textbox);
    console.log(window.getComputedStyle(whichChar.div).top)
}