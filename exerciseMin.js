'use strict';

function returnMinimum(numList){
	var lowestInt = numList[0];
	for (var i = 0; i < numList.length; i++)
		{
			if (numList[i] < lowestInt)
				{
					lowestInt = numList[i];
				}
		}
	return lowestInt;
}

function submit(){
	console.log("submitting");
	var numList = userInput.value;
	var final = returnMinimum(JSON.parse(numList));
	output.innerHTML = final;
}

function reset(){
	console.log("resetting");
	window.location.reload();
}

var userInput = document.getElementById("formin");
var output = document.getElementById("output");