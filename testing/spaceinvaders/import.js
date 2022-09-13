import init, {return_int} from "./spacerust/pkg/spacerust.js";
        
init().then(() => {
    let para = document.getElementById("test");
    para.innerHTML = return_int();
});