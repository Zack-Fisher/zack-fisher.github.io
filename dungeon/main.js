'use strict'

function entityHandler(which){
    switch (which){
        case 2: //chest
            drawText("There's a chest on the ground...");
            break;
        case 3: //stairs
            drawText("The stairs to the next floor are ahead.");
            break;
    }
}

function setupKeys(){
    if (isBattle){
        buttonParagraph.innerHTML = "<button onclick = 'attack()'>FIGHT!</button>";
        document.getElementById("interactButton").innerHTML = "";
    }
    else{
        buttonParagraph.innerHTML = "<button onclick = 'move(`w`)'>up</button> <br> <button onclick = 'move(`d`)'>turn counterclockwise</button> <button onclick = 'move(`a`)'>turn clockwise</button> <br> <button onclick = 'move(`s`)'>down</button> <br> ";
        document.getElementById("interactButton").innerHTML = "<button onclick = 'interact()'>interact</button>";
    }
}

function changeState(which){    //all music changes can be handled in the change state, music is entirely state dependent
    switch(which){
        case 'isBattle':
            isBattle = true;
            isExplore = false; 
            isWorldmap = false;
            isRoom = false;
            isCutscene = false;
            break;
        case 'isExplore':
            isExplore = true;
            isBattle = false;
            isWorldmap = false;
            isRoom = false;
            isCutscene = false;
            break;
        case 'isWorldmap':
            isWorldmap = true;
            isBattle = false;
            isExplore = false;
            isRoom = false;
            isCutscene = false;
            break;
        case 'isRoom':
            isWorldmap = false;
            isBattle = false;
            isExplore = false;
            isRoom = true;
            isCutscene = false;
            break;
        case 'isCutscene':
            isWorldmap = false;
            isBattle = false;
            isExplore = false;
            isRoom = false;
            isCutscene = true;
            break;
        default:
            console.log("invalid changeState() input (main.js)");
            break;
    }
    setupKeys();
    if(isBattle){
        playMusic("battleMusic");
    }
    if(isExplore){
        playMusic("dungeonAmbience");
    }
    if(isWorldmap){
        playMusic("industrialWorld");
    }
    if(isRoom){
        playMusic("empty");
    }
    if(isCutscene){
        playMusic("empty");

        var elementList = [];
        elementList = Array.from(document.getElementsByTagName("canvas"));
        elementList.splice(cutsceneCanvas, 1);
        console.log(elementList);
        for (let elm of elementList){
            elm.className += " opacityAnimLess";
        }
        body.style.backgroundColor = "black";
    }
}

function getPlayerPosition(){
    for (var j = 0; j < currentMap.length; j++){
        for (var i = 0; i < currentMap[0].length; i++){
            if(currentMap[j][i] == 9){
                return [i, j];
            }
        }
    }
}

function isColliding(direction){
    var newPosition = [playerPosition[0], playerPosition[1]];
    switch(playerRotation){
        case 0:
            newPosition[1] += (1 * direction);
            break;
        case 90:
            newPosition[0] += (1 * direction);
            break;
        case 180:
            newPosition[1] -= (1 * direction);
            break;
        case 270:
            newPosition[0] -= (1 * direction);
    }
    if (currentMap[newPosition[1]][newPosition[0]] != 1){
        return false;
    }

    drawText("you can't move here!");
    return true;
}

function moveSpace(direction){
    if (!isColliding(direction)){
        if(currentMap[playerPosition[1]][playerPosition[0]] == 9)
        {
            currentMap[playerPosition[1]][playerPosition[0]] = 0;
        }

        switch(playerRotation){
            case 0:
                playerPosition[1] += (1 * direction);
                break;
            case 90:
                playerPosition[0] += (1 * direction);
                break;
            case 180:
                playerPosition[1] -= (1 * direction);
                break;
            case 270:
                playerPosition[0] -= (1 * direction);
        }
        if(currentMap[playerPosition[1]][playerPosition[0]] == 0)
        {
            currentMap[playerPosition[1]][playerPosition[0]] = 9;
        }
        drawEntity();

        if (battleChance()){
            changeState("isBattle");
            battleHandling();
        }
    }
}

function move(e){
    if (!isBattle){
        switch(e){
            case 'w':
                moveSpace(1);
                break;
            case 's':
                moveSpace(-1);
                break;
            case 'd':
                playerRotation = ((playerRotation - 90) % 360);
                if (playerRotation < 0){
                    playerRotation += 360; //modulus works weird, have to account for negatives
                }
                break;
            case 'a':
                playerRotation = ((playerRotation + 90) % 360);
                break;
            default:
                break;
        }
    }    
}

//worldmap movement funcs

function moveWorldmap(e){
    switch(e){
        case 'w':
            playerYOffset -= playerSpeed;
            break;
        case 'a':
            playerXOffset -= playerSpeed;
            break;
        case 's':
            playerYOffset += playerSpeed;
            break;
        case 'd':
            playerXOffset += playerSpeed;
            break;
        default:
            break;
    }
}

//room movement funcs

function roomKeyHandler(e){

}

//cutscene movement funcs

function cutsceneKeyHandler(e){

}

function interact(){
    switch (currentMap[playerPosition[1]][playerPosition[0]]){
        case 0:
            drawText("There's nothing here.");
            break;
        case 2:
            drawText("You open the chest.");
            var randomChest = Math.floor(Math.random() * 2);
            var newItem = currentChests[randomChest];
            getItem(newItem);
            currentMap[playerPosition[1]][playerPosition[0]] = 9; //erasing the object
            break;
        case 3:
            drawText("You ascend to the next floor...");
            break;
        case 9:
            drawText("There's nothing here.");
            break;
    }   
}

//main states
var isBattle = false;
var isExplore = true;
var isWorldmap = false;
var isRoom = false;
var isCutscene = false;

//kinda states
var isTyping = false;
var isCtrlPressed = false;
var isShiftPressed = false;


var buttonParagraph = document.getElementById("buttons");

//for dungeon movement
var playerPosition = getPlayerPosition(); // [x, y] vector of player
var playerRotation = 0;

var currentChests = map.chests;

//for worldmap movement
var playerXOffset = 0;
var playerYOffset = 0;
var playerSpeed = 5;

//for room movement

//for cutscene movement

document.getElementById('container').addEventListener("click", () => {
    isTyping = false;
    console.log("f");
}, true);

ide.addEventListener("click", () => {
    isTyping = true;
    console.log("t");
}, true);

document.addEventListener("keydown", (e) => {   //different key handlers for every state
    if(e.key == "Control"){
        isCtrlPressed = true;
    }
    if(e.key == "Shift"){
        isShiftPressed = true;
    }

    if(!isTyping){
        if (isBattle || isExplore){
            move(e.key);    //move with wasd
        }

        if(isWorldmap){
            moveWorldmap(e.key);
        }

        if(isRoom){
            roomKeyHandler(e.key);
        }

        if(isCutscene){
            cutsceneKeyHandler(e.key);
        }
    }
    else{
        switch(e.key){
            case "Enter":
                if(!isCtrlPressed){
                    newLine();
                }
                else{
                    send();
                }
                break;
            case "Delete":
                clearIDE();
                break;
            case "Backspace":
                backspace();
                break;
            default:
                type(e.key);
                console.log(e.key);
                break;
        }
    }
});

document.addEventListener("keyup", (e) => {
    switch(e.key){
        case "Control":
            isCtrlPressed = false;
            break;
        case "Shift":
            isShiftPressed = false;
            break; 
        default:
            break;
    }
}); 

setInterval(drawingHandler, 30);

for (let member of partyMembers){
    addPartyMember(member);
}

dragInit();

// setInterval(() => {
//     console.log(isCtrlPressed, isShiftPressed);
// }, 50);
//for debugging