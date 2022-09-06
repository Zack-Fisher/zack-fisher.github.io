function interact(which){
    switch(which.name){
        case "npc1":
            drawTextbox(which);
            break;
        case "theaterWarp":
            window.location.href = "/theater/theaterMain.html";
            break;
        case "museumWarp":
            window.location.href = "/drawing/museumMain.html";
            break;
        case "gameWarp":
            window.location.href = "/games/games.html";
            break;
        case "infoWarp":
            window.location.href = "/info.html";
    }
}