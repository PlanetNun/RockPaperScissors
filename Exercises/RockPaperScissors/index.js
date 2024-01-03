let countTies = 0;
let userLossesCount = 0;
let userWinsCount = 0;

let computerGiven;
const computersRandomChoice = function () {
  let turnComputer = Math.floor(Math.random() * 3);
  switch (turnComputer) {
    case 0:
      computerGiven = 'rock';
      return computerGiven;
    case 1:
      computerGiven = 'scissors';
      return computerGiven;
    case 2:
      computerGiven = 'paper';
      return computerGiven;
  }
}

let turnUser = -1;

const userChoiceIsRock = function () {
  turnUser = 'rock';
}

const userChoiceIsPaper = function () {
  turnUser = 'paper';
}

const userChoiceIsScissors = function () {
  turnUser = 'scissors';
}
const showGameResult = function () {
  if (turnUser === -1) {
    alert('please click one of the three images');
  }
  else {
    if (computerGiven === 'rock' && turnUser === 'scissors') {
      document.getElementById("result-display-panel").innerHTML = "<h3>Computer Wins!</h3>";
      userLossesCount++;
      document.getElementById("userLossesCount").innerHTML = userLossesCount;
      console.log('Computer wins!');
    } else if (computerGiven === 'scissors' && turnUser === 'paper') {
      document.getElementById("result-display-panel").innerHTML = "<h3>Computer Wins!</h3>";
      console.log('Computer wins!');
      userLossesCount++;
      document.getElementById("userLossesCount").innerHTML = userLossesCount;
    } else if (computerGiven === 'paper' && turnUser === 'rock') {
      document.getElementById("result-display-panel").innerHTML = "<h3>Computer Wins!</h3>";
      console.log('Computer wins!');
      userLossesCount++;
      document.getElementById("userLossesCount").innerHTML = userLossesCount;
    } else if (computerGiven === turnUser) {
      document.getElementById("result-display-panel").innerHTML = "<h3>Draw</h3>";
      console.log('Draw');
      countTies++;
      document.getElementById("countTies").innerHTML = countTies;
    } else {
      document.getElementById("result-display-panel").innerHTML = "<h3>User Wins!</h3>"
      console.log('User wins!');
      userWinsCount++;
      document.getElementById("userWinsCount").innerHTML = userWinsCount;
    }
  }
}

const resetGame = function () {
  computerGiven = -1;
  turnUser = -1;
  console.clear();
  userWinsCount = 0;
  userLossesCount = 0;
  countTies = 0;
  document.getElementById("result-display-panel").innerHTML = "";
  document.getElementById("userWinsCount").innerHTML = userWinsCount;
  document.getElementById("userLossesCount").innerHTML = userLossesCount;
  document.getElementById("countTies").innerHTML = countTies;
}