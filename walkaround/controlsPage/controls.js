//handlers for control setting:
function openControls(){
    window.location.href = "controlsPage/controls.html";
}

function closeControls(){
    window.history.go(-1);
}


function loadDefaults(){
    window.upKey = 'w';
    window.downKey = 's';
    window.leftKey = 'a';
    window.rightKey = 'd';

    window.interactKey = 'k';
    window.controlsKey = 'p';
}

function loadControls(){
    loadDefaults();
    let currKey = '';
    for (let key of keyList){
        currKey = localStorage.getItem(key);
        if (currKey != null){
            window[key] = currKey;  //window[key] grabs the global var associated with the string in the window
        }
    }
}

function removeControls(){
    for (let key of keyList){
        localStorage.removeItem(key);
    }
    loadDefaults();
}

function setKey(keyName, keyValue){
    localStorage.setItem(keyName, keyValue);
}

//set key controls here:
const keyList = ["upKey", "downKey", "leftKey", "rightKey", "interactKey", "controlsKey"];  //for loadControls()