let playableMoves = ["ROCK", "PAPER", "SCISSORS"];
let userScore = 0;
let computerScore = 0;
let round = 1;

let rockmove = document.querySelector(".rockimg");
let papermove = document.querySelector(".paperimg");
let scissorsmove = document.querySelector(".scissorsimg");

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
            console.log(computerScore, userScore);
            
          }
          if (userPlay === "SCISSORS") {
            computerScore++;
            console.log(computerScore, userScore);
            
          }
        } else if (computerPlay === "PAPER") {
          if (userPlay === "SCISSORS") {
            userScore++;
            console.log(computerScore, userScore);
            
          }
          if (userPlay === "ROCK") {
            computerScore++;
            console.log(computerScore, userScore);
            
          }
        } else if (computerPlay === "SCISSORS") {
          if (userPlay === "ROCK") {
            userScore++;
            console.log(computerScore, userScore);
            
          }
          if (userPlay === "PAPER") {
            computerScore++;
            console.log(computerScore, userScore);
            
          }
        }

        round++;
    }

    if (round > 5) {
      if (computerScore > userScore) {
        alert("COMPUTER IS VICTORIOUS!");
      } else if (computerScore < userScore) {
        alert("HUMAN IS VICTORIOUS!");
      } else {
        alert("NO ONE IS VICTORIOUS!");
      }
    }
    
}

rockmove.addEventListener("click", (e) => letsPlay(e.target.id));
papermove.addEventListener("click", (e) => letsPlay(e.target.id));
scissorsmove.addEventListener("click", (e) => letsPlay(e.target.id));


