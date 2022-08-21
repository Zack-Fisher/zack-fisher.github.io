function playMusic(which){
    currentMusic = which;
    if (muted){
        which = "empty";
    }
    lastMusic.pause();  //stops last song, plays specified new song
    lastMusic.currentTime = 0;
    var newMusic = document.getElementById(which);
    lastMusic = newMusic;
    newMusic.play();
}

function muteToggle(){
    muted = !muted;
    playMusic(currentMusic);
}

var lastMusic = document.createElement("audio");    //initialize blank component

var muted = false;

var currentMusic;