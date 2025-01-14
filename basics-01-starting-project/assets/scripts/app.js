const defaultResult = 0;
let currentResult = defaultResult;

function getEnteredNumber() {
    return parseInt(userInput.value);
}

function addNumbers() {
    const enteredNumber = getEnteredNumber();
    const description = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, description);
}

addBtn.addEventListener('click', addNumbers);