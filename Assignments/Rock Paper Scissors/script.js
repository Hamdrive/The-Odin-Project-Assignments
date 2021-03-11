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
        console.log(computerMoveIndex, userMoveIndex)
        alert("IT'S A TIE")
    }
    else if (computerMoveIndex > userMoveIndex){
        console.log(computerMoveIndex, userMoveIndex);
        alert("COMPUTER WINS");
    }
    else if (computerMoveIndex < userMoveIndex){
        console.log(computerMoveIndex, userMoveIndex);
        alert("HUMAN WINS");
    }
    else{
        alert("WRONG INPUT HUMAN")
    }

}

for(let i = 0; i<1; i++){
    letsPlay();
}
