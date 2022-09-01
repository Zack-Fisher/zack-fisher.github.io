function addButton(keyName){
    target = document.getElementById("buttons");

    button = document.createElement("button");
    button.type = "button";
    button.id = keyName;
    button.className = "control";
    button.innerHTML = window[keyName];

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

function checkSame(keyName, pressedKey){

    for (let key of keyList){
        if (pressedKey == window[key]){
            if(key != keyName){
                isChanging = true;
                alert("you cannot overlap key mappings.");
                return false;
            }
        }
    } 
    return true;
}

function buttonPressFinish(givenKey){   //i can probably do this cleaner but it works
    let button = document.getElementById(currKey);
    let paragraph = document.getElementById(currKey + "Paragraph");
    let changingParagraph = document.getElementById("changingText");

    if(checkSame(currKey, givenKey)){
        changingParagraph.innerHTML = "";

        localStorage.setItem(currKey, givenKey);

        button.innerHTML = givenKey;

        loadControls();
    }
}

var isChanging = false;
var currKey = null;

loadControls();

console.log(controlsKey);

document.addEventListener("keydown", (e) => {
    if (isChanging){
        isChanging = false;
        buttonPressFinish(e.key);
    }
    else{
        switch(e.key){
            case controlsKey:
                console.log('t');
                window.history.back();
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