let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO =  true;//palyerX, playerO

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click" , () =>{
        
        if(turnO ===true){//playerO
            box.innerText="O"
            box.style.color="#8332AC" 
            box.style.fontSize ="55px"
            box.style.fontWeight="650"
           

            turnO=false;
        }else{//playerX
            box.innerText="X"
            box.style.color="#F3752B"
            box.style.fontSize ="52px"
            box.style.fontWeight="650"
            
            turnO=true;
        }
        box.disabled = true;// button disable

        checkWinner();
    })
})


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBoxes = () =>{
    for(let box of boxes){
        box.diabled = false;
        box.innerText ="";
    }
};




const shoWinner = (winner) =>{
    msg.innerText =`Congratulation,Winner is ${winner}`;
    msg.style.color="#53F4FF"
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winpatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val != "") {
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                
                shoWinner(pos1Val);
            }

        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
