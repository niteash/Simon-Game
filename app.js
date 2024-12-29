let gameSeq = [];
let userSeq = [];

let btns = ["red","green","blue","orange"]

let start = false;
let level = 1;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",()=>{
   if(start == false){
    console.log("Game has started!");
    start = true;


    levelup();
   }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },1000)
}

function userflash(btn) {
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash")
    },1000)
}

function levelup(){
 userSeq = [];
 let lv = level++;
 h2.innerText = `Level : ${lv}`;

let randIndx = Math.floor(Math.random () * 4);
let randColor = btns[randIndx];
let randBtn = document.querySelector(`.${randColor}`)

// console.log(randIndx);
// console.log(randColor);
// console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)

 gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("cureent level : ", level)

    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(()=>{
                levelup();
            },1000)
        }
    }else{
      h2.innerHTML = `Game Over! Your score was <u>${level}</u> <br> Press any key to start !`;

      document.querySelector("body").style.backgroundColor = 'red';

      setTimeout(()=>{
      document.querySelector("body").style.backgroundColor = 'white';

      },150)
      reset();
    }
}

function btnPress () {
    let btn = this
    userflash(btn)

    userColor = btn.getAttribute('id');
    // console.log(userColor)
    userSeq.push(userColor);
    console.log(userSeq)

    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn");

for (Xbtn of allBtns){
    Xbtn.addEventListener('click', btnPress)
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}