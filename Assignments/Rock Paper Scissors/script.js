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

let computerMove = () => {
  moveGenerator = Math.floor(Math.random() * 3);
  computerMovePlayed = playableMoves[moveGenerator];
  return computerMovePlayed;
};

let letsPlay = userMove => {
    
    if(round < 6){
        
        let computerPlay = computerMove();
        let userPlay = userMove.toUpperCase();

        console.log(computerPlay, userPlay);
        if (computerPlay === userPlay) {
          console.log(computerScore, userScore);
          
        } else if (computerPlay === "ROCK") {
          if (userPlay === "PAPER") {
            userScore++;
            userScoreValue.innerHTML = userScore;
            console.log(computerScore, userScore);
            
          }
          if (userPlay === "SCISSORS") {
            computerScore++;
            compScoreValue.innerHTML = computerScore;
            console.log(computerScore, userScore);
            
          }
        } else if (computerPlay === "PAPER") {
          if (userPlay === "SCISSORS") {
            userScore++;
            userScoreValue.innerHTML = userScore;
            console.log(computerScore, userScore);
            
          }
          if (userPlay === "ROCK") {
            computerScore++;
            compScoreValue.innerHTML = computerScore;
            console.log(computerScore, userScore);
            
          }
        } else if (computerPlay === "SCISSORS") {
          if (userPlay === "ROCK") {
            userScore++;
            userScoreValue.innerHTML = userScore;
            console.log(computerScore, userScore);
            
          }
          if (userPlay === "PAPER") {
            computerScore++;
            compScoreValue.innerHTML = computerScore;
            console.log(computerScore, userScore);
            
          }
        }
        moveResult.innerHTML = `Computer played ${computerPlay} while scrawny human played ${userPlay}`;
        round++;
        if (round < 6) {
          roundValue.innerHTML = round;
        }
    }

    if (round > 5) {
      if (computerScore > userScore) {
        finalResult.innerHTML = "COMPUTER IS VICTORIOUS!";
      } else if (computerScore < userScore) {
        finalResult.innerHTML = "HUMAN IS VICTORIOUS!";
      } else {
        finalResult.innerHTML = "NO ONE IS VICTORIOUS!";
      }
    }
    
}

rockMove.addEventListener("click", (e) => letsPlay(e.target.id));
paperMove.addEventListener("click", (e) => letsPlay(e.target.id));
scissorsMove.addEventListener("click", (e) => letsPlay(e.target.id));


