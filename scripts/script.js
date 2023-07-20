let rockPS = {1 : "Rock", 2 : "Paper", 3 : "Scissors"};
let computerMove;
// computer move
let move = Math.random();
if (move <= 1 / 3) {
  computerMove = rockPS[1];
} else if ( move <= 2 / 3) {
    computerMove = rockPS[2];
} else {
    computerMove = rockPS[3];
}
console.log(Math.random());
console.log(computerMove);
