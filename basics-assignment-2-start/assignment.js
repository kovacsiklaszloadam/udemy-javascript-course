const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hello user!');
}

function greetByName(name) {
    alert(`Hello ${name}!`)
}

function merge(string1, string2, string3) {
    const finalString = `${string1} ${string2} ${string3}`;
    return finalString;
}

greet();
greetByName('Laci');

task3Element.addEventListener('click', greet);

alert(merge('This is', 'my second assignment', 'during this course'));