console.log("Welcome to Tic Tac Toe")
// let music = new Audio("sounds/music.mp3")
let xTone = new Audio("sounds/xTone.mp3")
let oTone = new Audio("sounds/oTone.mp3")
// let win = new Audio("sounds/win.mp3")
let turn = "X"
let gameover = false
let empty_count = 9


// Function to change the turn
const changeTurn = () => {
    turn = (turn === "X") ? "O" : "X"
    document.querySelector(".info").innerHTML = "Turn for " + turn
    empty_count--
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
            // changeTurn()
            let temp = (turn === "X") ? "O" : "X"
            document.querySelector(".info").innerHTML = temp + " is Winner!"
            gameover = true
            // document.getElementById("line").style.display = "block"
            // document.getElementById("line").style.transform = `translate(${a[3]}vw,${a[4]}vw) rotate(${a[5]}deg)`
            boxes[a[0]].classList.add("winEffect")
            boxes[a[2]].classList.add("winEffect")
            boxes[a[1]].classList.add("winEffect")
        }
    })
    if (gameover === false && empty_count === 0) {
        document.querySelector(".info").innerHTML = "Match Draw!"
    }
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
    empty_count = 9
// music.play()
}

// easy bot code
// changeTurn()
function easy_bot(){
    // console.log("<"+empty_count+">")
    while(turn === "O" && gameover === false && empty_count > 0){
        let rand_index = Math.floor(Math.random()*9)
        let rand_box = document.querySelectorAll(".box")[rand_index]
        // console.log(rand_index)
        // rand_box.style.color = "red"
        if (rand_box.textContent === "") {
            oTone.play()
            rand_box.textContent = turn
            changeTurn()
            checkWin()
            break
        }
        // break
    }
}

// Game logic
// music.play()
let boxes = document.querySelectorAll(".box")
boxes.forEach(element => {
    element.addEventListener("click", () => {
        // console.log("<"+empty_count+">")
        if (element.textContent === "" && gameover === false) {
            (turn === "X")? xTone.play(): oTone.play()
            element.textContent = turn
            changeTurn()
            checkWin()
            if(document.getElementById("test2").checked === true)
            {
                setTimeout(easy_bot, 1700)
            }
            // else if (document.getElementById("test3").checked === true) {
                
            // }
        }
    })
})

document.querySelector("#reset").addEventListener("click", reset)
// document.addEventListener("click",changeTurn)
// document.addEventListener("click",()=>{music.play()})