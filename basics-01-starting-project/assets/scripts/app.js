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

function writeLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry);
}

function add() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndLogResult('+', initialResult, enteredNumber);
    writeLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndLogResult('-', initialResult, enteredNumber);
    writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndLogResult('*', initialResult, enteredNumber);
    writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getEnteredNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndLogResult('/', initialResult, enteredNumber);
    writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);