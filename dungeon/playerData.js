function renderInventory(){
    var inventorySelect = document.getElementById("inventory");

    for (var i = 0; i < inventory.length; i++){
        inventorySelect.remove(i);
    }

    for (var i = 0; i < inventory.length; i++){
        var itemOption = document.createElement("option");
        itemOption.text = inventory[i];
        inventorySelect.add(itemOption);
    }
}

function getItem(item){
    inventory.push(item);
    drawText("You got an " + item + "!");
    renderInventory();
}

function useItem(item){
    var actuallyUsed = true; //was an item successfully used?
    switch(item){
        default:
            actuallyUsed = false;
            break;
    }

    inventory.splice(inventory.indexOf(item),  1);
    renderInventory();

    if (isBattle && !actuallyUsed){
        playerTurn = false;
    }
}

function addPartyMember(which){ //takes in an object from partymembers.js
    //holds the equip info
    var partyDiv = document.createElement("div");

    partyDiv.className = "party";

    //draws a picture of the party member
    var partyDisplay = document.createElement("canvas");

    //equip select list
    var equipList = document.createElement("select");

    //relevant info/stats
    var nameParagraph = document.createElement("p");
    var healthParagraph = document.createElement("p");
    var manaParagraph = document.createElement("p");
    var attackParagraph = document.createElement("p");
    var defenseParagraph = document.createElement("p");

    nameParagraph.innerHTML = "Name: " + which.name;
    healthParagraph.innerHTML = "Max health: " + which.maxHP;
    manaParagraph.innerHTML = "Max magic: " + which.maxMP;
    attackParagraph.innerHTML = "Attack: " + which.attack;
    defenseParagraph.innerHTML = "Defense: " + which.defense;

    partyDisplay.width = "100";
    partyDisplay.height = "200";
    partyDisplay.className = "partyDisplay";


    partyDiv.append(partyDisplay);

    partyDiv.append(nameParagraph);
    partyDiv.append(healthParagraph);
    partyDiv.append(manaParagraph);
    partyDiv.append(attackParagraph);
    partyDiv.append(defenseParagraph);

    partyDiv.append(equipList);

    equipsMenu.append(partyDiv);

    var party = partyDisplay.getContext("2d");
    which.display = party;
    which.partyDiv = partyDiv;
    which.equipList = equipList;
}

function removePartyMember(which){
    document.remove(which.partyDiv);
    //TODO: update partyDisplays and partyMembers as well
}

var equipsMenu = document.getElementById("equips");

var maxHealth = 20;
var health = maxHealth;

var maxMana = 20;
var mana = maxMana;

var playerAttack = 5;
var playerDefense = 3;

var inventory = [testItem];

var equipInventory = [testAccessory];

//party logic info
var partyMembers = [test];