'use strict';

function increment(){
    if (typeof parseInt(localStorage.getItem('score')) != "number"){
        localStorage.setItem('score', '0');
    }
    console.log("increment");
    var tempScore = parseInt(localStorage.getItem('score'));
    tempScore++;
    localStorage.setItem('score', String(tempScore));
    scoreParagraph.innerHTML = localStorage.getItem('score');
}

var scoreParagraph = document.getElementById('scoreCount');


localStorage.setItem('myCat', 'Tom');