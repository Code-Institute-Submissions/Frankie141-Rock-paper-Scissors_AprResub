/*jshint esversion: 6 */
/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  
let computerChoiceDisplay = document.getElementById('computerChoice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const choiceOptions = document.querySelectorAll('.game-button');
const playerScore = document.getElementsByClassName('player-score');
const computerScore = document.getElementsByClassName('computer-score');
let playerChoice;
let computerChoice;
let computerChoiceNumber;
let pScore = 0;
let cScore = 0;


/* Function to start game */        
    choiceOptions.forEach(choiceOptions => 
        choiceOptions.addEventListener('click', (e) => {
        document.getElementById("clear").addEventListener("click", clear);        
        console.log("click registered");
        playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML= playerChoice;
        computerChoice = e.target.id;
        computerChoiceDisplay.innerHTML = computerChoice;
        generateComputerChoice();
        computerChoiceDisplay.innerHTML = computerChoiceNumber;
        getResults("calling getResults function");
        updateScore();
        if (getResults()) {
            pScore = cScore = 0;
            updateScore();
        }
})); 

/* Function to generate computers choice*/
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
        
    return computerChoice;    
}

/* Function to get results */
 function getResults() {
     console.log("calling getResults function");

     document.getElementById("playerChoice").value = playerChoiceDisplay;
     document.getElementById("computerChoice").value = computerChoiceDisplay;

        if (computerChoiceDisplay === playerChoiceDisplay){
            document.getElementsByClassName("winner").innerHTML = 'Its a tie';
        }

        if (computerChoiceDisplay === 'rock')
            if  (playerChoiceDisplay === 'paper'){
                document.getElementsByClassName("winner").innerHTML = 'Player, you are the winner!';
                pScore++; 
            }
            else {
            if (computerChoiceDisplay === 'scissors') {
                document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
                cScore++;
                }    
            }

        if (computerChoiceDisplay === 'paper') 
            if  (playerChoiceDisplay === 'scissors'){
                document.getElementsByClassName('winner').innerHTML = 'Player, you are the winner!';
                pScore++; 
            } 
            else {
            if (computerChoiceDisplay === 'rock')
                document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
                cScore++;
                }
            }

        if (computerChoiceDisplay === 'scissors')
            if  (playerChoiceDisplay === 'rock'){
                document.getElementsByClassName('winner').innerHTML = 'Player, you are the winner!';
                pScore++; 
            }   
            else {
            if (computerChoiceDisplay === 'paper')
                document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
                cScore++; 
            }

/* Function to update Score board */
function updateScore() {
        document.getElementById("player-score").value = pScore;
        document.getElementById("computer-score").value = cScore;
}
