'use strict';

function move(key){
		switch(key){
				case upKey://w key
					tempY += ySpeed;
					animatePlayer(key);
					break;
				case leftKey://a key
					tempX -= xSpeed;
					animatePlayer(key);
					break;
				case rightKey://d key
					tempX += xSpeed;
					animatePlayer(key);
					break;
				case downKey://s key
					tempY -= ySpeed;
					animatePlayer(key);
					break;
				case interactKey:	//interact key
					if(canSpace == true){
						if(playerCollision() == true){
							canSpace = false;
							setTimeout(() => {canSpace = true;}, spaceCooldown);
							interact();
						}
					}
					break;
				case controlsKey:	//open controls
					openControls();
					break;
				default:
					break;
			}		
	}
	
function moveChars(){	//moves every character in the scene
	for (let char of charInScene){
		if (char.name == "player"){
			if (Math.abs(tempY) > ySpeedLimit){
				tempY = ((Math.abs(tempY) / tempY) * ySpeedLimit);
			}
			if (Math.abs(tempX) > xSpeedLimit){
				tempX = ((Math.abs(tempX) / tempX) * xSpeedLimit);
			}
			char.position[1] -= tempY;
			char.position[0] += tempX;
			tempX /= 1.20;
			tempY /= 1.25;
			char.div.style.top = char.position[1] + "px";
			char.div.style.left = char.position[0] + "px";
			//console.log(player.style.top, player.style.left, xPosition, yPosition);
		}
	}
}	

function scrollCamera(){
	let container = document.getElementById("container");
	let xPosition = charInScene[0].position[0];
	let yPosition = charInScene[0].position[1];
	let width = window.innerWidth;
	let height = window.innerHeight;
	let newXScroll = 0;
	let newYScroll = 0;

	newXScroll = xPosition - (width / 2);
	newYScroll = yPosition - (height / 2);

	//container.setAttribute("style", "width: " + newXScroll + "px");
	//container.setAttribute("style", "height: " + newYScroll + "px");

	window.scrollTo(newXScroll, newYScroll);
}

function playerCollision(){	//checks collision with other npcs
	let xPosition = charInScene[0].position[0];
	let yPosition = charInScene[0].position[1];
	let xPlayerHitboxOffset = charInScene[0].hitboxOffset[0];
	let yPlayerHitboxOffset = charInScene[0].hitboxOffset[1];
	let playerHitboxWidth = charInScene[0].hitboxWidth;

	var isColliding = false;
	hitList = [];
	for (let char of charInScene)
		{
			if(char.name == "player"){
				continue;	//skips checking collision with player and itself
			}
			let current = char.div;	//.style only gets the elements appended IN html, need to use this.
			let currentX = parseInt(window.getComputedStyle(current).left);
			let currentY = parseInt(window.getComputedStyle(current).top);
			let currentWidth = parseInt(window.getComputedStyle(current).width);
			let currentHeight = parseInt(window.getComputedStyle(current).height);

			if(
				(((currentX < xPosition + xPlayerHitboxOffset && currentX + currentWidth > xPosition + xPlayerHitboxOffset) ||
				(currentX < xPosition + xPlayerHitboxOffset + playerHitboxWidth && currentX + currentWidth > xPosition + xPlayerHitboxOffset + playerHitboxWidth)) ||
				(xPosition + xPlayerHitboxOffset < currentX && xPosition + xPlayerHitboxOffset + playerHitboxWidth > currentX)) &&
				(currentY < yPosition + yPlayerHitboxOffset && currentY + currentHeight > yPosition + yPlayerHitboxOffset)
				)
				{
					//console.log("colliding");
					hitList.push(char);
					
					isColliding = true;
				}
			console.log((currentY < yPosition + yPlayerHitboxOffset && currentY + currentHeight > yPosition + yPlayerHitboxOffset));
			console.log(currentY, currentHeight, yPosition, yPlayerHitboxOffset);
		}
	return isColliding;
}

function pixelCollision(){	//checks collision with areaC.jpg pixels
	charsColliding = [];
	for (let pixel of collisionPixels){
		for (let char of charInScene){
			if(char.position == pixel){
				charsColliding.push(char);
				return;
			}
		}
	}
}

function setupScene(){
	for (let char of charInScene){
		let container = document.getElementById("container");
		let charDiv = document.createElement("div");

		charDiv.className = "collision";
		charDiv.id = char.name;
		charDiv.style.position = "relative";
		charDiv.style.left = char.position[0] + "px";
		charDiv.style.top = char.position[1] + "px";

		char.div = charDiv;
		container.append(charDiv);
	}
}

function resetPosition(){
	charInScene[0].position[0] = 0;
	charInScene[0].position[1] = 0;
}

setupScene();
loadControls();
var xSpeed = 5;
var ySpeed = 4;
var xSpeedLimit = 15;
var ySpeedLimit = 13;
var tempX = 0;
var tempY = 0;
var hitList = [];	//list of chars player is colliding with
var charsColliding = [];	//list of chars currently colliding with a collision pixel
var player = document.getElementById("player");
var playerHeight = player.style.height;
var playerWidth = player.style.width;
var xOffset = 0;
var xPlayerHitboxOffset = 32;
var yOffset = 0;
var yPlayerHitboxOffset = 0;
var playerHitboxWidth = 16;
var moveIDList = new Array();

var canSpace = true;	//spacebar cooldown
var spaceCooldown = 1000;	//in milliseconds

document.addEventListener("keydown", (e) => {
	var isFound = false;
	for (var i = 0; i < moveIDList.length; i++){
		if (moveIDList[i] == e.key){
			isFound = true;
			break;
		}
	}

	if (isFound == false){
		moveIDList.push(e.key);
		moveIDList.push(setInterval(move, 37, e.key));
	}
});
//a list with alternating key and id, ['w', id1, 'a', id2, ...]

document.addEventListener("keyup", (e) => {
	for (var i = 0; i < moveIDList.length; i++){	//movement is bugged when testing in Falkon???
		if (moveIDList[i] == e.key){
			clearInterval(moveIDList[i + 1]); //clear interval with ID next in list
			moveIDList.splice(i, 2);
			break;
		}
	}
});
	
setInterval(() => {
	moveChars();
	changeAnimFrame();
	scrollCamera();
}, 30);