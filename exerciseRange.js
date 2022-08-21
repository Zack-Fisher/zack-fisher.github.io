//whenever i try to implement steps the whole fucking webpage freezes up
//literally why the FUCK does this happen
//i hate js so much
//please email me if you know what i did wrong zackfisher27@proton.me

'use strict';

function range(){
    document.getElementById('rangeAns').innerHTML = '';
    var min = document.getElementById("startPoint").value;
    var max = document.getElementById("endPoint").value;
    var steps = document.getElementById("steps").value;
    min = parseInt(min);
    max = parseInt(max);
    steps = parseInt(steps);
    console.log(steps);
    console.log(typeof steps);
    let numArray = new Array;
    var i = min;
    while (i <= max){
        numArray.push(i);
        i + steps;
    }
    document.getElementById('rangeAns').innerHTML += numArray;
    return numArray;
}

function sum(numArray){
    var sum = 0;
    for (var i = 0; i < numArray.length; i++){
        sum += parseInt(numArray[i]);
    }
    document.getElementById("rangeAns").innerHTML += ' ' + sum;
    console.log(sum);
    return sum;
}

