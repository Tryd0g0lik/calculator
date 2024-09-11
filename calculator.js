
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

  toRPN(tokens) {
    const output = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    tokens.forEach(token => {
      if (!isNaN(token)) {
        output.push(parseFloat(token));
      } else if (token in this.operators) {
        while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          output.push(operators.pop());
        }
        operators.pop(); // Remove '('
      }
    });

    while (operators.length) {
      output.push(operators.pop());
    }

    return output;
  }

  calculateRPN(rpn) {
    const stack = [];
    rpn.forEach(token => {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(this.operators[token](a, b));
      }
    });
    return stack[0];
  }
}

module.exports = Calculator;
