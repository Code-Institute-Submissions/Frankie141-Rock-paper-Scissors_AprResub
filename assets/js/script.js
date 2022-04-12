/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  
 let computerChoiceDisplay = document.getElementById('computers-choice');
 const playerChoiceDisplay = document.getElementById('players-choice');
 const choiceOptions = document.querySelectorAll('.game-button');
 const winnerDisplay = document.getElementsByClassName('winner');
 const playerScoreDiv = document.getElementById('player-score');
 const computerScoreDiv = document.getElementById('computer-score');
 let scoreDiv = document.getElementById('score-box');
 let playerScore = 0;
 let computerScore = 0;
 let playerChoice;
 let computerChoice;
 let computerChoiceNumber;
 playerScoreDiv.innerHTML = playerScore;
 computerScoreDiv.innerHTML = computerScore;

/* Function to start game */        
    choiceOptions.forEach(choiceOptions => 
        choiceOptions.addEventListener('click', (e) => {
            console.log("click registered");
            playerChoice = e.target.id;
            playerChoiceDisplay.innerHTML = playerChoice;
            console.log(playerChoice);
            console.log(playerChoiceDisplay);
            computerChoice = e.target.id;
            computerChoiceDisplay.innerHTML = computerChoice;
            console.log(computerChoice);
            console.log(computerChoiceDisplay);
            generateComputerChoice();
            computerChoiceDisplay.innerHTML = computerChoiceNumber;
            console.log("computerChoiceDisplay")
            getResults("calling getResults function");
            scoreBoard();
})); 

function generateComputerChoice() {
    console.log("calling generateComputerChoice function");
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
}

/* Function to get results */
 function getResults() {
     console.log("calling getResults function");

    if (computerChoiceDisplay === playerChoiceDisplay){
        winnerDisplay.innerHTML = 'Its a tie';
        }

    else if (computerChoiceDisplay === 'rock')
        if  (playerChoiceDisplay === 'paper'){
        winnerDisplay.innerHTML = 'Player, you are the winner!';
        console.log("computerChoiceDisplay");
        console.log("playerChoiceDisplay");
        console.log("resultDisplay")
        }

    else if (computerChoiceDisplay === 'rock') 
        if  (playerChoiceDisplay === 'scissors'){
        winnerDisplay.innerHTML = 'Computer wins, better luck next time!';
        }

    else if (computerChoiceDisplay === 'paper')
        if  (playerChoiceDisplay == 'scissors'){
        winnerDisplay.innerHTML = 'Computer wins, better luck next time!';
        }

    else if (computerChoiceDisplay === 'scissors')
        if  (playerChoiceDisplay === 'rock'){
        winnerDisplay.innerHTML = 'Player, you are the winner!';
        }   

    else if (computerChoiceDisplay === 'scissors') 
        if  (playerChoiceDisplay === 'paper'){
        winnerDisplay.innerHTML = 'Computer wins, better luck next time!';
        }

 /* Function for Scoreboard */
function scoreBoard() {

}       
 }


