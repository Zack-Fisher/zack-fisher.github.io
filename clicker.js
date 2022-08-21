'use strict'

function makePost(){
	daysRuined += power;
	counter.innerHTML = 'Days ruined: ' + daysRuined + '. Money: ' + money + '.';
	return power;
}

function showPrice(thing){
	switch(thing){
		case 'ally':
			allyTextObj.innerHTML(allyText + ' Cost: ' + allyPrices[allies]);
			break;
		case 'bot':
			botTextObj.innerHTML(botText + ' Cost: ' + botPrices[bots]);
			break;
		default:
			break;
	}
}

function hidePrice(thing){
	switch(thing){
		case 'ally':
			allyTextObj.innerHTML(allyText);
			break;
		case 'bot':
			botTextObj.innerHTML(botText);
			break;
		default:
			break;
	}
}

function buy(thing){
	switch(thing){
		case 'ally':
			allies++;
			power += alliesHelp;
			break;
		case 'bot':
			bots++;
			daysPerSecond += botPerSecond;
			break;
		default:
			break;
	}
}

function update(){
	daysRuined += daysPerSecond;
	money += (daysRuined / 4);
	counter.innerHTML = 'Days ruined: ' + daysRuined + '. Money: ' + money + '.';
}

var daysRuined = 0;
var money = 0.00;
var power = 1;
var daysPerSecond = 0;
var allies = 0;
var alliesHelp = 1;
var bots = 0;
var botPerSecond = 1;
var counter = document.getElementById("counter");

//text
var allyText = 'Because even trolls need friends.'
var botText = 'May or may not be a real person.'

var allyTextObj = document.getElementById("allyText");
var botTextObj = document.getElementById("botText");

//prices
var allyPrices = [1, 5, 20, 50, 100, 300, 800, 1000, 2000, 3000];
var botPrices = [1, 5, 20, 50, 100, 300, 800, 1000, 2000, 3000];

setInterval(update, 1000);
allyTextObj.innerHTML(allyText);
botTextObj.innerHTML(botText);