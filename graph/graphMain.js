'use strict';

function resizeGraph(){
    scale = parseInt(document.getElementById("scale").value);
    xSize = parseInt(document.getElementById("xSize").value);
    ySize = parseInt(document.getElementById("ySize").value);
    originX = parseInt(document.getElementById("xSize").value);
    originY = parseInt(document.getElementById("ySize").value);
    graphCanvas.width = xSize * scale;
    graphCanvas.height = ySize * scale;
}

function updateGraph(){
    var row = [];
    for (var j = 0; j < xSize; j++){
        row.push(0);
    }

    spaces = [];
    for (var i = 0; i < ySize; i++){
        spaces.push(row);
    }


    var range = 0;
    for (var i = 0; i < xSize; i++){    //i <=> x, range <=> y.
        range = i;
        range = Math.round(range);
        if (range >= 0 && range < ySize){
            spaces[range][i] = 1;
        }
    }
    console.log(spaces);

    drawGraph();
}

var slope = 0;
var x = 0;
var y = 0;
var xSize = 0;
var ySize = 0;
var scale = 0;
var originX = 0;
var originY = 0;

setInterval(resizeGraph, 30);
updateGraph();