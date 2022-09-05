var filenames = ['IMG_9686.jpg', 'IMG_9605.jpg', 'IMG_9608.jpg', 'IMG_0173.jpg', 'IMG_9642.jpg', 'IMG_9674.jpg', 'IMG_9697.jpg', 'IMG_9713.jpg', 'IMG_9730.jpg', 'IMG_9658.jpg', 'IMG_9695.jpg', 'IMG_9634.jpg', 'IMG_9661.jpg', 'IMG_9632.jpg', 'IMG_9620.jpg'];

var divider = document.getElementById("art");

for (let source in filenames){
    var image = document.createElement("img");
    image.src = "asset/ryanPark/" + filenames[source];
    image.alt = filenames[source];
    image.style.borderRadius = "50px";
    image.role = "button";
    image.onclick = "alert('test')"; //this setting doesn't do anything, why?

    let randNum = Math.floor(Math.random() * 20);
    image.style.marginLeft = randNum + "%";

    divider.append(image);  //event listeners don't carry through appending??
    divider.append(document.createElement("br"));
}

for(let image of document.getElementsByTagName('img')){
    image.className = "0";  //lol jank
    image.addEventListener("click", () => {
        let i = parseInt(image.className);
        if(i % 2 == 0){
            image.style.width = "100%";
            image.style.height = "100%";
        }
        else{
            image.style.width = "auto";
            image.style.height = "auto";
        }
        i++;
        image.className = i.toString(); //this is weird but i have to store the index with the image somehow
    });
}