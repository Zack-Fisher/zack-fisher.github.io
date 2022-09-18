//ONLY HAVE ONE OF THESE LOADED AT A TIME
//dialogue handles the node index on its own

//ap: asset path
//rn: return node
//nIdx: node index (which node you're at in the pointed graph)

function nextLine(choice){
    let rn = null;
    switch(nIdx){
        case -1:
            nIdx = 0;
            break;
        case 0:
            switch(choice){
                case "hey":
                    nIdx = 1;
                    break;
                case "goodbye":
                    if (flags.x){
                        nIdx = 1;
                    }
                    else{
                        nIdx = 0;
                    }
                    break;
            }
            break;
        case 1:
            nIdx = 0;
            break;
    }

    rn = nodeList[nIdx];

    console.log(nIdx);

    return rn;
}

let ap = "/dungeonagain/room/character/testchar/asset/";

//must have text, everything else is optional
let one = {
    sprite: ap + "sprite/testpose1.png",
    text: "hi",
    options: [
        "hey",
        "goodbye",
    ],
    bg: ap + "bg/testbg.png",
};

let two = {
    sprite: ap + "sprite/testpose2.png",
    text: "this is placeholder text",
};

let nIdx = -1;

let nodeList = [one, two];