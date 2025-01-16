const defaultResult = 0;
let currentResult = defaultResult;

function getEnteredNumber() {
    return parseInt(userInput.value);
}

function createAndLogResult(operator, resultBeforeCalc, calcNumber) {
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description)
}

function add() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndLogResult('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndLogResult('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndLogResult('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndLogResult('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);