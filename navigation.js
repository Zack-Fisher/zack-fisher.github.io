//initialize navigation tools on a page
//to call functions, use a script tag after importing this script on a page.
//modify the navigator div with functions inside this script, which call appendNavigatorDiv to update the html.
//if you load this script with "defer", the functions in the future script tag will not be defined.

function indexButton(){
    let button = document.createElement("button");

    button.style.backgroundImage = "url('/asset/navIcons/toHome.png')";
    button.style.width = "64px";
    button.style.height = "64px";
    button.style.position = "relative";
    button.style.zIndex = Number.MAX_SAFE_INTEGER;
    button.onclick = function() { window.location.href = '/index.html' };   //onclick takes in a FUNCTION, not a STRING.

    navigationDiv.append(button);

    appendNavigatorDiv();
}

function museumButton(){
    let button = document.createElement("button");

    button.style.backgroundImage = "url('/asset/navIcons/museumBack.png')";
    button.style.width = "64px";
    button.style.height = "64px";
    button.style.position = "relative";
    button.style.zIndex = Number.MAX_SAFE_INTEGER;
    button.onclick = function() { window.location.href = '/drawing/museumMain.html' };

    navigationDiv.append(button);

    appendNavigatorDiv();
}

function gameButton(){
    let button = document.createElement("button");

    button.style.backgroundImage = "url('/asset/navIcons/gameBack.png')";
    button.style.width = "64px";
    button.style.height = "64px";
    button.style.position = "relative";
    button.style.zIndex = Number.MAX_SAFE_INTEGER;
    button.onclick = function() { window.location.href = '/games/games.html' }; 

    navigationDiv.append(button);

    appendNavigatorDiv();
}

function theaterButton(){
    let button = document.createElement("button");

    button.style.backgroundImage = "url('/asset/navIcons/backTheater.png')";
    button.style.width = "64px";
    button.style.height = "64px";
    button.style.position = "relative";
    button.style.zIndex = Number.MAX_SAFE_INTEGER;
    button.onclick = function() { window.location.href = '/theater/theaterMain.html' }; 

    navigationDiv.append(button);

    appendNavigatorDiv();
}

function appendNavigatorDiv(){
    let children = body.children;
    let first = children[0];
    if(first.id == "navi"){ //if there is already a navigator, remove it.
        body.removeChild(first);
    }

    body.insertBefore(navigationDiv, children[0]);
}

function fix(){
    navigationDiv.style.position = "fixed";
}

let body = document.getElementsByTagName("body")[0];

let navigationDiv = document.createElement("div");
navigationDiv.style.position = "absolute";
navigationDiv.style.left = "10px";
navigationDiv.style.top = "8px";
navigationDiv.style.backgroundColor = "gray";

navigationDiv.id = "navi";

appendNavigatorDiv();