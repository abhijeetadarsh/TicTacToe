console.log("Welcome to Tic Tac Toe")
// let music = new Audio("sounds/music.mp3")
let xTone = new Audio("sounds/xTone.mp3")
let oTone = new Audio("sounds/oTone.mp3")
// let win = new Audio("sounds/win.mp3")
let turn = "X"
let gameover = false


// Function to change the turn
const changeTurn = () => {
    turn = (turn === "X") ? "O" : "X"
    document.querySelector(".info").innerHTML = "Turn for " + turn
}

// Function to check for a win
const checkWin = () => {
    const ways = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15 ,90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45]
    ]
    ways.forEach(a => {
        if (boxes[a[0]].textContent !== "" && boxes[a[0]].textContent === boxes[a[1]].textContent && boxes[a[1]].textContent === boxes[a[2]].textContent) {
            changeTurn()
            document.querySelector(".info").innerHTML = turn + " is Winner!"
            gameover = true
            document.getElementById("line").style.display = "block"
            document.getElementById("line").style.transform = `translate(${a[3]}vw,${a[4]}vw) rotate(${a[5]}deg)`
            boxes[a[0]].classList.add("winEffect")
            boxes[a[2]].classList.add("winEffect")
            boxes[a[1]].classList.add("winEffect")
        }
    })
}

// Function to reset
const reset = () => {
    turn = "X"
    document.querySelector(".info").innerHTML = "Turn for " + turn
    gameover = false
    boxes.forEach(element => {
        element.textContent = ""
        element.classList.remove("winEffect")
    })
    document.getElementById("line").style.display = "none"
    // music.play()
}

// Game logic
// music.play()
let boxes = document.querySelectorAll(".box")
boxes.forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent === "" && gameover === false) {
            (turn === "X")? xTone.play(): oTone.play()
            element.textContent = turn
            changeTurn()
            checkWin()
            // if (gameover === true) {
            //     win.play()
            // }
        }
    })
})

document.querySelector("#reset").addEventListener("click", reset)
// document.addEventListener("click",changeTurn)
// document.addEventListener("click",()=>{music.play()})