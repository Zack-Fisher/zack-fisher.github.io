function albumInit(){
    //load album list
    for (let album of albums){
        btn = document.createElement("button");
        btn.innerHTML = album.name;
        btn.onclick = function() {
            changeAlbum(album.songs);
        };
        btn.style.display = "block";

        albumDiv.append(btn);
    }
}

function changeAlbum(which){
    //load song list based on album
    songDiv.innerHTML = '';

    for(let song of which){
        btn = document.createElement("button");
        btn.innerHTML = song.name;
        btn.onclick = function() {
            changeSong(song);
        };
        btn.style.display = "block";

        songDiv.append(btn);
    }
}

function songPlay(){
    audioPlayer.play();
    playAnim();
}

function songPause(){
    audioPlayer.pause();
    pauseAnim();
}

function seek(where){
    audioPlayer.fastSeek(where);
}

function changeAudio(audioDifference){
    audioPlayer.volume += audioDifference;
}

function changeSpeed(speedDifference){
    audioPlayer.playbackRate += speedDifference;
}

function changeSong(which){
    audioSource.src = which.src;

    currentParagraph.innerHTML = "Current: " + which.name;
}

let audioPlayer = document.getElementById("audioPlayer");
let audioSource = document.getElementById("audioSource");

let albumDiv = document.getElementById("albums");
let songDiv = document.getElementById("songs");

let currentParagraph = document.getElementById("currentSong");

albumInit();
initStage();

console.log(x);