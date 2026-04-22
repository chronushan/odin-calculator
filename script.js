let firstNumber = "";
let secondNumber = "";
let operator;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

function calculate() {
	document.querySelector(".calculate").addEventListener("click", (e) => {
		operate(firstNumber, secondNumber, operator);
	});
}

function operate(a, b, symbol) {
	a = Number(a);
	b = Number(b);
	let result;
	switch (symbol) {
		case "+":
			result = add(a, b);
			document.querySelector(".display").textContent = result;
			break;
		case "-":
			result = subtract(a, b);
			document.querySelector(".display").textContent = result;
			break;
		case "x":
			result = multiply(a, b);
			document.querySelector(".display").textContent = result;
			break;
		case "÷":
			result = divide(a, b);
			document.querySelector(".display").textContent = result;
			break;
	}
}

function getNum() {
	let number = document.querySelectorAll(".number button");
	number.forEach((item) =>
		item.addEventListener("click", (e) => {
			firstNumber += e.target.textContent;
		}),
	);
}

function getOperator() {
	let operatorElement = document.querySelectorAll(".operator");
	operatorElement.forEach((item) =>
		item.addEventListener("click", (e) => {
			if (operator) {
				console.log("you are here");
				secondNumber = document.querySelector(".display").textContent;
			} else {
				operator = e.target.textContent;
				secondNumber = firstNumber;
			}
			firstNumber = "";
		}),
	);
}

getNum();
getOperator();
calculate();
