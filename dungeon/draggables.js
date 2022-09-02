function dragging(){
    if(isDragging){
        currDrag.style.top = mouseY + "px";
        currDrag.style.left = mouseX + "px";
    }
}

function release(which){
    let idIndex = idList.indexOf(which);
    clearInterval(idList[idIndex + 1]);
    idList.splice(idIndex, 2);
}

function dragInit(){
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    for (let elm of draggables){
        elm.addEventListener("mousedown", () => {
            currDrag = elm;
            isDragging = true;
        });

        elm.addEventListener("mouseup", () => {
            isDragging = false;
            console.log("release");
        });
    }
}

function newDraggable(elm){
    elm.className += " draggable";
    draggables = document.getElementsByClassName("draggable");
    dragInit();
}

var draggables = document.getElementsByClassName("draggable");
var idList = [];
var mouseX = 0;
var mouseY = 0;
var isDragging;
var currDrag;

setInterval(console.log, 10, isDragging, currDrag);