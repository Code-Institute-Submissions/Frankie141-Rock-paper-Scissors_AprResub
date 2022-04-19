/*jshint esversion: 6 */
/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */
let computerChoiceDisplay = document.getElementById('computerChoice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const choiceOptions = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let pScore = 0;
let cScore = 0;


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
}

/* Function to update Score board */
const updateScore = () =>{
    const playerScore = document.querySelector('#player-score p');
    const computerScore = document.querySelector('#computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};

/* Function to get results */
function getResults() {
    document.getElementById("playerChoice").value = playerChoiceDisplay;
    document.getElementById("computerChoice").value = computerChoiceDisplay;

    if (computerChoiceDisplay === playerChoiceDisplay) {
        document.getElementsByClassName("winner").value = 'Its a tie';
    }

    if (computerChoiceDisplay === 'rock')
        if (playerChoiceDisplay === 'paper') {
            document.getElementsByClassName("winner").value = 'Player, you are the winner!';
            pScore++;
            updateScore();
        }
    else {
        if (computerChoiceDisplay === 'scissors') {
            document.getElementsByClassName('winner').value = 'Computer wins, better luck next time!';
            cScore++;
            updateScore();
        }
    }

    if (computerChoiceDisplay === 'paper')
        if (playerChoiceDisplay === 'scissors') {
            document.getElementsByClassName('winner').value = 'Player, you are the winner!';
            pScore++;
            updateScore();
        }
    else {
        if (computerChoiceDisplay === 'rock')
            document.getElementsByClassName('winner').value = 'Computer wins, better luck next time!';
            cScore++;
            updateScore();
    }
}

if (computerChoiceDisplay === 'scissors')
    if (playerChoiceDisplay === 'rock') {
        document.getElementsByClassName('winner').value = 'Player, you are the winner!';
            pScore++;
            updateScore();
    }
else {
    if (computerChoiceDisplay === 'paper')
        document.getElementsByClassName('winner').value = 'Computer wins, better luck next time!';
            cScore++;
            updateScore();
}

function clear() {
    document.getElementById('playerChoice').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
    document.getElementsByClassName('winner').innerHTML = "";
    document.getElementById('player-score').innerHTML = "0";
    document.getElementById('computer-score').innerHTML = "0";
}