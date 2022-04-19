/*jshint esversion: 6 */
/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */
let computerChoiceDisplay = document.getElementById('computerChoice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const choiceOptions = document.querySelectorAll('button');
var computerScore = document.getElementById("computer-Score");
var playerScore = document.getElementById("player-Score");
let playerChoice;
let computerChoice;

/* Function to start game */
choiceOptions.forEach(choiceOptions =>
    choiceOptions.addEventListener('click', (e) => {
        document.getElementById("clear").addEventListener("click", clear);
        playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML = playerChoice;
        computerChoice = e.target.id;
        computerChoiceDisplay.innerHTML = computerChoice;
        generateComputerChoice();
        getResults("calling getResults function");
    }));

/* Function to generate computers choice*/
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

    computerChoiceDisplay.innerHTML = computerChoice;
};

/* Function to get results */
function getResults() {
    document.getElementById("playerChoice").value = playerChoiceDisplay;
    document.getElementById("computerChoice").value = computerChoiceDisplay;

    if (computerChoiceDisplay === playerChoiceDisplay) {
        document.getElementsByClassName("winner").innerHTML = 'Its a tie';
    }

    if (computerChoiceDisplay === 'rock')
        if (playerChoiceDisplay === 'paper') {
            document.getElementsByClassName("winner").innerHTML = 'Player, you are the winner!';
            playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
        }
    else {
        if (computerChoiceDisplay === 'scissors') {
            document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
            computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
        }
    }
}    
    if (computerChoiceDisplay === 'paper')
        if (playerChoiceDisplay === 'scissors') {
            document.getElementsByClassName('winner').innerHTML = 'Player, you are the winner!';
            playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
        }
    else {
        if (computerChoiceDisplay === 'rock')
            document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!';
            computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
        }    
    if (computerChoiceDisplay === 'scissors')
        if (playerChoiceDisplay === 'rock') {
            document.getElementsByClassName('winner').innerHTML = 'Player, you are the winner!';
            playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
    }
    else {
        if (computerChoiceDisplay === 'paper')
            document.getElementsByClassName('winner').innerHTML = 'Computer wins, better luck next time!'; 
            computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
        };

function clear() {
    document.getElementById('playerChoice').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
    document.getElementById('winner').innerHTML = "";
    document.getElementById('player-score').innerHTML = "0";
    document.getElementById('computer-score').innerHTML = "0";
};