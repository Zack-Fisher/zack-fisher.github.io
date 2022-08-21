'use strict'

function endBattle(){
    changeState();
}

function turn(){
    if (currentEnemyHealth <= 0)
    {
        endBattle();
        clearInterval(turnLoopID);
        currentEnemy = undefined;
        return;
    }
    if (!playerTurn){
        console.log(typeof health, typeof currentEnemy.attack, typeof playerDefense);
        health -= (currentEnemy.attack - playerDefense);
        console.log(health);
        playerTurn = true;
    }
}

function battleChance(){
    var isEncounter = false;
    if ((Math.random() * 100) < encounterRate)
    {
        isEncounter = true;
        return isEncounter;
    }
}

function attack(){
    currentEnemyHealth -= playerAttack;
    playerTurn = false;
    drawEnemyStats();
}

function battleHandling(){
    console.log("start battle");
    var randEnemy = Math.floor(Math.random() * map.enemies.length);
    currentEnemy = map.enemies[randEnemy];
    currentEnemyHealth = currentEnemy.maxHealth;
    drawEnemy();
    turnLoopID = setInterval(turn, 30);
}

var encounterRate = 30; //in percentage, encounterRate = 30 ==> 30% chance of encounter per tile

var playerTurn = true; //the player's state, making a move in battle will set this to false/trigger enemy attack

var turnLoopID = 0;

var currentEnemy;
var currentEnemyHealth = 0;