'use strict';

function move(key){
		switch(key){
				case 'w'://w key
					tempY += ySpeed;
					animatePlayer(key);
					break;
				case 'a'://a key
					tempX -= xSpeed;
					animatePlayer(key);
					break;
				case 'd'://d key
					tempX += xSpeed;
					animatePlayer(key);
					break;
				case 's'://s key
					tempY -= ySpeed;
					animatePlayer(key);
					break;
				case ' ':
					if(canSpace == true){
						if(playerCollision() == true){
							canSpace = false;
							setTimeout(() => {canSpace = true; console.log("trueset");}, spaceCooldown);
							interact();
						}
					}
					break;
				default:
					break;
			}		
	}
	
function actuallyMove(){
		if (true){
			if (Math.abs(tempY) > ySpeedLimit){
				tempY = ((Math.abs(tempY) / tempY) * ySpeedLimit);
			}
			if (Math.abs(tempX) > xSpeedLimit){
				tempX = ((Math.abs(tempX) / tempX) * xSpeedLimit);
			}
			yPosition -= tempY;
			xPosition += tempX;
			tempX /= 1.20;
			tempY /= 1.25;
			player.style.top = yPosition + "px";
			player.style.left = xPosition + "px";
			//console.log(player.style.top, player.style.left, xPosition, yPosition);
		}
	}	

function animatePlayer(key){
		switch(key){
				case 'w':
					yOffset = 0;
					break;
				case 'a':
					yOffset = 96;
					break;
				case 'd':
					yOffset = 32;
					break;
				case 's':
					yOffset = 64;
					break;
			}
}

function changeAnimFrame(){
	if (moveIDList.length > 0){
		if (xOffset = 48){
			xOffset = 0;
		}
		else{
			xOffset += 24;
		}
		player.style.backgroundPosition = "-" + xOffset + "px -" + yOffset + "px";
	}
}

function scrollCamera(){
	let container = document.getElementById("container");
	let width = window.innerWidth;
	let height = window.innerHeight;
	let newXScroll = 0;
	let newYScroll = 0;

	if (xPosition > (width * 0.5)){
		newXScroll = xPosition + (width * 0.25);
	}

	if (yPosition > (height * 0.5)){
		newYScroll = yPosition + (height * 0.5);
	}

	container.setAttribute("style", "width: " + newXScroll + "px");
	container.setAttribute("style", "height: " + newYScroll + "px");

	window.scrollTo(newXScroll, newYScroll);
}

function playerCollision(){
	var isColliding = false;
	hitList = [];
	for (let char of charInScene)
		{
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
		}
	console.log(hitList);
	return isColliding;
}

function setupScene(){
	for (let char of charInScene){
		let container = document.getElementById("container");
		let charDiv = document.createElement("div");

		charDiv.className = "collision";
		charDiv.id = char.name;

		char.div = charDiv;
		container.append(charDiv);
	}
}

function resetPosition(){
	xPosition = 0;
	yPosition = 0;
}

var charInScene = [npc1];
setupScene();
var xSpeed = 5;
var ySpeed = 4;
var xSpeedLimit = 15;
var ySpeedLimit = 13;
var tempX = 0;
var tempY = 0;
var hitList = [];	//list of chars player is colliding with
var player = document.getElementById("player");
var playerHeight = player.style.height;
var playerWidth = player.style.width;
var xPosition = 0;
var yPosition = 0;
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
	for (var i = 0; i < moveIDList.length; i++){
		if (moveIDList[i] == e.key){
			clearInterval(moveIDList[i + 1]); //clear interval with ID next in list
			moveIDList.splice(i, 2);
			break;
		}
	}
});
	
setInterval(() => {
	actuallyMove();
	changeAnimFrame();
	scrollCamera();
}, 30);
