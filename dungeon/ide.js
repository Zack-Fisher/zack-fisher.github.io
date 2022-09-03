function isValid(char){
    for(let x of validChars){
        if (x == char){
            console.log("val");
            return true;
        }
    }
    return false;
}

function type(char){
    if (isValid(char)){
        drawIDEText(char, ide);
        ideString += char;
    }
}

function backspace(){
    let last = ide.lastChild;
    if(last != null){
        ide.removeChild(last);
        ideString = ideString.slice(0, ideString.length());
    }
}

function newLine(){
    let div = document.createElement("div");
    div.display = "block";  //HOW DO I MAkE NEW LINE>????
    ide.append(div);
}

function clearIDE(){
    ide.innerHTML = '';
    ideString = '';
}

function send(){
    console.log(ideString);
    clearIDE();
}

var ide = document.getElementById('ide');

const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,":?!/;{}[]*-+ ';

var ideString = '';