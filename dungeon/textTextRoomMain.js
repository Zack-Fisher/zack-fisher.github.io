let testCanvas = document.getElementById("test");
let test = testCanvas.getContext("2d");

clearCanvas(test, "black");
drawText("THIS IS THE TESTING SPACE FOR THE TEXT. IF YOU'RE NOT TESTING... GET OUT!!!!", testCanvas, 50, "green", "Verdana", 20);
