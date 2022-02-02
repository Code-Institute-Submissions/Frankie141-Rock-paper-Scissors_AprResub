/**
 * Declare constants for DOM Elements 
 * and possible choices
 * Setting scores 
 */  
const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const playGame = () => {
        const rockButton = document.getElementById('#rock');
        const paperButton = document.getElementById('#paper');
        const scissorsButton = document.getElementById('#scissors');
        const computerChoice = [rockButton,paperButton,scissorsButton];
        const playerChoice = ['rock', 'paper', 'scissors'];

/* Function to start game */        
        playerChoice.forEach(choices => 
        choices.addEventListener('click', (e) => {
        choices = e.target.id;
        getResults();

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

},

/* Function to get results */
    function getResults() {
        const result = document.getElementById('#results');
        const playerScore = document.getElementById('#player-score');
        const computerScore = document.getElementById('#computer-score');

    if (computerChoice === playerChoice) {
        result.innerHTML = 'Its a tie';
    }
    else if (computerChoice === 'rock' && playerChoice === "paper") {
        result.innerHTML = 'Player, you are the winner!';
        pScore++;
        playerScore.textContent = pScore;
        
    }

    if (computerChoice === 'rock' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        cScore++;
        computerScore.textContent = cScore;
    }

    if (computerChoice === 'paper' && playerChoice === "scissors") {
        result = 'Computer wins, better luck next time!';
        cScore++;
        computerScore.textContent = cScore;
    }

    if (computerChoice === 'scissors' && playerChoice === "rock") {
        result = 'Player, you are the winner!';
        pScore++;
        playerScore.textContent = pScore;
    }

    if (computerChoice === 'scissors' && playerChoice === "paper") {
        result = 'Computer wins, better luck next time!';
        cScore++;
        computerScore.textContent = cScore;
    }
},
};

