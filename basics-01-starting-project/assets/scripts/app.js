const defaultResult = 0;
let currentResult = defaultResult;

function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = addNumbers(1, 2);;

let calculationDescription = `${defaultResult} + 10`
outputResult(currentResult, calculationDescription);