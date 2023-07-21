console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X" 

// function to change the turn 
const changeTurn = ()=> {
    return turn === "X" ? "0" : "X" 
}

// function to check for a Win 

const checkWin = ()=> {

}

// Game logic 
let boxes = document.getElementsByClassName("box") ;
Array.from(boxes).forEach(element => {
    let boxtext = document.querySelector('.boxtext') ;
    element.addEventListener('click', () => {
        if(boxtext.innerText === '')
        {
            boxtext.innerText = "X" ;
            changeTurn() ;
            audioTurn.play() ;
            checkWin() ;
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn ;

        }

    })
})
