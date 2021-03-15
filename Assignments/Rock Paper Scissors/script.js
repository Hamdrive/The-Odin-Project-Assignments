let playableMoves = ["ROCK", "PAPER", "SCISSORS"];
let userScore = 0;
let computerScore = 0;
let round = 1;

let rockMove = document.querySelector(".rockimg");
let paperMove = document.querySelector(".paperimg");
let scissorsMove = document.querySelector(".scissorsimg");
let compScoreValue = document.querySelector("#compscorevalue");
let userScoreValue = document.querySelector("#userscorevalue");
let roundValue = document.querySelector("#roundnumber");
let finalResult = document.querySelector("#finalresult");
let moveResult = document.querySelector("#moveresult");
let reloadText = document.querySelector("#reloadtext");

let computerMove = () => {
  moveGenerator = Math.floor(Math.random() * 3);
  computerMovePlayed = playableMoves[moveGenerator];
  return computerMovePlayed;
};

let letsPlay = userMove => {
    
    if(round < 11){
        
        let computerPlay = computerMove();
        let userPlay = userMove.toUpperCase();

        if (computerPlay === userPlay) {
          
        } else if (computerPlay === "ROCK") {
          if (userPlay === "PAPER") {
            userScore++;
            userScoreValue.innerHTML = userScore;
            
          }
          if (userPlay === "SCISSORS") {
            computerScore++;
            compScoreValue.innerHTML = computerScore;
            
          }
        } else if (computerPlay === "PAPER") {
          if (userPlay === "SCISSORS") {
            userScore++;
            userScoreValue.innerHTML = userScore;
            
          }
          if (userPlay === "ROCK") {
            computerScore++;
            compScoreValue.innerHTML = computerScore;
            
          }
        } else if (computerPlay === "SCISSORS") {
          if (userPlay === "ROCK") {
            userScore++;
            userScoreValue.innerHTML = userScore;
            
          }
          if (userPlay === "PAPER") {
            computerScore++;
            compScoreValue.innerHTML = computerScore;
            
          }
        }
        moveResult.innerHTML = `Computer played ${computerPlay} while scrawny human played ${userPlay}`;
        round++;
        if (round < 11) {
          roundValue.innerHTML = round;
        }
        else{
           roundValue.innerHTML = "Game Over!" 
        }
    }

    if (round > 10) {
      if (computerScore > userScore) {
        finalResult.innerHTML = "COMPUTER IS VICTORIOUS!";
        reloadText.innerHTML = "Reload page for new game"
      } else if (computerScore < userScore) {
        finalResult.innerHTML = "HUMAN IS VICTORIOUS!";
        reloadText.innerHTML = "Reload page for new game";
      } else {
        finalResult.innerHTML = "NO ONE IS VICTORIOUS!";
        reloadText.innerHTML = "Reload page for new game";
      }
    }
    
}

rockMove.addEventListener("click", (e) => letsPlay(e.target.id));
paperMove.addEventListener("click", (e) => letsPlay(e.target.id));
scissorsMove.addEventListener("click", (e) => letsPlay(e.target.id));


