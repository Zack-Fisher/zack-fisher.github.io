function openMovie(which){
    docBody.style.backgroundColor = "rgb(31, 31, 31)";
    docBody.style.animationName = "dim";
    docBody.style.animationDuration = "2s";
    moviePlayerDiv.innerHTML = which.source;
}

function addOptions(){
    for (let movie of movies){
        let button = document.createElement("button");

        button.innerHTML = movie.name;
        button.onclick = function() {
            openMovie(movie);
        };

        selectorDiv.append(button);
    } 
}

let docBody = document.getElementsByTagName("body")[0];

let selectorDiv = document.getElementById("selector");
let moviePlayerDiv = document.getElementById("moviePlayer");

addOptions();