async function replace(){
    let p = document.getElementById("t");
    await wait();
    p.innerHTML = "y";
}

function wait(){
    setInterval(console.log, 2000, "test");
}