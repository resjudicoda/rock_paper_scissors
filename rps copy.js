
 	
    let myArray = ['Rock', 'Paper', 'Scissors'];

    function computerPlay(myArray) {
        return myArray[Math.floor(Math.random() * myArray.length)];
        
    }

    let playerScore = 0;

    let computerScore = 0;

    
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', round);
});
        
    function round () {

        let playerSelection = this.id; 

        let computerSelection = computerPlay(myArray);


        if (playerSelection == 'Rock' && computerSelection == 'Paper') {
          let result = 'You lose! Paper beats Rock!';
          console.log(result);
          computerScore++;
        } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
          let result = 'You win! Rock beats Scissors!';
          console.log(result);
          playerScore++;
        } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
          let result = 'You win! Paper beats Rock!';
          console.log(result);
          playerScore++;
        } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
          let result = 'You lose! Scissors beat Paper!';
          console.log(result);
          computerScore++;
        } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
          let result = 'You lose! Rock beats Scissors!';
          console.log(result);
          computerScore++;
        } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
          let result = 'You win! Scissors beat Paper!';
          console.log(result);
          playerScore++;
        } else if (playerSelection == computerSelection) {
          let result = 'Tie!';
          console.log(result);
        } else {
          let result = 'Error';
          console.log(result);
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
