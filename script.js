let h3 = document.querySelector('h3');

let seq = [];
let user = [];
let btns = ["green","red", "yellow","blue"]

let level=0;
let game = false;

function btnflash(ranbtn) {
    ranbtn.classList.add("flash")
    setTimeout(function(){
        ranbtn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`

    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    console.log(`${ranIdx} , ${ranColor} , ${ranbtn}`)
    console.dir(ranbtn)
    btnflash(ranbtn);
}

document.addEventListener("keypress" , function(ele){
    if(!game && ele.key == "Enter"){
        console.log("game started");
        // console.dir(ele);
        game = true;
        levelUp();
    }

    
})