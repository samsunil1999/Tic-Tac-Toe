let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let msg2 = document.querySelector(".msg-2")

let totalTurns = 0;
let foundWinner = false;
let winner = ""; // X or O
let turnO = true // playerx --> false, playerY --> true
let nextPlayer = document.querySelector("#nxt-player")

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("you just clicked a box!!!!");
        if (foundWinner) {
            boxes.forEach((box) => {
                box.innerText = ""
            })
            boxes.disabled = true;
            alert(`${res} won the match`)
        }
        
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#324376"
            totalTurns++;
            turnO = false
            nextPlayer.innerText = "X"
        } else {
            box.innerText = "X";
            box.style.color = "red"
            totalTurns++;
            turnO = true
            nextPlayer.innerText = "O"
        }
        
        box.disabled = true;
        checkWinner();
        if (foundWinner) {
            msg.innerText = `Winner is ${winner}`
            msgContainer.classList.remove("hide")
            resetBtn.classList.add("hide")
            msg2.classList.add("hide")
        }

        if (totalTurns === 9) {
            msg.innerText = `It's a draw`
            msgContainer.classList.remove("hide")
            resetBtn.classList.add("hide")
            msg2.classList.add("hide")
        }
    })
})

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner : ", pos1Val);
                foundWinner = true;
                winner = pos1Val
                return
            }
        }
    }
    return
}

resetBtn.addEventListener("click", () => {
    console.log("reset the game");
    boxes.forEach((box) => {
        foundWinner = false;
        res = "";
        box.innerText = "";
        box.disabled = false;
        totalTurns = 0;
        msg2.classList.remove("hide")
    })
})

newBtn.addEventListener("click", () => {
    console.log("new game created");
    boxes.forEach((box) => {

        foundWinner = false;
        res = "";
        box.innerText = "";
        box.disabled = false;
        totalTurns = 0;

        msgContainer.classList.add("hide")
        resetBtn.classList.remove("hide")
        msg2.classList.remove("hide")
    })
})
