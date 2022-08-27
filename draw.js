'use strict';

//npc animation handling
function animatePlayer(key){
    switch(key){
            case 'w':
                yOffset = 0;
                break;
            case 'a':
                yOffset = 192;
                break;
            case 'd':
                yOffset = 64;
                break;
            case 's':
                yOffset = 128;
                break;
        }
}

function changeAnimFrame(){
if (moveIDList.length > 0){
    xOffset += 48;
    xOffset %= 144;
    player.style.backgroundPosition = "-" + xOffset + "px -" + yOffset + "px";
}
}

function drawTextbox(whichChar){
    let target = whichChar.div;

    let textbox = document.createElement("div");
    textbox.className = "textbox";
    textbox.style.opacity = "50%";
    textbox.style.borderRadius = "2px";

    let text = document.createElement("p");
    text.innerHTML = whichChar.text;
    text.style.margin = 0;

    textbox.addEventListener("animationend", () => {
        //somehow need to keep parent and child ref to delete the textbox here with node.deleteelm()
    });

    textbox.append(text);
    target.appendChild(textbox);
}