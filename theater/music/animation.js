//handles stage animation

function changeBackground(which){
    //takes in a background object
    try{
        stage.removeChild(document.getElementById("background"));
    }
    catch{
        console.log("no background yet");
    }

    let img = document.createElement('img');
    img.src = which.source;
    img.id = "background";

    stage.append(img);
}

function addElm(which){
    //takes in an animation object
    let img = document.createElement('img');
    img.src = which.sources[0];
    img.id = which.name;

    stage.append(img);

    let elmState = {anim: which.sources, index: 0, img: document.getElementById(which.name)};
    elmInScene.push(elmState);
}

function removeElm(which){

}

function initStage(){
    let height = 400;
    let controlHeight = 100;
    stage.style.width =  Math.floor(height * 1.5) + "px";
    stage.style.height = height + "px";
    controls.style.width = Math.floor(controlHeight * 6) + "px";
    controls.style.height = controlHeight + "px";

    changeBackground(testBackground);
    for (let elm of initialScene){
        addElm(elm);
    }
}

function resizeAnim(scale){
    //scales by "scale"
    //multiplies viewport size by scale
    let images = document.getElementsByTagName("img");
    let computedHeight = getComputedStyle(stage).height;
    let newSize = parseInt(computedHeight.substring(0, computedHeight.length - 2)) * scale;
    let controlHeight = Math.floor(newSize / 4);

    stage.style.width =  Math.floor(newSize * 1.5) + "px";
    stage.style.height = newSize + "px";
    controls.style.width = Math.floor(controlHeight * 6) + "px";
    controls.style.height = controlHeight + "px";

    for(let image of images){
        image.style.height = newSize + "px";
        image.style.width = Math.floor(newSize * 1.5) + "px";
    }
}

function nextFrame(){
    let length = elmInScene.length;
    for(let elmState of elmInScene){
        let sourcesLength = elmState.anim.length;

        elmState.image.src = elmState.anim[elmState.index];

        elmState.index++;
        elmState.index = elmState.index % (length - 1);
    }
}

function playAnim(){
    idList.append(setInterval(nextFrame, 100));
}

function pauseAnim(){
    for(let id of idList){
        clearInterval(id);
    }
    idList = [];
}

let stage = document.getElementById("stage");
let controls = document.getElementById("controls");

let elmInScene = [];
let idList = [];