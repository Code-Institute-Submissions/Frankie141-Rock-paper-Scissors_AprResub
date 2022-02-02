/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  

 const rockButton = document.getElementById('rock');
 const paperButton = document.getElementById('paper');
 const scissorsButton = document.getElementById('scissors');
 let computerChoiceDisplay = [rockButton,paperButton,scissorsButton];
 let playerChoiceDisplay = ['rock', 'paper', 'scissors'];
 let choiceOptions = document.querySelectorAll('button');
 let playerChoice

/* Function to start game */        
    choiceOptions.forEach(choiceOptions => 
        choiceOptions.addEventListener('click', (e) => {
            playerChoice = e.target.id;
            playerChoiceDisplay.innerHTML = playerChoice
            generateComputerChoice();
            getResults();
}));    

function generateComputerChoice() {

 const randomChoiceNumber = Math.floor(Math.random() * choiceOptions.length);
 
 if (randomChoiceNumber === 1) {
     computerChoice = 'rock';
 }

 if (randomChoiceNumber === 2) {
     computerChoice = 'scissors';
 }

 if (randomChoiceNumber === 3) {
     computerChoice = 'paper';
 }

}

/* Function to get results */
 function getResults() {
    let pScore = 0;
    let cScore = 0;
    let result = document.getElementById('results');
    let playerScore = document.getElementById('player-score');
    let computerScore = document.getElementById('computer-score');

    if (computerChoiceDisplay === playerChoiceDisplay) {
        result = 'Its a tie';
        }

    if (computerChoiceDisplay === 'rock' && playerChoiceDisplay === "paper") {
        result = 'Player, you are the winner!';
        pScore++;
        playerScore = pScore;
        }

    if (computerChoiceDisplay === 'rock' && playerChoiceDisplay === "scissors") {
        result = 'Computer wins, better luck next time!';
        cScore++;
        computerScore = cScore;
        }

    if (computerChoiceDisplay === 'paper' && playerChoiceDisplay === "scissors") {
        result = 'Computer wins, better luck next time!';
        cScore++;
        computerScore = cScore;
        }

    if (computerChoiceDisplay === 'scissors' && playerChoiceDisplay === "rock") {
        result = 'Player, you are the winner!';
        pScore++;
        playerScore = pScore;
        }   

    if (computerChoiceDisplay === 'scissors' && playerChoiceDisplay === "paper") {
        result = 'Computer wins, better luck next time!';
        cScore++;
        computerScore = cScore;
        }
 };


