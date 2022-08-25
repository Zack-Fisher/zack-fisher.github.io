'use strict';

function drawGraph(){
    for (var i = 0; i < spaces.length; i++){
        for (var j = 0; j < spaces[0].length; j++){
            if (i == ySize / 2){
                //draw x axis
                graph.fillStyle = "green";
                graph.fillRect(j * scale, i * scale, scale, scale);
            }
            if (j == xSize / 2){
                //draw y axis
                graph.fillStyle = "green";
                graph.fillRect(j * scale, i * scale, scale, scale);
            }

            if (spaces[j][i] == 1){
                graph.fillStyle = "black";
                graph.fillRect(j * scale, i * scale, scale, scale);
            }
        }
    }
}

var graphCanvas = document.getElementById("graph");
var graph = graphCanvas.getContext("2d");

var spaces = new Array();