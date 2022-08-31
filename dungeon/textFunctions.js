function clearCanvas(ctx, color = "white"){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 10000, 10000);
}

function isWordWrap(currText, charIndex, width, spacing, line){
    //if word goes past the width of the canvas, write to the next vertical line.
    let nextSpaceIndex = currText.indexOf(' ', charIndex);

    if (nextSpaceIndex * spacing > width){
        let newString = currText;
        console.log(newString);
        newString = newString.splice(charIndex, 0, " ");    //splice in a bunch of spaces to make the words wrap
        return newString;
    }
    return line;
}

//renderText is not meant for direct calls.
function renderText(currText, verticalSpacing, charSpacing, charIndex, textCanvas, textColor, font, fontSize, target, width){   //handles locating and parsing, use symbols to signal
    let line = Math.floor(((charIndex * charSpacing)) / width) + 1;   //which vertical line to write to.
    let xOffset = (charIndex * charSpacing) % width;

    currText = isWordWrap(currText, charIndex, width, charSpacing, line);


    target.fillStyle = textColor;
    target.font = fontSize + "px " + font;
    target.fillText(currText[charIndex], xOffset, verticalSpacing * line);    //maybe render letter by letter?

}

//this needs to take in an actual CANVAS, not a context.
function drawText(textString, textCanvas, textSpeed = 50, textColor = "blue", font = "Arial", fontSize = 20){  //switch this to one line, make it print one char at a time
    let verticalSpacing = fontSize * 1.25;
    let charSpacing = fontSize * 0.6;

    let target = textCanvas.getContext("2d");
    let width = textCanvas.width;

    let textLength = textString.length;
    for (let i = 0; i < textLength; i++){
        setTimeout(() => {
            renderText(textString, verticalSpacing, charSpacing, i, textCanvas, textColor, font, fontSize, target, width);
        }, i * textSpeed);
    } 
}