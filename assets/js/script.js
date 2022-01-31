/**
 * Declare constants for DOM Elements 
 * and possible choices
 */

const yourMove = document.getElementById('your-move');
const computersMove = document.getElementById('computers-move');
const results = document.getElementById('results');
const choiceOptions = document.querySelectorAll('button');
let playerChoice;
let computersChoice;
let result;

/**
 * Add event listener to all buttons
 */

choiceOptions.forEach(choiceOptions => choiceOptions.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    yourMove = playerChoice;
    generateComputersChoice();
    getResult();
}));

/**
 * Game function for computer generated choice 
 * Accepts one parameter, which is the data-choice value
 * of the selected button
 */

function generateComputersChoice() {
    const randomChoiceNumber = Math.floor(Math.random() * choiceOptions.length);
    
    if (randomChoiceNumber === 1) {
        computersChoice = 'rock';
    }

    if (randomChoiceNumber === 2) {
        computersChoice = 'scissors';
    }

    if (randomChoiceNumber === 3) {
        computersChoice = 'paper';
    }

    computersMove = computersChoice;
}

/**
 * Game function for Results
 * Checks who the winner is
 */

function getResult() {
    let playerScore = 0;
    let computerScore = 0;
    const computerScoreBoard = document.querySelector('computers-move');
    const playerScoreBoard = document.querySelector('your-move');

    if (computersChoice === playerChoice) {
        result.textContent = 'Its a draw';
    }

    if (computersChoice === 'rock' && playerChoice === "paper") {
        result = 'Player, you are the winner!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }

    else if (computersChoice === 'paper' && playerChoice === "paper") {
        result.textContent = 'Its a draw';
    }

    if (computersChoice === 'rock' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }

    else if (computersChoice === 'scissors' && playerChoice === "scissors") {
        result.textContent = 'Its a draw';
    }

    if (computersChoice === 'paper' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }

    else if (computersChoice === 'rock' && playerChoice === "rock") {
        result.textContent = 'Its a draw';
    }

    if (computersChoice === 'scissors' && playerChoice === "rock") {
        result = 'Player, you are the winner!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }

    if (computersChoice === 'scissors' && playerChoice === "paper") {
        result = 'Computer wins, better luck next time!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }

    results.innerHTML = result;
}


