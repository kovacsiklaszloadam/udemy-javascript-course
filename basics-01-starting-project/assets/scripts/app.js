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
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' && 
        calculationType !== 'MULITPLY' && 
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }
    
    const initialResult = currentResult;
    let operator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        operator = '/';
    }

    createAndLogResult(operator, initialResult, enteredNumber);
    writeLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);