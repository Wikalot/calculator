function add(a, b) {
    let result = a + b;
    return Math.round(result * 10000000000) / 10000000000;
}

function subtract(a, b) {
    let result = a - b;
    return Math.round(result * 10000000000) / 10000000000;
}

function multiply(a, b) {
    let result = a * b;
    return Math.round(result * 10000000000) / 10000000000;
}

function divide(a, b) {
    let result = a / b;
    return Math.round(result * 10000000000) / 10000000000;
}

let firstNum = "";
let operator = "";
let secondNum = "";

function operate(num1, oper, num2) {
    if (oper == "+") {
        result = add(num1, num2);
        text.value = result;
        firstNum = result;
        secondNum = "";
        operator = "";
    } else if (oper == "-") {
        result = subtract(num1, num2);
        text.value = result;
        firstNum = result;
        secondNum = "";
        operator = "";
    } else if (oper == "*") {
        result = multiply(num1, num2);
        text.value = result;
        firstNum = result;
        secondNum = "";
        operator = "";
    } else if (oper == "/") {
        if (secondNum == 0){
            text.value = "Error!"
            return;
        }
        result = divide(num1, num2);
        text.value = result;
        firstNum = result;
        secondNum = "";
        operator = "";
    }
}

function equalsBtn() {
    if (firstNum == "" && operator == "" && secondNum == "") {
        return;
    } else if (typeof firstNum == "number" && typeof secondNum != "number") {
        return;
    } else if(text.value == "Error!") {
        return;       
    } else if (typeof firstNum != "number" ||
            typeof secondNum != "number"
    ) {
        text.value = "Error!";
    } else {
        operate(firstNum, operator, secondNum);
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
const decimal = document.querySelector(".decimal");
const backsp = document.querySelector(".backsp");
let text = document.querySelector(".text");

one.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "1";

        secondNum = Number(secondNum);

        text.value = text.value + "1";
    } else {
        firstNum = firstNum.toString() + "1";

        firstNum = Number(firstNum);

        text.value = text.value + "1";
    }
});

two.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "2";

        secondNum = Number(secondNum);

        text.value = text.value + "2";
    } else {
        firstNum = firstNum.toString() + "2";

        firstNum = Number(firstNum);

        text.value = text.value + "2";
    }
});

three.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "3";

        secondNum = Number(secondNum);

        text.value = text.value + "3";
    } else {
        firstNum = firstNum.toString() + "3";

        firstNum = Number(firstNum);

        text.value = text.value + "3";
    }
});

four.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "4";

        secondNum = Number(secondNum);

        text.value = text.value + "4";
    } else {
        firstNum = firstNum.toString() + "4";

        firstNum = Number(firstNum);

        text.value = text.value + "4";
    }
});

five.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "5";

        secondNum = Number(secondNum);

        text.value = text.value + "5";
    } else {
        firstNum = firstNum.toString() + "5";

        firstNum = Number(firstNum);

        text.value = text.value + "5";
    }
});

six.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "6";

        secondNum = Number(secondNum);

        text.value = text.value + "6";
    } else {
        firstNum = firstNum.toString() + "6";

        firstNum = Number(firstNum);

        text.value = text.value + "6";
    }
});

seven.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "7";

        secondNum = Number(secondNum);

        text.value = text.value + "7";
    } else {
        firstNum = firstNum.toString() + "7";

        firstNum = Number(firstNum);

        text.value = text.value + "7";
    }
});

eight.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "8";

        secondNum = Number(secondNum);

        text.value = text.value + "8";
    } else {
        firstNum = firstNum.toString() + "8";

        firstNum = Number(firstNum);

        text.value = text.value + "8";
    }
});

nine.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "9";

        secondNum = Number(secondNum);

        text.value = text.value + "9";
    } else {
        firstNum = firstNum.toString() + "9";

        firstNum = Number(firstNum);

        text.value = text.value + "9";
    }
});

zero.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    }  else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        secondNum = secondNum.toString() + "0";

        secondNum = Number(secondNum);

        text.value = text.value + "0";
    } else {
        firstNum = firstNum.toString() + "0";

        firstNum = Number(firstNum);

        text.value = text.value + "0";
    }
});

clear.addEventListener("click", () => {
    firstNum = "";

    operator = "";

    secondNum = "";

    text.value = "";
});

equals.addEventListener("click", equalsBtn);

plus.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if ((text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")) && secondNum != "") {
        operate(firstNum, operator, secondNum);

        text.value = text.value + "+"

        operator = "+";
    } else if (typeof firstNum != "number") {
        return;
    } else if (typeof secondNum != "number") {
        operator = "+";

        text.value = text.value + "+";
    } else  {
        operator = "+";

        let index = text.value.index(firstNum) + 1;

        text.value[index] = "+";
    }
});

minus.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if ((text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")) && secondNum != "") {
        operate(firstNum, operator, secondNum);

        text.value = text.value + "-"

        operator = "-";
    } else if (typeof firstNum != "number") {
        return;
    } else if (typeof secondNum != "number") {
        operator = "-";

        text.value = text.value + "-";
    } else  {
        operator = "-";

        let index = text.value.index(firstNum) + 1;

        text.value[index] = "-";
    }
});

mult.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if ((text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")) && secondNum != "") {
        operate(firstNum, operator, secondNum);

        text.value = text.value + "*"

        operator = "*";
    } else if (typeof firstNum != "number") {
        return;
    } else if (typeof secondNum != "number") {
        operator = "*";
        text.value = text.value + "*";
    } else  {
        operator = "*";

        let index = text.value.index(firstNum) + 1;

        text.value[index] = "*";
    }
});

division.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    } else if ((text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")) && secondNum != "") {
        operate(firstNum, operator, secondNum);

        text.value = text.value + "/"

        operator = "/";
    } else if (typeof firstNum != "number") {
        return;
    } else if (typeof secondNum != "number") {
        operator = "/";
        text.value = text.value + "/";
    } else  {
        operator = "/";

        let index = text.value.index(firstNum) + 1;

        text.value[index] = "/";
    }
});

decimal.addEventListener("click", () => {
    if (text.value == "Error!") {
        return;
    }  else if (text.value.includes("+") ||
        text.value.includes("-") ||
        text.value.includes("*") ||
        text.value.includes("/")
        ) {
        if (!secondNum.toString().includes(".")) {
            secondNum = secondNum.toString() + ".";

            text.value = text.value + ".";
        }
    } else if (!firstNum.toString().includes(".")) {
        firstNum = firstNum.toString() + ".";

        text.value = text.value + ".";
    } 
})

backsp.addEventListener("click", () => {
    let textArr = Array.from(text.value);
    textArr.pop();
    let textChanged = textArr.toString();
    textChanged = textChanged.replaceAll(",", "");
    text.value = textChanged;
});

text.addEventListener("input", (event) => {
    if (!text.value.includes("+") &&
    !text.value.includes("-") &&
    !text.value.includes("*") &&
    !text.value.includes("/")) {
        firstNum = Number(text.value);
    } else if (text.value.includes("+")) {
        operator = "+";
        let index = text.value.indexOf("+") + 1;
        secondNum = Number(text.value.substring(index));
    } else if (text.value.includes("-")) {
        operator = "-";
        let index = text.value.indexOf("-") + 1;
        secondNum = Number(text.value.substring(index));
    } else if (text.value.includes("*")) {
        operator = "*";
        let index = text.value.indexOf("*") + 1;
        secondNum = Number(text.value.substring(index));
    } else if (text.value.includes("/")) {
        operator = "/";
        let index = text.value.indexOf("/") + 1;
        secondNum = Number(text.value.substring(index));
    }
        
});

text.addEventListener("beforeinput", (event) => {
    // If the enter key is pressed
    if (event.data == null) {
        equalsBtn();
    }
    // If "+", "-", "*", "/" is entered and
    // occurences of "+", "-", "*", "/" is one then prevent default behaviour
    if((event.data == "+" ||
    event.data == "-" ||
    event.data == "*" ||
    event.data == "/") && 
    (text.value.split("+").length - 1 == 1 ||
    text.value.split("-").length - 1 == 1 ||
    text.value.split("*").length - 1 == 1 ||
    text.value.split("/").length - 1 == 1)) {
        event.preventDefault();
    }
    if (event.data != null) {
        if (event.data == "1" ||
            event.data == "2" ||
            event.data == "3" ||
            event.data == "4" ||
            event.data == "5" || 
            event.data == "6" ||
            event.data == "7" ||
            event.data == "8" ||
            event.data == "9" ||
            event.data == "0" ||
            event.data == "+" ||
            event.data == "-" ||
            event.data == "*" ||
            event.data == "/" ||
            event.data == "." ) {}
            else {
                event.preventDefault();
            }
    }
});