/**
 * Declare constants for DOM Elements 
 * and possible choices
 */  

    let yourMove = document.getElementById('#your-move');
    let computersMove = document.getElementById('#computers-move');
    let result = document.getElementById('.results');
    const choiceOptions = document.querySelectorAll('button');
    let computersChoice;
    let playerChoice;

/**
 * Add event listener to all buttons
 */

choiceOptions.forEach(choiceOptions => 
    choiceOptions.addEventListener('click', (e) => {
        playerChoice = e.target.Id;
        console.log(playerChoice);
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

    let pScore = 0;
    let cScore = 0;

const updateScoreResults = () => {

    let playerScore = document.querySelector('.player-score p');
    let computerScore = document.querySelector('.computer-score p');
    playerScore = pScore;
    computerScore = cScore;
    yourMove = playerChoice;
    computersMove = computersChoice;
};

    if (computersChoice === playerChoice) {
        result = 'Its a tie';
    }

    if (computersChoice === 'rock' && playerChoice === "paper") {
        result = 'Player, you are the winner!';
        ++pScore;
        updateScoreResults();
        return;
    }

    if (computersChoice === 'rock' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        ++cScore;
        updateScoreResults();
        return;
    }

    if (computersChoice === 'paper' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        ++cScore;
        updateScoreResults();
        return;
    }

    if (computersChoice === 'scissors' && playerChoice === "rock") {
        result = 'Player, you are the winner!';
        ++pScore;
        updateScoreResults();
        return;
    }

    if (computersChoice === 'scissors' && playerChoice === "paper") {
        result = 'Computer wins, better luck next time!';
        ++cScore;
        updateScoreResults();
        return;
    }
}


