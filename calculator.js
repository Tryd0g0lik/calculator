
// Основной calculator.js
class Calculator {
  constructor() {
    this.operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  }

  evaluate(expression) {
    const tokens = this.tokenize(expression);
    const rpn = this.toRPN(tokens);
    return this.calculateRPN(rpn);
  }

  tokenize(expression) {
    const regex = /\d+(\.\d+)?|[+\-*/()]/g;
    return expression.match(regex);
  }


}


