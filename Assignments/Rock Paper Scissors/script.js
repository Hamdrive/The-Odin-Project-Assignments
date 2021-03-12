playableMoves = ['ROCK', 'PAPER','SCISSORS']
let userScore = 0;
let computerScore = 0;

let computerMove = () => {
    moveGenerator = Math.floor(Math.random() * 3);
    computerMovePlayed = playableMoves[moveGenerator];
    return computerMovePlayed;
}

let letsPlay = () => {
    
    let userPlay = prompt("Enter your move, Human").toUpperCase();
    let computerPlay = computerMove();
    
    
    if(computerPlay === userPlay){
        console.log(computerScore, userScore)
        alert("IT'S A TIE")
    }
    else if (computerPlay === "ROCK") {
        if (userPlay === "PAPER"){
            userScore++;
            console.log(computerScore, userScore);
            alert("HUMAN WINS");
        }
        if (userPlay === "SCISSORS"){
            computerScore++;
            console.log(computerScore, userScore);
            alert("COMPUTER WINS");
        }
    }
    else if (computerPlay === "PAPER") {
        if (userPlay === "SCISSORS"){
            userScore++;
            console.log(computerScore, userScore);
            alert("HUMAN WINS");
        }
        if (userPlay === "ROCK"){
            computerScore++;
            console.log(computerScore, userScore);
            alert("COMPUTER WINS");
        }
    }
    else if (computerPlay === "SCISSORS") {
        if (userPlay === "ROCK"){
            userScore++;
            console.log(computerScore, userScore);
            alert("HUMAN WINS");
        }
        if (userPlay === "PAPER"){
            computerScore++;
            console.log(computerScore, userScore);
            alert("COMPUTER WINS");
        }
    }
    else{
        alert("WRONG MOVE")
    }

}

alert("IT'S TIME HUMAN, FOR THE ULTIMATE BATTLE, THE BATTLE OF WITS, USING THE GREATEST SKILL THERE IS....  ROCK PAPER SCISSORS.")
for(let i = 0; i<5; i++){
    letsPlay();
}

if (computerScore > userScore){
    alert("COMPUTER IS VICTORIOUS!");
}
else if (computerScore < userScore) {
    alert("HUMAN IS VICTORIOUS!");
} 
else {
    alert("NO ONE IS VICTORIOUS!");
}
