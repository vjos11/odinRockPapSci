
function computerMove() {
  let RPS = {1 : "Rock", 2 : "Paper", 3 : "Scissors"};
  let move = Math.random();
  if (move <= 0.33) {
    move = 1;
  } else if (move <= 0.66) {
    move = 2;
  } else {
    move = 3;
  }
  return RPS[move];
}

function playerMove() {
  function ifIsInArray(b) {
    if (["ROCK", "PAPER", "SCISSORS"].includes(b.toUpperCase())) {
      return b;
    } else return playerMove();
  }

  let move = prompt("Input your move(rock, paper or scissors)...>");
  return ifIsInArray(move);  
}

function game() {
  let counter = 0, playerWins = 0, computerWins = 0, result = "";
  while (counter < 5) {
    let playOne = playerMove(), playTwo = computerMove();
    console.log(`Player played ${playOne} computer played ${playTwo}`);
    if (playOne.toUpperCase() == "ROCK" && playTwo == "Rock") {
      result = "Draw!";
      counter++;
    } else if (playOne.toUpperCase() == "ROCK" && playTwo == "Paper") {
      result = "Rock lose to paper!";
      counter++;
      computerWins++;
    } else if (playOne.toUpperCase() == "ROCK" && playTwo == "Scissors") {
      result = "Rock beats scissors!";
      counter++;
      playerWins++;
    } else if (playOne.toUpperCase() == "PAPER" && playTwo == "Rock") {
      result = "Paper beats rock!";
      counter++;
      playerWins++;
    } else if (playOne.toUpperCase() == "PAPER" && playTwo == "Paper") {
      result = "Draw!";
      counter++;
    } else if (playOne.toUpperCase() == "PAPER" && playTwo == "Scissors") {
      result = "Paper lose to scissors!";
      counter++;
      computerWins++;
    } else if (playOne.toUpperCase() == "SCISSORS" && playTwo == "Rock") {
      result = "Scissors lose to rock!";
      counter++;
      computerWins++;
    } else if (playOne.toUpperCase() == "SCISSORS" && playTwo == "Paper") {
      result = "Scissors beats paper!";
      counter++;
      playerWins++;
    } else {
      result = "Draw!";
      counter++;
    }
    console.log(result, `\nPlayer ${playerWins} - Computer ${computerWins}`);
  }
  if (playerWins > computerWins) {
    console.log(`Player wins ${playerWins}-${computerWins}`);
  } else if (playerWins < computerWins) {
    console.log(`Computer wins ${computerWins}-${playerWins}`);
  } else {
    console.log(`Draw ${playerWins}-${computerWins}`);
  }
}
game();
