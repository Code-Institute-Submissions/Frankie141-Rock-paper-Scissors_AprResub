/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  
const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const playGame = () => {
        let computerChoice = [rockButton,paperButton,scissorsButton]
        let playerChoice = ['rock', 'paper', 'scissors'];
        const rockButton = document.getElementById('#rock');
        const paperButton = document.getElementById('#paper');
        const scissorsButton = document.getElementById('#scissors');

        playerChoice.forEach(choices => 
        choices.addEventListener('click', (e) => {
        choices = e.target.id;

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

    if (computerChoice === playerChoice) {
        result = 'Its a tie';
    }

    if (computerChoice === 'rock' && playerChoice === "paper") {
        result = 'Player, you are the winner!';
        ++pScore;
        updateScoreResults();
        return;
    }

    if (computerChoice === 'rock' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        ++cScore;
        updateScoreResults();
        return;
    }

    if (computerChoice === 'paper' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        ++cScore;
        updateScoreResults();
        return;
    }

    if (computerChoice === 'scissors' && playerChoice === "rock") {
        result = 'Player, you are the winner!';
        ++pScore;
        updateScoreResults();
        return;
    }

    if (computerChoice === 'scissors' && playerChoice === "paper") {
        result = 'Computer wins, better luck next time!';
        ++cScore;
        updateScoreResults();
        return;
    }
});
});
}


