'use strict';

function drawSquare(x, y, color){
    c.fillStyle = color;
    c.fillRect(x * 20, y * 20, 20, 20);
}

function rotate(rotation, polarity){
    gameMap[(clockwiseL[4 + (8 * ((rotation - polarity)%4))]) + yDisplace][(clockwiseL[0 + (8 * ((rotation - polarity)%4))]) + xDisplace] = 0;
    gameMap[(clockwiseL[5 + (8 * ((rotation - polarity)%4))]) + yDisplace][(clockwiseL[1 + (8 * ((rotation - polarity)%4))]) + xDisplace] = 0;
    gameMap[(clockwiseL[6 + (8 * ((rotation - polarity)%4))]) + yDisplace][(clockwiseL[2 + (8 * ((rotation - polarity)%4))]) + xDisplace] = 0;
    gameMap[(clockwiseL[7 + (8 * ((rotation - polarity)%4))]) + yDisplace][(clockwiseL[3 + (8 * ((rotation - polarity)%4))]) + xDisplace] = 0;

    gameMap[(clockwiseL[4 + (8 * (rotation))]) + yDisplace][(clockwiseL[0 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[5 + (8 * (rotation))]) + yDisplace][(clockwiseL[1 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[6 + (8 * (rotation))]) + yDisplace][(clockwiseL[2 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[7 + (8 * (rotation))]) + yDisplace][(clockwiseL[3 + (8 * (rotation))]) + xDisplace] = 1;

    for (var j = 0; j < gameMap.length; j++){
        for (var i = 0; i < gameMap[0].length; i++){
            if (gameMap[j][i] == 0){
                drawSquare(i, j, "gray");
            }

            if (gameMap[j][i] == 1){
                drawSquare(i, j, "red");
            }
        }
    }
}

function moveSide(polarity){
    gameMap[(clockwiseL[4 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[0 + (8 * ((rotation)%4))]) + xDisplace - polarity] = 0;
    gameMap[(clockwiseL[5 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[1 + (8 * ((rotation)%4))]) + xDisplace - polarity] = 0;
    gameMap[(clockwiseL[6 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[2 + (8 * ((rotation)%4))]) + xDisplace - polarity] = 0;
    gameMap[(clockwiseL[7 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[3 + (8 * ((rotation)%4))]) + xDisplace - polarity] = 0;

    gameMap[(clockwiseL[4 + (8 * (rotation))]) + yDisplace][(clockwiseL[0 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[5 + (8 * (rotation))]) + yDisplace][(clockwiseL[1 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[6 + (8 * (rotation))]) + yDisplace][(clockwiseL[2 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[7 + (8 * (rotation))]) + yDisplace][(clockwiseL[3 + (8 * (rotation))]) + xDisplace] = 1;

    for (var j = 0; j < gameMap.length; j++){
        for (var i = 0; i < gameMap[0].length; i++){
            if (gameMap[j][i] == 0){
                drawSquare(i, j, "gray");
            }

            if (gameMap[j][i] == 1){
                drawSquare(i, j, "red");
            }
        }
    }
}

function updateGame(){
    gameMap[(clockwiseL[4 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[0 + (8 * ((rotation)%4))]) + xDisplace] = 0;
    gameMap[(clockwiseL[5 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[1 + (8 * ((rotation)%4))]) + xDisplace] = 0;
    gameMap[(clockwiseL[6 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[2 + (8 * ((rotation)%4))]) + xDisplace] = 0;
    gameMap[(clockwiseL[7 + (8 * ((rotation)%4))]) + yDisplace][(clockwiseL[3 + (8 * ((rotation)%4))]) + xDisplace] = 0;
    yDisplace++;
    gameMap[(clockwiseL[4 + (8 * (rotation))]) + yDisplace][(clockwiseL[0 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[5 + (8 * (rotation))]) + yDisplace][(clockwiseL[1 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[6 + (8 * (rotation))]) + yDisplace][(clockwiseL[2 + (8 * (rotation))]) + xDisplace] = 1;
    gameMap[(clockwiseL[7 + (8 * (rotation))]) + yDisplace][(clockwiseL[3 + (8 * (rotation))]) + xDisplace] = 1;

    for (var j = 0; j < gameMap.length; j++){
        for (var i = 0; i < gameMap[0].length; i++){
            if (gameMap[j][i] == 0){
                drawSquare(i, j, "gray");
            }

            if (gameMap[j][i] == 1){
                drawSquare(i, j, "red");
            }
        }
    }
}

function spawnClockwiseL(){
    gameMap[0][4] = 1;
    gameMap[0][5] = 1;
    gameMap[0][6] = 1;
    gameMap[1][6] = 1;
}

//tetris board is 10x20 squares
var canvas = document.getElementById("gameCanvas");
var c = canvas.getContext("2d");
var rotation = 0; //goes from 0-3, 0 normal rot, 1 right turn, 2 flipped, 3 left turn
var gameMap = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var xDisplace = 0;
var yDisplace = 0;
//x values then y values, normal rotation, right rotation, flipped rotation, left rotation
var clockwiseL = [4, 5, 6, 6, 0, 0, 0, 1, 5, 5, 5, 4, 0, 1, 2, 2, 4, 4, 5, 6, 1, 0, 0, 0, 5, 5, 5, 6, 0, 1, 2, 0];

document.addEventListener("keydown", (e) => {
    var xDisplaceChange = 1;
    if (e.key == 'd'){
        xDisplaceChange = 1;
        xDisplace++;
        moveSide(xDisplaceChange);
    }
    if (e.key == 'a'){
        xDisplaceChange = -1;
        xDisplace--;
        moveSide(xDisplaceChange);
    }
    if (e.key == 'k'){
        xDisplaceChange = -1;
        rotation--;
        rotation %= 4;
        rotate(rotation, xDisplaceChange);
    }
    if (e.key == 'l'){
        xDisplaceChange = 1;
        rotation++;
        rotation %= 4;
        rotate(rotation, xDisplaceChange);
    }
});

setInterval(updateGame, 1200);
spawnClockwiseL();