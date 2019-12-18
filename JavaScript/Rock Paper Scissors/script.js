function game() {
  const button = document.querySelectorAll('.button');

  let round = 0;
  let playerScore = 0;
  let compScore = 0;

  button.forEach(choice => {
    choice.addEventListener('click', (e) => {
      console.log(e)
      if (round < 5) {
        document.getElementById("round").textContent = (round + 1);
        round++;
      }

      if (e.target.id == 'rock') {
        playRound(0, computerPlay());
      }
      if (e.target.id == 'paper') {
        playRound(1, computerPlay());
      }
      if (e.target.id == 'scissor') {
        playRound(2, computerPlay());
      }

    });
  });

  function computerPlay() {
    const min = Math.ceil(0);
    const max = Math.floor(2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function playRound(playerSelection, computerSelection) {
    let message;
    let playerWin = false;
    // Rock
    if (playerSelection === 0) {
      if (computerSelection === 0) {
        message = "Both players chose Rock";
      }
      
      if (computerSelection === 1) {
        message = "You Lose, Paper beats Rock";
      }
  
      if (computerSelection === 2) {
        message = "You Win, Rock beats Scissors"
        playerWin = true;
      }
    }
  
    // Paper
    if (playerSelection === 1) {
      if (computerSelection === 0) {
        message = "You Win, Paper beats Rock";
        playerWin = true;
      }
      
      if (computerSelection === 1) {
        message = "Both players chose Paper";
      }
  
      if (computerSelection === 2) {
        message = "You Lose, Scissors beats Paper"
      }
    }
  
    // Scissors
    if (playerSelection === 2) {
      if (computerSelection === 0) {
        message = "You Lose, Rock beats Scissors";
      }
      
      if (computerSelection === 1) {
        message = "You Win, Scissors beats Paper";
        playerWin = true;
      }
  
      if (computerSelection === 2) {
        message = "Both players chose Scissors"
      }
    }
  
    document.getElementById("result").textContent = message;
  
    updateScore(playerWin);
  }

  function updateScore(result) {
    if (result) {
      playerScore++;
    } else {
      compScore++;
    }

    if (playerScore > 2) {
      document.getElementById("winner").textContent = "You Win!"
      disableButtons();
    } 

    if (compScore > 2) {
      document.getElementById("winner").textContent = "You Lose!"
      disableButtons();
    }
  
    document.getElementById("player").textContent = playerScore;
    document.getElementById("comp").textContent = compScore;
  }

  function disableButtons() {
    button.forEach(choice => {
      choice.disabled = true;
    });
  }
}

game();