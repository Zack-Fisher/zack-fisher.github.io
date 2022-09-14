import init, {return_thing} from "./dungeonrust/pkg/dungeonrust.js";

init();

let explore = document.getElementById("explore");
let room = document.getElementById("room");
let cutscene = document.getElementById("cutscene");
let worldMap = document.getElementById("worldMap");

let compStatus = document.getElementById("compStatus");
let demonStatus = document.getElementById("demonStatus");
let textOutput = document.getElementById("textOutput");

let ide = document.getElementById("ide");

ide.innerHTML = return_thing();