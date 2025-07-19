let seq = [];
let user = [];

let level=0;
let game = false;

document.addEventListener("keypress" , function(ele){
    if(!game && ele.key == "Enter"){
        console.log("game started");
        // console.dir(ele);
        game = true;
    }
})