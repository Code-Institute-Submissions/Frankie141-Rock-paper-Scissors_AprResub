/**
 * Declare constants for DOM Elements 
 * and possible choices
 */  

    let yourMove = document.getElementById('your-move');
    let computersMove = document.getElementById('computers-move');
    const choiceOptions = document.querySelectorAll('button');
    const result = document.getElementsByClassName('.results');
    let computersChoice;
    let playerChoice;

/**
 * Add event listener to all buttons
 */

choiceOptions.forEach(choiceOptions => 
    choiceOptions.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        generateComputersChoice();
        getResult(this.textContent, computersChoice, playerChoice);
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
function getResult(playerChoice, computersChoice) {

    let pScore = 0;
    let cScore = 0;

const updateScoreResults = () => {

    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};

    if (computersChoice === playerChoice) {
        result.textContent = 'Its a tie';
    }

    if (computersChoice === 'rock' && playerChoice === "paper") {
        result.textContent = 'Player, you are the winner!';
        pScore++;
        updateScoreResults();
        return;
    }

    else if (computersChoice === 'paper' && playerChoice === "paper") {
        result.textContent = 'Its a tie';
    }

    if (computersChoice === 'rock' && playerChoice === "scissors") {
        result.textContent = 'Computer wins, better luck next time!';
        cScore++;
        updateScoreResults();
        return;
    }

    else if (computersChoice === 'scissors' && playerChoice === "scissors") {
        result.textContent = 'Its a tie';
    }

    if (computersChoice === 'paper' && playerChoice === "scissors") {
        result.textContent = 'Computer wins, better luck next time!';
        cScore++;
        updateScoreResults();
        return;
    }

    else if (computersChoice === 'rock' && playerChoice === "rock") {
        result.textContent = 'Its a tie';
    }

    if (computersChoice === 'scissors' && playerChoice === "rock") {
        result.textContent = 'Player, you are the winner!';
        pScore++;
        updateScoreResults();
        return;
    }

    if (computersChoice === 'scissors' && playerChoice === "paper") {
        result.textContent = 'Computer wins, better luck next time!';
        cScore++;
        updateScoreResults();
        return;
    }

    yourMove = playerChoice;
    computersMove = computersChoice;
}


