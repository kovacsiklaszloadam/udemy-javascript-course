const defaultResult = 0;
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';
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

//Logging operations to console
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

function calculateResult(calculationType) {
    const enteredNumber = getEnteredNumber();
    if (
        calculationType !== ADD &&
        calculationType !== SUBTRACT && 
        calculationType !== MULTIPLY && 
        calculationType !== DIVIDE ||
        !enteredNumber
    ) {
        return;
    }
    
    const initialResult = currentResult;
    let operator;

    if (calculationType === ADD) {
        currentResult += enteredNumber;
        operator = '+';
    } else if (calculationType === SUBTRACT) {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (calculationType === MULTIPLY) {
        currentResult *= enteredNumber;
        operator = '*';
    } else if (calculationType === DIVIDE) {
        currentResult /= enteredNumber;
        operator = '/';
    }

    createAndLogResult(operator, initialResult, enteredNumber);
    writeLog(calculationType, initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', calculateResult.bind(this, ADD));
subtractBtn.addEventListener('click', calculateResult.bind(this, SUBTRACT));
multiplyBtn.addEventListener('click', calculateResult.bind(this, MULTIPLY));
divideBtn.addEventListener('click', calculateResult.bind(this, DIVIDE));