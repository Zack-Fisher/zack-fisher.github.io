function initCutscene(csDiv, which){
    cutsceneDiv = csDiv;

    cutsceneDiv.style.visibility = "visible";
    let video = document.createElement("video");
    video.id = "playingCutscene";
    video.autoplay = true;

    let source = document.createElement("source");
    source.src = which.videoSource;
    source.type = "video/mp4";

    video.append(source);
    cutsceneDiv.append(video);
}

function closeCutscene(){
    cutsceneDiv.style.visibility = "hidden";
    let currCS = document.getElementById("playingCutscene");
    currCS.remove();

    cutsceneDiv = null;
}

let cutsceneDiv = null;