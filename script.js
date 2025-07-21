let h3 = document.querySelector('h3');
let btns = document.querySelectorAll(".btn");
let body = document.querySelector('body')
let gameSeq = [];
let userSeq = [];
let btnColors = ["purple","red", "yellow","blue"]

let level=0;
let game = false;
let highScore = 0;
function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    game = false
}

function checkLvl(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        if(level > highScore){
            highScore = level ;
        }
        h3.innerHTML = `Game Over ! Your Score was <b>${level}</b> <br>Your Highest Score was ${highScore} <br> Press enter to start again`;        
       
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor = "white";
        } , 150)

        reset();
    }
}

function userflash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash")
    }, 250);
}

function buttonPress(){
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    // console.log(userSeq)
    checkLvl(userSeq.length -1 )
}

for(let btn of btns){
    btn.addEventListener("click" , buttonPress);
}

function btnflash(btn) {
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}



function levelUp(){
    userSeq = [];
    level++;
   
    h3.innerText = `Level ${level}`

    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btnColors[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    // console.log(`${ranIdx} , ${ranColor} , ${ranbtn}`)
    // console.dir(ranbtn)
    gameSeq.push(ranColor);
    // console.log(gameSeq);
    btnflash(ranbtn);
}

document.addEventListener("keypress" , function(ele){
    if(!game && ele.key == "Enter"){
        // console.log("game started");
        // console.dir(ele);
        game = true;
        levelUp();
    }
})