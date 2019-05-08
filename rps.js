
 	
    let myArray = ['Rock', 'Paper', 'Scissors'];

    function computerPlay(myArray) {
        return myArray[Math.floor(Math.random() * myArray.length)];
        
    }

    let playerScore = 0;

    let computerScore = 0;
    
    let score = document.createElement('h1');
    
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', round);
});
        
    function round () {

        let playerSelection = this.id; 

        let computerSelection = computerPlay(myArray);


        if (playerSelection == 'Rock' && computerSelection == 'Paper') {
          let result = document.createElement('p');
          result.textContent = 'You lose! Paper beats Rock!';
          container.appendChild(result);
          computerScore++;
        } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
          let result = document.createElement('p');
          result.textContent = 'You win! Rock beats Scissors!';
          container.appendChild(result);
          playerScore++;
        } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
          let result = document.createElement('p');
          result.textContent = 'You win! Paper beats Rock!';
          container.appendChild(result);
          playerScore++;
        } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
          let result = document.createElement('p');
          result.textContent = 'You lose! Scissors beat Paper!';
          container.appendChild(result);
          computerScore++;
        } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
          let result = document.createElement('p');
          result.textContent = 'You lose! Rock beats Scissors!';
          container.appendChild(result);
          computerScore++;
        } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
          let result = document.createElement('p');
          result.textContent = 'You win! Scissors beat Paper!';
          container.appendChild(result);
          playerScore++;
        } else if (playerSelection == computerSelection) {
          let result = document.createElement('p');
          result.textContent = 'Tie!';
          container.appendChild(result);
        } else {
          let result = 'Error';
          console.log(result);
        }

        
        score.textContent = "Player: " + playerScore + " Computer: " + computerScore;

        container.appendChild(score);

    
        if (playerScore == 5 && computerScore < playerScore) {
            alert ('Fuck Yea! You Win!');
        } else if (computerScore == 5 && computerScore > playerScore) {
            alert ('You lost to the machine, idiot.');
        }

    }
    /*

    function repeat (func, times) {
        round ();
        times && --times && repeat(func, times);
    }

    function game () {
        repeat(round(), 4);
        if (playerScore > computerScore) {
          let result = 'Fuck Yea! You Win!';
          console.log(result);
        } else if (computerScore > playerScore) {
          let result = 'You lost to the machine, idiot.';
          console.log(result);
        } else if (playerScore == computerScore) {
          let result = 'Ah shit, you assholes tied.';
          console.log(result);
        }
    }
    
    console.log(game());

    */
