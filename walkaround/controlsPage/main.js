function addButton(keyName){
    target = document.getElementById("buttons");

    button = document.createElement("button");
    button.type = "button";
    button.id = keyName;
    button.className = "control";
    button.innerHTML = keyName;

    target.append(button);
    target.append(document.createElement("br"));

    paragraph = document.createElement("p");
    paragraph.id = keyName + "Paragraph";
    paragraph.innerHTML = keyName;

    target.append(paragraph);
    target.append(document.createElement("br"));
    target.append(document.createElement("br"));

    return button;  //for eventlisteners, cannot add before appendage
}

function buttonPress(keyName){
    currKey = keyName;
    isChanging = true;

    let button = document.getElementById(currKey);
    let paragraph = document.getElementById(currKey + "Paragraph");
    let changingParagraph = document.getElementById("changingText");

    changingParagraph.innerHTML = "press a key...";
    button.innerHTML = "...";
}

function buttonPressFinish(givenKey){   //i can probably do this cleaner but it works
    let button = document.getElementById(currKey);
    let paragraph = document.getElementById(currKey + "Paragraph");
    let changingParagraph = document.getElementById("changingText");

    button.innerHTML = currKey;
    
}

var isChanging = false;
var currKey = null;

loadControls();

document.addEventListener("keydown", (e) => {
    if (isChanging){
        isChanging = false;
        buttonPressFinish(e);
    }
    else{
        switch(e){
            case controlsKey:
                break;
            default:
                break;
        }
    }
});

for (let keyName of keyList){
    let button = addButton(keyName);
    button.addEventListener("click", () => {
        if (isChanging == false){
            buttonPress(keyName);
        }
    });
}