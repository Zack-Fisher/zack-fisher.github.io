function interact(){
    switch(hitList[0].name){
        case "npc1":
            let current = hitList[0];
            drawTextbox(current);
            break;
        case "theaterWarp":
            window.location.href = "";
            break;
        case "museumWarp":
            window.location.href = "/drawing/museumMain.html";
            break;
        case "gameWarp":
            window.location.href = "/games/games.html";
            break;
    }
}