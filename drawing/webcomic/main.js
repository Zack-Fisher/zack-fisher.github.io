function appendImage(source){
    var image = document.createElement("img");

    image.src = "img/pages/" + source + ".png";
    image.alt = source;

    console.log(image.src);
    target.append(image);
    target.append(lineBreak);
}

function appendText(textStr){
    var paragraph = document.createElement("p");

    paragraph.innerHTML = textStr;
    
    target.append(paragraph);
    target.append(lineBreak);
}

function appendLink(textStr){
    var link = document.createElement("button");

    link.className = "link";
    link.innerHTML = textStr;
    link.addEventListener("click", () => {
        newPage(true);
    });
    link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "gray";
        link.style.color = "purple";
        link.style.textDecorationColor = "purple";
    });
    link.addEventListener("mouseleave", () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "blue";
        link.style.textDecorationColor = "blue";
    });

    target.append(link);
    target.append(lineBreak);
}

function buildPage(){
    localStorage.setItem("currPage", currPage + '');

    pageCounter.innerHTML = "Page " + (currPage + 1) + " out of " + (comicPages.length);

    var pageData = comicPages[currPage];

    target.innerHTML = '';

    for(var i = 0; i < pageData.length - 1; i++){
        if((i % 2) == 0){
            switch(pageData[i]){
                case 'img':
                    appendImage(pageData[i + 1]);
                    break;
                case 'txt':
                    appendText(pageData[i + 1]);
                    break;
                default:
                    break;
            }
        }
    }
    appendLink(pageData[pageData.length - 1]);
}

function newPage(which){
    console.log(typeof which);
    if (typeof which == 'number'){
        if(which >= 0 && which <= comicPages.length - 1){
            currPage = which; 
        }  
        else{
            console.log("page does not exist");
        }
    }
    else if (typeof which == 'boolean' && which == true){
        if(currPage < comicPages.length - 1){
            currPage++;
        }
    }
    else if (typeof which == 'boolean' && which == false){
        if(currPage > 0){
            currPage--;
        }
    }
    else{
        console.log("invalid newPage input");
    }

    buildPage();
}

var pageCounter = document.getElementById("pageCount");
var target = document.getElementById("content");
var lineBreak = document.createElement("br");
var storedPage = localStorage.getItem("currPage");
var currPage = parseInt(storedPage);

if (storedPage == null){
    currPage = 0;
}

buildPage();