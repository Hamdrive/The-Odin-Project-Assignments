let playableMoves = ["ROCK", "PAPER", "SCISSORS"];

let rockmove = document.querySelector(".rockimg");
let papermove = document.querySelector(".paperimg");
let scissorsmove = document.querySelector(".scissorsimg");

let computerMove = () => {
  moveGenerator = Math.floor(Math.random() * 3);
  computerMovePlayed = playableMoves[moveGenerator];
  return computerMovePlayed;
};
