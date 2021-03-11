playableMoves = ['ROCK', 'PAPER','SCISSORS']

let computerPlay = () => {
    moveGenerator = Math.floor(Math.random() * 3);
    computerMovePlayed = playableMoves[moveGenerator];
    return computerMovePlayed;
}

let letsPlay = () => {
    let userPlay = prompt("Enter your move, Human").toUpperCase();
    let computer = computerPlay();
    
    let userMoveIndex = playableMoves.indexOf(userPlay);
    let computerMoveIndex = playableMoves.indexOf(computer)
    if(computerMoveIndex === userMoveIndex){
        alert("IT'S A TIE")
    }
    else if (computerMoveIndex > userMoveIndex){
        alert("COMPUTER WINS");
    }
    else{
        alert("HUMAN WINS");
    }

}

for(let i = 0; i<5; i++){
    letsPlay();
}
