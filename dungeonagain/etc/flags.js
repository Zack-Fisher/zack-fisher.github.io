//game state flags

function setFalse(){
    for (let flag in flags){
        flags[flag] = false;
    }
}

function setTrue(){
    for (let flag in flags){
        flags[flag] = true;
    }
}

var flags = {
    moneyGet: false,
    x: false,
    foo: true,
};