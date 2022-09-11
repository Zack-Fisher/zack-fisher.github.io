function isValid(char) {
    for (let x of validChars) {
        if (x == char) {
            return true;
        }
    }
    return false;
}

function type(char) {
    if (isValid(char)) {
        ideInput[whichLine] = ideLine;
        console.log(whichLine);
        drawIDEText(char, ide.children[whichLine]);
        ideLine += char;
    }
}

function backspace() {
    let last = ide.lastChild;
    if (last != null) {
        ide.removeChild(last);
        ideLine = ideLine.slice(0, ideLine.length);
    }
    if (ideLine = ''){
        backLine();
    }
}

function backLine() {
    if (whichLine > 0) {
        ideInput[whichLine] = ideLine;
        whichLine -= 1;
        currLine = ide.children[whichLine];
        ideLine = ideInput[whichLine];
    }
}

function newLine() {
    if (whichLine < numLines - 1){
        ideInput[whichLine] = ideLine;
        whichLine += 1;
        currLine = ide.children[whichLine];
        ideLine = ideInput[whichLine];
    }
}

function clearIDE() {
    let lines = ide.children;
    for(let line in lines){
        
    }
    ideLine = '';
    whichLine = 0;
    ideInput = [];
}

function send() {
    ideInput[whichLine] = ideLine;
    
    parseInput(ideInput);

    clearIDE();
}

function linesInit() {
    let i = 0;
    while (i < numLines) {
        let lineDiv = document.createElement("div");
        lineDiv.className = "line";
        lineDiv.style.width = ideWidth + "px";
        lineDiv.style.height = "30px";
        ide.append(lineDiv);
        i += 1;
    }
    currLine = ide.children[0];
}

function ideInit() {
    ide.style.width = ideWidth + "px";
    ide.style.height = ideHeight + "px";

    linesInit();
}

var ide = document.getElementById('ide');

const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,":?!/;{}[]*-+ ';

var whichLine = 0;
var currLine;
var numLines = 5;
var ideInput = Array(numLines);
var maxChars = 30;
var ideLine = '';
var ideWidth = (maxChars * 20);
var ideHeight = (numLines * 30);