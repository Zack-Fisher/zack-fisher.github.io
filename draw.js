'use strict';

function drawTextbox(whichChar){
    let target = whichChar.div;
    console.log(whichChar);

    let textbox = document.createElement("div");
    textbox.className = "textbox";

    let text = document.createElement("p");
    text.innerHTML = whichChar.text;

    textbox.append(text);
    target.append(textbox);
}