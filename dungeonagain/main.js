//window getters
let explore = document.getElementById("explore");
let room = document.getElementById("room");
let cutscene = document.getElementById("cutscene");
let worldMap = document.getElementById("worldMap");

let compStatus = document.getElementById("compStatus");
let demonStatus = document.getElementById("demonStatus");
let textOutput = document.getElementById("textOutput");

let ide = document.getElementById("ide");

//state bools
let isWorldMap = false;
let isCutscene = false;
let isRoom = false;
let isExplore = false;
let isBattle = false;

//these vars determine what loads when the state is active.
let currRoom = null;
let currCutscene = null;
let currMap = null;
let currEnemy = null;
let currDungeon = null;

function changeState(state){
    //do cleanup stuff when leaving states
    if (isRoom){
        closeRoom();
    }
    if (isCutscene){
        closeCutscene();
    }

    switch(state){
        case "worldMap":
            isWorldMap = true;
            isCutscene = false;
            isRoom = false;
            isExplore = false;
            isBattle = false;
            break;
        case "cutscene":
            isWorldMap = false;
            isCutscene = true;
            isRoom = false;
            isExplore = false;
            isBattle = false;

            initCutscene(cutscene, currCutscene);

            break;
        case "room":
            isWorldMap = false;
            isCutscene = false;
            isRoom = true;
            isExplore = false;
            isBattle = false;

            initRoom(room, currRoom);

            break;      
        case "explore":
            isWorldMap = false;
            isCutscene = false;
            isRoom = false;
            isExplore = true;
            isBattle = false;
            break; 
        case "battle":
            isWorldMap = false;
            isCutscene = false;
            isRoom = false;
            isExplore = false;
            isBattle = true;
            break;   
    }
}

function mainProcessing(){
    //handle etc processes first (not state dependent)


    if(isBattle){

    }

    if(isRoom){

    }

    if(isCutscene){

    }

    if(isExplore){

    }

    if(isWorldMap){

    }
}

setInterval(mainProcessing, 60);