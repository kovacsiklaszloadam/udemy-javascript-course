// var name = 'Max';

// if(name === 'Max') {
//     var hobbies = ['sports', 'cooking'];
//     console.log(hobbies);
// }

// function greet() {
//     var age = 30;
//     var name = 'Manuel';
//     console.log(name, age);
// }

// console.log(name, hobbies);

// greet();

function getName() {
    return prompt('Your name:', '');
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();