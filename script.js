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

let firstNum = "";
let operator = "";
let secondNum = "";

function operate(num1, oper, num2) {
    if (oper == "+") {
        return add(num1, num2);
    } else if (oper == "-") {
        return subtract(num1, num2);
    } else if (oper == "*") {
        return multiply(num1, num2);
    } else if (oper == "/") {
        return divide(num1, num2);
    }
}

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const equals = document.querySelector(".equals");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mult = document.querySelector(".multiply");
const division = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const zero = document.querySelector(".zero");
let text = document.querySelector(".text");

one.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "1";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "1";
    } else {
        firstNum = firstNum.toString() + "1"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "1";
    }
});

two.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "2";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "2";
    } else {
        firstNum = firstNum.toString() + "2"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "2";
    }
});

three.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "3";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "3";
    } else {
        firstNum = firstNum.toString() + "3"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "3";
    }
});

four.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "4";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "4";
    } else {
        firstNum = firstNum.toString() + "4"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "4";
    }
});

five.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "5";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "5";
    } else {
        firstNum = firstNum.toString() + "5"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "5";
    }
});

six.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "6";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "6";
    } else {
        firstNum = firstNum.toString() + "6"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "6";
    }
});

seven.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "7";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "7";
    } else {
        firstNum = firstNum.toString() + "7"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "7";
    }
});

eight.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "8";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "8";
    } else {
        firstNum = firstNum.toString() + "8"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "8";
    }
});

nine.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "9";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "9";
    } else {
        firstNum = firstNum.toString() + "9"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "9";
    }
});

zero.addEventListener("click", () => {
    if (text.textContent.includes("+") ||
        text.textContent.includes("-") ||
        text.textContent.includes("*") ||
        text.textContent.includes("/")
        ) {
        secondNum = secondNum.toString() + "0";
        secondNum = Number(secondNum);
        text.textContent = text.textContent + "0";
    } else {
        firstNum = firstNum.toString() + "0"
        firstNum = Number(firstNum);
        text.textContent = text.textContent + "0";
    }
});

clear.addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    text.textContent = "";
});

