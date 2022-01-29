const yourMove = document.getElementById('your-move')
const computersMove = doument.getElementById('computers-move')
const results = doument.getElementById('results')
const choiceOptions = document.querySelectorAll('button')
let playerChoice

choiceOptions.forEach(choiceOptions => choiceOptions.addEventListener("click", (e) =>  {
    playerChoice = e.target.id 
    yourMove.innerHTML = playerChoice
    generateComputerChoice()
}))


