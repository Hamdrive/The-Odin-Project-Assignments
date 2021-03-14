let playableMoves = ["ROCK", "PAPER", "SCISSORS"];
let userScore = 0;
let computerScore = 0;
let round = 1;

let img = document.querySelectorAll("img")
let rockmove = document.querySelector(".rockimg");
let papermove = document.querySelector(".paperimg");
let scissorsmove = document.querySelector(".scissorsimg");

let computerMove = () => {
  moveGenerator = Math.floor(Math.random() * 3);
  computerMovePlayed = playableMoves[moveGenerator];
  return computerMovePlayed;
};

let letsPlay = () => {
    let computerPlay = computerMove();
    let userPlay = userMove.toUpperCase();
    console.log(computerPlay, userPlay);
}

let click = () => {
    img.forEach((img) =>
      img.addEventListener("click", (e) => letsPlay(e.target.id))
    );
}

rockmove.addEventListener("click", (e) => letsPlay(e.target.id), false);
papermove.addEventListener("click", (e) => letsPlay(e.target.id));
scissorsmove.addEventListener("click", (e) => letsPlay(e.target.id));
