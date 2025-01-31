const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFUAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WON';
const RESULT_COMPUTER_WIN = 'COMPUTER WON';

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFUAULT_USER_CHOICE} for you!`);
        return DEFUAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if(randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = function(cChoice, pChoice) {
    if(cChoice === pChoice) {
        return RESULT_DRAW;
    } else if(
        pChoice === ROCK && cChoice === PAPER || 
        pChoice === PAPER && cChoice === SCISSORS || 
        pChoice === SCISSORS && cChoice === ROCK
    ) {
        return RESULT_COMPUTER_WIN;
    } else {
        return RESULT_PLAYER_WIN;
    }
}

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Starting game...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
});