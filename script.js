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
		operate(secondNumber, firstNumber, operator);
		secondNumber = document.querySelector(".display").textContent;
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
			document.querySelector(".display").textContent = firstNumber;
		}),
	);
}

function getOperator() {
	let operatorElement = document.querySelectorAll(".operator");
	operatorElement.forEach((item) =>
		item.addEventListener("click", (e) => {
			if (operator) {
				operate(firstNumber, secondNumber, operator);
				secondNumber = document.querySelector(".display").textContent;
			} else {
				secondNumber = firstNumber;
			}
			operator = e.target.textContent;
			firstNumber = "";
		}),
	);
}

document.querySelector("#clear").addEventListener("click", (item) => {
	document.querySelector(".display").textContent = 0;
	firstNumber = "";
	secondNumber = "";
});

getNum();
getOperator();
calculate();
