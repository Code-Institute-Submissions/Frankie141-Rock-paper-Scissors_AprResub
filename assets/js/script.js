/**
 * Declare constants for DOM Elements 
 * and possible choices
 */

let yourMove = document.getElementById('your-move');
let computersMove = document.getElementById('computers-move');
const results = document.getElementById('results');
const choiceOptions = document.querySelectorAll('button');
let playerChoice;
let computersChoice;
let result;

/**
 * Add event listener to all buttons
 */

choiceOptions.forEach(choiceOptions => 
    choiceOptions.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        results.innerHTML = result;
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
}

/**
 * Game function for Results
 * Checks who the winner is
 */

function getResult() {

    if (computersChoice === playerChoice) {
        result = 'Its a draw';
    }

    if (computersChoice === 'rock' && playerChoice === "paper") {
        result = 'Player, you are the winner!';
        let playerScore = parseInt(document.getElementsByClassName("player-score").innerText);
        document.getElementsByClassName("player-score").innerText = ++playerScore;
    }

    else if (computersChoice === 'paper' && playerChoice === "paper") {
        result = 'Its a draw';
    }

    if (computersChoice === 'rock' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        let computerScore = parseInt(document.getElementsByClassName("computer-score").innerText);
        document.getElementsByClassName("computer-score").innerText = ++computerScore;
    }

    else if (computersChoice === 'scissors' && playerChoice === "scissors") {
        result = 'Its a draw';
    }

    if (computersChoice === 'paper' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        let computerScore = parseInt(document.getElementsByClassName("computer-score").innerText);
        document.getElementsByClassName("computer-score").innerText = ++computerScore;
    }

    else if (computersChoice === 'rock' && playerChoice === "rock") {
        result = 'Its a draw';
    }

    if (computersChoice === 'scissors' && playerChoice === "rock") {
        result = 'Player, you are the winner!';
        let playerScore = parseInt(document.getElementsByClassName("player-score").innerText);
        document.getElementsByClassName("player-score").innerText = ++playerScore;
    }

    if (computersChoice === 'scissors' && playerChoice === "paper") {
        result = 'Computer wins, better luck next time!';
        let computerScore = parseInt(document.getElementsByClassName("computer-score").innerText);
        document.getElementsByClassName("computer-score").innerText = ++computerScore;
    }

    yourMove = playerChoice;
    computersMove = computersChoice;
}


