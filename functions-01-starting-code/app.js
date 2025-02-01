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
        return;
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

const getWinner = (cChoice, pChoice = DEFUAULT_USER_CHOICE) => {
    return cChoice === pChoice
     ? RESULT_DRAW 
     : pChoice === ROCK && cChoice === PAPER || 
       pChoice === PAPER && cChoice === SCISSORS || 
       pChoice === SCISSORS && cChoice === ROCK
     ? RESULT_COMPUTER_WIN
     : RESULT_PLAYER_WIN;

    // if(cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if(
    //     pChoice === ROCK && cChoice === PAPER || 
    //     pChoice === PAPER && cChoice === SCISSORS || 
    //     pChoice === SCISSORS && cChoice === ROCK
    // ) {
    //     return RESULT_COMPUTER_WIN;
    // } else {
    //     return RESULT_PLAYER_WIN;
    // }
}

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Starting game...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice) {
         winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerChoice || DEFUAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you`;
    if(winner === RESULT_DRAW) {
        message = message + ` had a draw.`;
    } else if(winner === RESULT_PLAYER_WIN) {
        message = message + ` won.`;
    } else {
        message = message + ` lost.`;
    }
    alert(message);
    gameIsRunning = false;
});