let RPS = {1 : "Rock", 2 : "Paper", 3 : "Scissors"};

function computerMove(a) {
  let move = Math.random();
  if (move <= 0.33) {
    move = 1;
  } else if (move <= 0.66) {
    move = 2;
  } else {
    move = 3;
  }
  return ropasc[move];
}

function playerMove(a) {
  function ifIsInArray(b) {
    if (["ROCK", "PAPER", "SCISSORS"].includes(b.toUpperCase())) {
      return b;
    } else return playerMove(a);
  }

  let move = prompt("Input your move(rock, paper or scissors)...>");
  return ifIsInArray(move);  
}
console.log(playerMove(RPS));
