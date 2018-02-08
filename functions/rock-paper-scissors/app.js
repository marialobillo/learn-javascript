const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log("Error!");
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
 }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb'){
    return 'You won!';
  }
  if(userChoice === computerChoice){
    return 'It was a tie.';
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won!';
    }else {
      return 'You won!';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('User Choice: ' + userChoice);
  console.log('Computer Choice: ' + computerChoice);
  let winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
}

playGame();
