function clearTextbox(container, color = "white"){
    let elmList = container.getElementsByTagName('div');
    for (let elm of elmList){
        elm.remove();
    }
}

function parseString(str){
    let specialList = cleanText(str);   //"<" is 0, "*" is 1, normal char is 22

    let isShake = false;
    let isFlash = false;
    let isRed = false;

    let filterList = [];
    let listLength = specialList.length;
    for(let i = 0; i < listLength; i++){
        switch(specialList[i]){
            case 0:
                isShake = !isShake;
                break;
            case 1:
                isFlash = !isFlash;
                break;
            case 2:
                isRed = !isRed;
                break;
            default:
                break;
        }

        let obj = {};
        obj["index"] = i;

        let filtersAdded = 0;

        if (isShake){
            obj['filter' + filtersAdded] = "shake";
            console.log(obj);
            filtersAdded++;
        }

        if (isFlash){
            obj['filter' + filtersAdded] = "flash";
            console.log(obj);
            filtersAdded++;
        }

        if (isRed){
            obj['filter' + filtersAdded] = "red";
            console.log(obj);
            filtersAdded++;
        }

        filterList.push(obj);
    }
    return filterList;
}

function cleanText(str){    //returns string without special characters.
    let specLen = specialChars.length;
    let specialIndexes = [];

    let strArray = [];

    let len = str.length;
    for(let i = 0; i < len; i++){
        strArray[i] = str[i];   //converting the string into a proper array
    }

    for(let i = 0; i < len; i++){
        for(let j = 0; j < specLen; j++){
            if(strArray[i] == specialChars[j]){
                specialIndexes[i] = j;
            }
        }
        if(specialIndexes[i] == undefined){
            specialIndexes[i] == 22;
        }
    }

    return specialIndexes;
}

function addAnimation(charDiv, animName){
    switch (animName){
        case "shake":
            charDiv.className += " " + animName;
            return charDiv;
        case "flash":
            console.log(charDiv.childNodes);
            charDiv.childNodes[0].className = animName; //apply certain effects to images, not divs
            return charDiv;
        case "red":
            console.log(charDiv.childNodes);
            charDiv.childNodes[0].className = animName; //apply certain effects to images, not divs
            return charDiv;
    }
}

function drawText(currText, container){ //container is a div
    let filterList = parseString(currText);
    let textLen = currText.length;
    for (let i = 0; i < textLen; i++){
        let letter = currText[i];

        let skip = false;

        let specLen = specialChars.length;
        for(let j = 0; j < specLen; j++){   //do not render specialChars.
            if(letter == specialChars[j]){
                skip = true;
            }
        }

        if(skip == false){
            let letterDiv = document.createElement('div');
            let letterImg = document.createElement('img');
            let letterCode = letter.charCodeAt(0);

            letterImg.src = "letters/" + letterCode + ".png";
            letterDiv.id = container.id + i; //ex: testContainer22 is the 23rd character in testContainer
            letterDiv.className = "letter";
            letterDiv.append(letterImg);

            let filters = filterList[i];
            for(let filter in filters){
                if(typeof filter != "num"){
                    addAnimation(letterDiv, filters[filter]);
                }
            }

            setTimeout(() => {
                container.append(letterDiv);
            }, i * 50); 
        } 
    }
}

function drawIDEText(letter, line){
    let letterDiv = document.createElement('div');
    let letterImg = document.createElement('img');
    let letterCode = letter.charCodeAt(0);

    letterImg.src = "letters/" + letterCode + ".png";
    letterDiv.className = "letter";
    letterDiv.append(letterImg);

    line.append(letterDiv);
    console.log("p");
}

var specialChars = ["<", "*", "#"];