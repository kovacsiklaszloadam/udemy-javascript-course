const sayHello = (name) => {
  console.log('Hi ' + name);
}

const sayAnything = (name, action = 'Hi') => {
  console.log(`${action}, ${name}!`);
}

const sayHelloAgain = (name) => {
  console.log('Hi, everyone!');
}

const sayHelloAgainAndAgain = (name) => {
  return `Hi, ${name}!`;
}

const logToConsole = (string) => {
  console.log(string);
}

const checkInput = (cb, ...strings) => {
  for (const string of strings) {
    if (!string) {
      return;
    } 
  }
  for(const string of strings) {
    cb(string);
  }
}

sayHello('Laci');
checkInput(logToConsole, 'asd', 'dsa', 'asdasd', 'dsadsa')