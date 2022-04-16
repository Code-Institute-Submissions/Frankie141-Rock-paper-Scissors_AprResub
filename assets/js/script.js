/*jshint esversion: 6 */
/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  
let computerChoiceDisplay = document.getElementById('computers-choice');
const playerChoiceDisplay = document.getElementById('players-choice');
const choiceOptions = document.querySelectorAll('.game-button');
const playerScore = document.getElementsByClassName('player-score');
const computerScore = document.getElementsByClassName('computer-score');
let playerChoice;
let computerChoice;
let computerChoiceNumber;


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

/* Function to get results and update score board */
 function getResults() {
     console.log("calling getResults function");

     document.getElementById("playerChoice").innerHTML = playerChoiceDisplay;
     document.getElementById("computerChoice").innerHTML = computerChoiceDisplay;

        if (computerChoiceDisplay === playerChoiceDisplay){
            document.getElementsByClassName("winner").innerHTML = 'Its a tie';
        }

        if (computerChoiceDisplay === 'rock')
            if  (playerChoiceDisplay === 'paper'){
                document.getElementsByClassName("winner").innerHTML = 'Player, you are the winner!';
                playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;   
            }
            else {
            if (computerChoiceDisplay === 'scissors') {
                document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
                computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
                }    
            }

        if (computerChoiceDisplay === 'paper') 
            if  (playerChoiceDisplay === 'scissors'){
                document.getElementsByClassName('winner').innerHTML = 'Player, you are the winner!';
                playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
            } 
            else {
            if (computerChoiceDisplay === 'rock')
                document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
                computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
                }
            }

        if (computerChoiceDisplay === 'scissors')
            if  (playerChoiceDisplay === 'rock'){
                document.getElementsByClassName('winner').innerHTML = 'Player, you are the winner!';
                playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;   
            }   
            else {
            if (computerChoiceDisplay === 'paper')
                document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
                computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;    
            }


