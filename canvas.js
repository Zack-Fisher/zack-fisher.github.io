'use strict'

function drawMarvus(mouseX, mouseY){
    c.drawImage(document.getElementById("marvus"), mouseX, mouseY);
}

function randSquares(limit){
    var randNum = 0.0;
    i = 0;
    while (i < limit){
        randNum = Math.random() * 300;
        c.rotate(randNum);
        c.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, Math.random() * 10);
        c.rotate(-randNum);
        i++;
    }
}

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var i = 0;

document.addEventListener("mousedown", (e) => {
    drawMarvus(e.clientX, e.clientY);
});

setInterval(randSquares, 10, 4);