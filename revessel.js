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
				default:
					break;
			}		
	}
	
function actuallyMove(){
		if (playerCollision() == false){
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

function playerCollision(){
	'use strict';
	var isColliding = false;
	hitList = [];
	for (var i = 0; i < collisionObjects.length; i++)
		{
			if (!(((yPosition + playerHeight) < (collisionObjects[i].style.top)) || (yPosition > (collisionObjects[i].style.top + collisionObjects[i].style.height)) || ((xPosition + playerWidth) < collisionObjects[i].style.left) || (xPosition > (collisionObjects[i].style.left + collisionObjects[i].style.width)))){
				hitList.push(collisionObjects[i]);
				isColliding = true;
			}
		}
	for (i = 0; i < hitList.length; i++){
		console.log("colliding");
	} 
	console.log(hitList);
	return isColliding;
}

function resetPosition(){
	xPosition = 0;
	yPosition = 0;
}

var collisionObjects = [document.getElementById("collision")];
var xSpeed = 5;
var ySpeed = 4;
var xSpeedLimit = 15;
var ySpeedLimit = 13;
var tempX = 0;
var tempY = 0;
var hitList = [];
var player = document.getElementById("player");
var playerHeight = player.style.height;
var playerWidth = player.style.width;
var xPosition = 0;
var yPosition = 0;
var xOffset = 0;
var yOffset = 0;
var moveIDList = new Array();

document.addEventListener("keydown", (e) => {
	var isFound = false;
	for (var i = 0; i < moveIDList.length; i++){
		if (moveIDList[i] == e.key){
			isFound = true;
			break;
		}
	}

	if (isFound == false){
		console.log("moving");
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
}, 30);

setInterval(changeAnimFrame, 30);
