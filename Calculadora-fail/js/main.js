const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  //  Insere um digito na tela da calculadora
  addDigit(digit) {
    // Testando se já tem uma virgula na operação atual
    if (digit === "," && this.currentOperationText.innerText.includes(",")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  //  Processando todos os valores da calculadora
  processOperation(operation) {
    // Checa se o valor atual esta vazio
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      // Mudança de operação
      if (this.previousOperationText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

    // Recebe o valor atual e anterior
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearOperator();
        break;
      case "C":
        this.processClearAllOperator();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
    }
  }

  //   Mudando valores da tela da calculadora

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      // Checa se o valor é 0, se for não sobe
      if (previous === 0) {
        operationValue = current;
      }
      //   Subindo o numero
      if (operation === "=") {
        this.previousOperationText.innerText = `${operationValue.slice(0, -1)}`;
        this.currentOperationText.innerText = "";

      } else {
        this.previousOperationText.innerText = `${operationValue} ${operation}`;
        this.currentOperationText.innerText = "";
      }
    }
  }

  // Muda a operação matemática
  changeOperation(operation) {
    const mathOperations = ["/", "*", "+", "-"];

    if (!mathOperations.includes(operation)) {
      return;
    }
      this.previousOperationText.innerText =
      this.previousOperationText.innerText.slice(0, -1) + operation;
}

  // Deleta o ultimo digito do numero atual
  processDelOperator() {
    this.currentOperationText.innerText =
      this.currentOperationText.innerText.slice(0, -1);
  }

  //   Deleta a operação atual
  processClearOperator() {
    this.currentOperationText.innerText = "";
  }

  //   Deleta toda a conta
  processClearAllOperator() {
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }

  // Realiza a conta
  processEqualOperator() {
    const operation = previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);

  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ",") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
