'use strict'

function drawWorldmap(){
    worldmap.drawImage(cursor, playerXOffset, playerYOffset);

    if (playerXOffset > (worldmapCanvas.width * worldmapScrollThreshold))
    {
        worldmapWidth += 10;
        worldmapCanvas.width = worldmapWidth + "";
    }
    if (playerYOffset > (worldmapCanvas.height * worldmapScrollThreshold))
    {
        worldmapHeight += 10;
        worldmapCanvas.height = worldmapHeight + "";
    }
}

function drawRoom(){

}

function drawCutscene(){

}

function drawEnemyStats(){
    if (currentEnemy != undefined){
        drawTextScreen(currentEnemyHealth + "/" + currentEnemy.maxHealth);
    }
}

function updateStats(){
    healthParagraph.innerHTML = "Health: " + health + "/" + maxHealth;
    manaParagraph.innerHTML = "Mana: " + mana + "/" + maxMana;
}

function drawEnemy(){
    if (currentEnemy != undefined){
        var enemyAsset = document.getElementById(currentEnemy.name);
        screen.drawImage(enemyAsset, 200, 200);
    }
}

function drawEntity(){
    switch (currentMap[playerPosition[1]][playerPosition[0]]){
        case 2: //chest
            screen.drawImage(chestImg, 160, 160);
            entityHandler(2);
            break;
        case 3: //stairs
            screen.drawImage(stairsImg, 160, 160);
            entityHandler(3);
            break;
    }
}

function drawScreen(willCollide){
    //is the player facing a wall?
    if (willCollide == true){
        screen.drawImage(closedImg, 0, 0);
    }
    else{
        screen.drawImage(openImg, 0, 0);
    }
}

function drawArrow(){ //TODO: fix drawArrow() rotation
    var arrowX = 100;
    var arrowY = 100;
    minimap.translate(arrowX/2, arrowY/2);
    var playerRotationRadians = playerRotation * (Math.PI / 180);
    minimap.rotate(playerRotationRadians);
    minimap.drawImage(arrowImg, 0, 0);
    minimap.rotate(-playerRotationRadians);
    minimap.translate(-arrowX/2, -arrowY/2);
}

function drawMinimap(){
    minimap.fillStyle = "gray";
    minimap.fillRect(0, 0, 900, 900);

    for (var j = 0; j < currentMap.length; j++){
        for (var i = 0; i < currentMap[0].length; i++){
            if(currentMap[j][i] == 0){  //empty
                minimap.fillStyle = "white";
                minimap.fillRect(i * minimapDrawSize, j * minimapDrawSize, minimapDrawSize, minimapDrawSize);
            }
            if(currentMap[j][i] == 1){  //wall
                minimap.fillStyle = "black";
                minimap.fillRect(i * minimapDrawSize, j * minimapDrawSize, minimapDrawSize, minimapDrawSize);
            }
            if(currentMap[j][i] == 2){  //chest
                minimap.fillStyle = "yellow";
                minimap.fillRect(i * minimapDrawSize, j * minimapDrawSize, minimapDrawSize, minimapDrawSize);
            }
            if(currentMap[j][i] == 3){  //stairs
                minimap.fillStyle = "blue";
                minimap.fillRect(i * minimapDrawSize, j * minimapDrawSize, minimapDrawSize, minimapDrawSize);
            }
            if(currentMap[j][i] == 9){  //player
                minimap.fillStyle = "red";
                minimap.fillRect(i * minimapDrawSize, j * minimapDrawSize, minimapDrawSize, minimapDrawSize);
            }
        }
    }

    //drawArrow();
}

function drawText(textString){
    text.fillStyle = "white";
    text.fillRect(0, 0, 900, 900);
    text.fillStyle = "blue";

    textShown.push(textString);

    if (textShown.length >= 8){
        textShown.shift();
    }

    for (var i = 0; i < textShown.length; i++){
        text.font = "20px Times New Roman";
        text.fillText(">>", 5, 18 + (i * 20));
        text.fillText(textShown[i], 20, 18 + (i * 20)); //have the max width change wrt string size
    }
}

function drawTextScreen(textString){
    screen.fillText(textString, 10, 10);
}

function drawingHandler(){
    //all drawing must happen here (except for text);

    //in screen
    worldmapCanvas.style.visibility = "hidden";
    roomCanvas.style.visibility = "hidden";
    cutsceneCanvas.style.visibility = "hidden";
    screen.fillRect(0, 0, 900, 900); //clear screen
    if(isBattle || isExplore){
        drawScreen(isColliding(1));
        drawEntity();
        drawEnemy();
        drawEnemyStats();

        //in minimap
        drawMinimap();

        //in options
        updateStats();
    }
    
    if(isWorldmap){
        worldmapCanvas.style.visibility = "visible";
        worldmap.fillRect(0, 0, 900, 900);
        drawWorldmap();
    }

    if(isRoom){
        roomCanvas.style.visibility = "visible";
        room.fillRect(0, 0, 900, 900);
        drawRoom();
    }

    if(isCutscene){
        cutsceneCanvas.style.visibility = "visible";
        cutscene.fillRect(0, 0, 900, 900);
        drawCutscene();
    }
}

var minimapCanvas = document.getElementById("minimap");
var minimap = minimapCanvas.getContext("2d");

var textCanvas = document.getElementById("text");
var text = textCanvas.getContext("2d");

var textShown = [];
var textShownPrevLength = 0;

var screenCanvas = document.getElementById("screen");
var screen = screenCanvas.getContext("2d");

var worldmapCanvas = document.getElementById("worldmap");
var worldmap = worldmapCanvas.getContext("2d");

var roomCanvas = document.getElementById("room");
var room = roomCanvas.getContext("2d");

var cutsceneCanvas = document.getElementById("cutscene");
var cutscene = cutsceneCanvas.getContext("2d");

var currentMap = map.mapData;

var minimapDrawSize = 10;

var worldmapScrollThreshold = 0.75;
var worldmapWidth = 500;
var worldmapHeight = 500;

//images for the screen

//dungeon
var closedImg = document.getElementById("closed");
var openImg = document.getElementById("open");
var arrowImg = document.getElementById("arrow");
var chestImg = document.getElementById("chest");
var stairsImg = document.getElementById("stairs");

//worldmap
var cursorImg = document.getElementById("cursor");


var healthParagraph = document.getElementById("health");
var manaParagraph = document.getElementById("mana");