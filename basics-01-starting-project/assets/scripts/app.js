const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getEnteredNumber() {
    return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndLogResult(operator, resultBeforeCalc, calcNumber) {
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description)
}

function add() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndLogResult('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndLogResult('-', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function multiply() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndLogResult('*', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function divide() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndLogResult('/', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);