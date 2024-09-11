// index.js
const Calculator = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = new Calculator();

rl.question('Введите выражение: ', (expression) => {
  try {
    const result = calculator.evaluate(expression);
    console.log(`Результат: ${result}`);
  } catch (error) {
    console.error('Ошибка в выражении:', error.message);
  } finally {
    rl.close();
  }
});