/*jshint esversion: 6 */
/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */
let computerChoiceDisplay = document.getElementById('computerChoice');
const playerChoiceDisplay = document.getElementById('playerChoice');
const choiceOptions = document.querySelectorAll('button');
let computerScore = document.getElementById("computer-score");
let playerScore = document.getElementById("player-score");
let pScore = 1;
let cScore = 1;
let playerChoice;
let computerChoice;

/* Function to start game */
choiceOptions.forEach(choiceOptions =>
    choiceOptions.addEventListener('click', (e) => {(
        document.getElementById("clear").addEventListener("click", clear));
        playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML = playerChoice;
        computerChoice = e.target.id;
        computerChoiceDisplay.innerHTML = computerChoice;
        generateComputerChoice();   
    }));

/* Function to generate computers choice*/
function generateComputerChoice() {
    console.log("generateComputerChoice");
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

    getResults("calling getResults function");
    
}

/* Function to get results */
function getResults() {
    console.log("getResults");
    document.getElementById("playerChoice").value = playerChoiceDisplay;
    document.getElementById("computerChoice").value = computerChoiceDisplay;
    console.log(computerChoiceDisplay, playerChoiceDisplay);

    if (computerChoiceDisplay === playerChoiceDisplay) {
        console.log(computerChoiceDisplay, playerChoiceDisplay);
        document.getElementById("winner").innerHTML = 'Its a tie';
    }

    if (computerChoiceDisplay === 'rock') {
        if (playerChoiceDisplay === 'paper') {
            document.getElementById("winner").innerHTML = 'Player, you are the winner!';
            pScore++;
            console.log(pScore);
            updateScore();
        }
    }    
    else if (computerChoiceDisplay === 'scissors') {
            document.getElementById('winner').innerHTML = 'Computer wins, better luck next time!';
            cScore++;
            console.log(cScore);
            updateScore();
    }
    if (computerChoiceDisplay === 'paper') {
        if (playerChoiceDisplay === 'scissors') {
            document.getElementById('winner').innerHTML = 'Player, you are the winner!';
            pScore++;
            console.log(pScore);
            updateScore();
        }
    }     
    else if (computerChoiceDisplay === 'rock') {
            document.getElementById('winner').innerHTML = 'Computer wins, better luck next time!';
            cScore++;
            console.log(cScore);
            updateScore();
    }  
    if (computerChoiceDisplay === 'scissors') {
        if (playerChoiceDisplay === 'rock') {
            document.getElementById('winner').innerHTML = 'Player, you are the winner!';
            pScore++;
            console.log(pScore);
            updateScore();
        }
    }    
    else if (computerChoiceDisplay === 'paper') {
            document.getElementById('winner').innerHTML = 'Computer wins, better luck next time!'; 
            cScore++;
            console.log(cScore);
            updateScore();
        }
    }        

function updateScore() {
    console.log("updateScore");
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
}
    
function clear() {
    document.getElementById('playerChoice').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
    document.getElementById('winner').innerHTML = "";
    document.getElementById('player-score').innerHTML = "0";
    document.getElementById('computer-score').innerHTML = "0";
}