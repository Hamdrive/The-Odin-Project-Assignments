playableMoves = ['ROCK', 'PAPER','SCISSORS']

let computerMove = () => {
    moveGenerator = Math.floor(Math.random() * 3);
    computerMovePlayed = playableMoves[moveGenerator];
    return computerMovePlayed;
}

let letsPlay = () => {
    let userScore = 0;
    let computerScore = 0;
    let userPlay = prompt("Enter your move, Human").toUpperCase();
    let computerPlay = computerMove();
    
    
    if(computerPlay === userPlay){
        console.log(computerMoveIndex, userMoveIndex)
        alert("IT'S A TIE")
    }
    else if (computerPlay === "ROCK") {
        if (userPlay === "PAPER"){
            userScore++;
            console.log(computerScore, userScore);
            alert("HUMAN WINS");
        }
        if (userPlay === "SCISSORS"){
            console.log(computerMoveIndex, userMoveIndex);
            alert("COMPUTER WINS");
        }
    }
    else if (computerPlay === "PAPER") {
        if (userPlay === "SCISSORS"){
            console.log(computerMoveIndex, userMoveIndex);
            alert("HUMAN WINS");
        }
        if (userPlay === "ROCK"){
            console.log(computerMoveIndex, userMoveIndex);
            alert("COMPUTER WINS");
        }
    }
    else if (computerPlay === "SCISSORS") {
        if (userPlay === "ROCK"){
            console.log(computerMoveIndex, userMoveIndex);
            alert("HUMAN WINS");
        }
        if (userPlay === "PAPER"){
            console.log(computerMoveIndex, userMoveIndex);
            alert("COMPUTER WINS");
        }
    }
    else{
        alert("WRONG MOVE")
    }

}

for(let i = 0; i<5; i++){
    letsPlay();
}
