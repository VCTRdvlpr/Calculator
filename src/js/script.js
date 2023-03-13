const answerScreen = document.querySelector(".answer-screen input");
const numbersContainer = document.querySelector(".main-screen .numbers-container");
const clearBtn = document.getElementById("clear")

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetScreen = false;

numbersContainer.addEventListener("click", function (event) {
  const button = event.target;
  const buttonValue = button.textContent;

  if (button.classList.contains("operator-btn-style")) {
    handleOperator(buttonValue);
  } else if (button.classList.contains("btn-style")) {
    handleNumber(buttonValue);
  }
});

function handleOperator(operator) {
  if (operator === "+") {
    currentOperator = "+";
    firstNumber = answerScreen.value;
    shouldResetScreen = true;
  } else if (operator === "-") {
    currentOperator = "-";
    firstNumber = answerScreen.value;
    shouldResetScreen = true;
  } else if (operator === "x") {
    currentOperator = "*";
    firstNumber = answerScreen.value;
    shouldResetScreen = true;
  } else if (operator === "÷") {
    currentOperator = "/";
    firstNumber = answerScreen.value;
    shouldResetScreen = true;
  } else if (operator === "=") {
    if (currentOperator === "+") {
      secondNumber = answerScreen.value;
      const result = parseFloat(firstNumber) + parseFloat(secondNumber);
      answerScreen.value = result;
      currentOperator = null;
    } else if (currentOperator === "-") {
      secondNumber = answerScreen.value;
      const result = parseFloat(firstNumber) - parseFloat(secondNumber);
      answerScreen.value = result;
      currentOperator = null;
    } else if (currentOperator === "*") {
      secondNumber = answerScreen.value;
      const result = parseFloat(firstNumber) * parseFloat(secondNumber);
      answerScreen.value = result;
      currentOperator = null;
    } else if (currentOperator === "/") {
      secondNumber = answerScreen.value;
      const result = parseFloat(firstNumber) / parseFloat(secondNumber);
      answerScreen.value = result;
      currentOperator = null;
    }
  }
}

function handleNumber(number) {
  if (shouldResetScreen) {
    answerScreen.value = number;
    shouldResetScreen = false;
  } else {
    answerScreen.value += number;
  }
}

function clearScreen() {
    answerScreen.value = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    shouldResetScreen = false;
  }

 clearBtn.addEventListener('click', clearScreen)