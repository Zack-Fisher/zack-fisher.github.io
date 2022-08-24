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

function addPartyMember(){
    //add party member to the equip <div>
}

function removePartyMember(){
    //remove from equip <div>
}

var maxHealth = 20;
var health = maxHealth;

var maxMana = 20;
var mana = maxMana;

var playerAttack = 5;
var playerDefense = 3;

var inventory = [];