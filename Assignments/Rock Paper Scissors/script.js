playableMoves = ['ROCK', 'PAPER','SCISSORS']

computerPlays = () => {
    moveGenerator = Math.floor(Math.random() * 3);
    movePlayed = playableMoves[moveGenerator];
    return movePlayed;
}
