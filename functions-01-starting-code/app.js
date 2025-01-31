const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFUAULT_USER_CHOICE = 'ROCK';

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

startGameBtn.addEventListener('click', function() {
    console.log('Starting game...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});