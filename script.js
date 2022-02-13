function computerPlay() {
    let gameOptions = ['Rock', 'Paper', 'Scissors'];
    let getSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return getSelection;
    };

// play a single round 
function playRound(event, computerSelection) {
    computerSelection = computerPlay();
    let playerSelection = event.target.id;
    if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
       const roundResult = document.querySelector('#roundResult');
       roundResult.textContent = 'You have won!';
       container.appendChild(roundResult);
       const yourChoice = document.querySelector('#yourChoice');
       yourChoice.textContent = 'You picked: ' + playerSelection +'.'; 
       container.appendChild(yourChoice);
       const computerChoice = document.querySelector('#computerChoice');
       computerChoice.textContent = 'Computer picked: ' + computerSelection +'.'; 
       container.appendChild(computerChoice);
    }
    else if ((playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Paper')) {
        const roundResult = document.querySelector('#roundResult');
        roundResult.textContent = 'You have lost!';
        container.appendChild(roundResult);
        const yourChoice = document.querySelector('#yourChoice');
        yourChoice.textContent = 'You picked: ' + playerSelection +'.'; 
        container.appendChild(yourChoice);
        const computerChoice = document.querySelector('#computerChoice');
        computerChoice.textContent = 'Computer picked: ' + computerSelection +'.'; 
        container.appendChild(computerChoice);
    }
    else if (playerSelection == computerSelection) {
        const roundResult = document.querySelector('#roundResult');
        roundResult.textContent = 'You have tied!';
        container.appendChild(roundResult);
        const yourChoice = document.querySelector('#yourChoice');
        yourChoice.textContent = 'You picked: ' + playerSelection +'.'; 
        container.appendChild(yourChoice);
        const computerChoice = document.querySelector('#computerChoice');
        computerChoice.textContent = 'Computer picked: ' + computerSelection +'.'; 
        container.appendChild(computerChoice);
    }
};


//add event listener to buttons that calls playRound with accurate playerSelection everytime button clicked

//add click eventlistener to each button
const buttons = document.querySelectorAll('button')
  buttons.forEach ((button) => {
    button.addEventListener('click', playRound)
    });

let yourScore = 0;
let computerScore = 0;
let round = 0;
