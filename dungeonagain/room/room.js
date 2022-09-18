function loadJS(filename){
    if(currScript != null){ //remove if a script is already loaded
        removeJS();
    }
    let fileref = document.createElement('script');
    fileref.id = "dialogue";
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);

    fileref.onload = (() => {
        showNext("");
    });

    document.getElementsByTagName("body")[0].append(fileref);
    currScript = fileref;
}

function removeJS(){
    if (currScript != null){
        currScript.remove();
        currScript = null;
    }
}

//'which' takes in a character defined in roomData.js
function initRoom(roomDivInput, which){
    roomDiv = roomDivInput;
    roomDiv.style.visibility = "visible";
    roomButtonsDiv = roomDiv.children[1];
    roomTextDiv = roomDiv.children[0];
    roomButtonsDiv.style.visibility = "visible";
    roomTextDiv.style.visibility = "visible";

    loadJS(which.script);
}

function closeRoom(){
    removeJS();
    roomDiv.style.visibility = "hidden";
    roomButtonsDiv.style.visibility = "hidden";
    roomTextDiv.style.visibility = "hidden";

    roomDiv = null;
    roomButtonsDiv = null;
    roomTextDiv = null;
}

function changeBG(which){
    roomDiv.style.backgroundImage = "url('" + which + "')";
}

function addSprite(which){
    let img = document.createElement("img");
    img.src = which;
    img.id = "sprite";
    roomDiv.append(img);
}

function removeSprite(){
    let spr = document.getElementById("sprite");
    if (spr != null){
        spr.remove();
    }
}

function addButtons(optionsList){
    roomButtonsDiv.innerHTML = "";

    for (let option of optionsList){
        btn = document.createElement("button");
        btn.innerHTML = option,
        btn.onclick = (() => {
            showNext(option);
            console.log(option);
        });

        roomButtonsDiv.append(btn);
    }
}

function showNext(choice){
    let node = nextLine(choice);
    console.log(node);

    roomTextDiv.innerHTML = node.text;
    
    try{
        let sprite = node.sprite;
        removeSprite();
        addSprite(sprite);
    }
    catch{
        console.log("no new sprite for this node");
    }

    try{
        let nodeOptions = node.options;
        addButtons(nodeOptions);
    }
    catch{
        console.log("no options");
    }

    try{
        let background = node.bg;
        if (background == undefined)
        {
            throw "err";
        }
        changeBG(background);
    }
    catch{
        console.log("no new background for this node");
    }
}

let roomDiv = null;
let roomTextDiv = null;
let roomButtonsDiv = null;
let currScript = null;