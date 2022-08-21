'use strict';

function reverseArray(){
    var tempString = document.getElementById("arrayEntry").value;
    var tempArray = tempString.split('-');
    var returnArray = new Array();
    console.log(tempArray);
    for (var i = tempArray.length - 1; i >= 0; i--){
        returnArray.push(tempArray[i]);
    }
    document.getElementById('arrayAns').innerHTML = returnArray;
}

function reverseArrayInPlace(){
    var tempString = document.getElementById("arrayEntry").value;
    var returnArray = tempString.split('-');
    var arrayLength = returnArray.length;
    for (var i = arrayLength - 1; i >= 0; i--){
        returnArray.push(returnArray[i]);
    }
    for (var i = 0; i < arrayLength; i++){
        returnArray.shift();
    }
    document.getElementById('arrayAns').innerHTML = returnArray;
}

function addArray(arrayOne, arrayTwo){
    console.log(arrayOne);
    console.log(arrayTwo);
    return arrayOne.concat(arrayTwo);
}

function flatten(twoArray){
    return twoArray.reduce(addArray);
}

console.log(flatten([[1, 2], [6, 8, 22], [47, 1, 9], [8, 8, 9, 4, 4, 5, 2]]));