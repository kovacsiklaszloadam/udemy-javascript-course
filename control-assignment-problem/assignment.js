const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

if (randomNumber > 0.7) {
    alert('The number is greater than 0.7');
}

const numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length; i > 0; i--) {
    console.log(numbers[i - 1]);
}

for (const el of numbers) {
    console.log(el);
}

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
    alert('Both numbers are greater than 0.7');
} else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
    alert('One of the numbers is smaller than 0.2');
}