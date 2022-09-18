//if you load scripts one at a time, you can have multiple fcns with the same name.
//'replace' is the example here.

function deactivate(){
    removeJS();
}

function loadJS(filename){
    if(currScript != null){ //remove if a script is already loaded
        removeJS();
    }
    let fileref = document.createElement('script');
    fileref.id = "dialogue";
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    document.getElementsByTagName("body")[0].append(fileref);
    currScript = fileref;
}

function removeJS(){
    currScript.remove();
    currScript = null;
}

let currScript = null;