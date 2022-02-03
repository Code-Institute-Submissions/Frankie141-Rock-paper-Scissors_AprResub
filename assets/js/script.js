/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  
 let computerChoiceDisplay = document.getElementById('computer-score');
 const playerChoiceDisplay = document.getElementById('player-score');
 const choiceOptions = document.querySelectorAll('.game-button');
 let scoreDiv = document.getElementById('score-box');
 let playerScore = 0;
 const playerScoreDiv = document.getElementById('player-score');
 let computerScore = 0;
 const computerScoreDiv = document.getElementById('computer-score');
 let playerChoice;
 let computerChoiceNumber;
 playerScoreDiv.innerHTML = playerScore;
 computerScoreDiv.innerHTML = computerScore;

/* Function to start game */        
    choiceOptions.forEach(choiceOptions => 
        choiceOptions.addEventListener('click', (e) => {
            playerChoice = e.target.id;
            playerChoiceDisplay.innerHTML = playerChoice;
            generateComputerChoice();
            getResults();
})); 

function generateComputerChoice() {
    const randomChoiceNumber = Math.floor(Math.random() * choiceOptions.length);

    if (randomChoiceNumber === 1) {
        computerChoiceDisplay = 'rock';
        }

    if (randomChoiceNumber === 2) {
        computerChoiceDisplay = 'scissors';
        }

    if (randomChoiceNumber === 3) {
        computerChoiceDisplay = 'paper';
        } 
        computerChoiceNumber.innerHTML = computerChoiceDisplay;   
}

/* Function to get results */
 function getResults() {
    const resultDisplay = document.getElementsByClassName('results');

    if (computerChoiceDisplay === playerChoiceDisplay){
        resultDisplay.innerHTML = 'Its a tie';
        }

    else if (computerChoiceDisplay === 'rock')
        if  (playerChoiceDisplay === 'paper'){
        resultDisplay.innerHTML = 'Player, you are the winner!';
        }

    else if (computerChoiceDisplay === 'rock') 
        if  (playerChoiceDisplay === 'scissors'){
        resultDisplay.innerHTML = 'Computer wins, better luck next time!';
        }

    else if (computerChoiceDisplay === 'paper')
        if  (playerChoiceDisplay == 'scissors'){
        resultDisplay.innerHTML = 'Computer wins, better luck next time!';
        }

    else if (computerChoiceDisplay === 'scissors')
        if  (playerChoiceDisplay === 'rock'){
        resultDisplay.innerHTML = 'Player, you are the winner!';
        }   

    else if (computerChoiceDisplay === 'scissors') 
        if  (playerChoiceDisplay === 'paper'){
        resultDisplay.innerHTML = 'Computer wins, better luck next time!';
        }
 }


