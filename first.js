let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgCon=document.querySelector(".msg-container");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
const enableBox=()=>{
    for(let b of box){
        b.disabled=false;
        b.innerText="";
    }
}
const resetGame=()=>{
    turnO=true;
    enableBox();
    msgCon.classList.add("hide");
}
box.forEach((b)=>{
    b.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
            b.innerText="O";
            turnO=false;
        }
        else{
            b.innerText="X";
            turnO=true;
        }
        b.disabled=true;

        checkWinner();
    })
})
const disableBox=()=>{
    for(let b of box){
        b.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBox();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;

        if(pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner");
                console.log("winner is ",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);