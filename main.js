function convertTemperature(celsius, toFahrenheit) {
    if (toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return (celsius - 32) * 5 / 9;
    }
}

console.log(convertTemperature(0, true));
console.log(convertTemperature(100, true));
console.log(convertTemperature(32, false));

function validatePassword(password) {
    let hasLetter = /[a-zA-Zа-яА-ЯёЁ]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (password.length > 8 && hasLetter && hasNumber) {
        return true;
    } else {
        return false;
    }
}

console.log(validatePassword("Daniel123"));

console.log(validatePassword("Daniel123"));
console.log(validatePassword("12345678"));
console.log(validatePassword("password123"));



function calculate(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        if (b === 0) {
            return "На ноль делить нельзя";
        }
        return a / b;
    } else {
        return "Неизвестная операция";
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));


const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const buttons = document.querySelectorAll(".operation-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (num1.value === "" || num2.value === "") {
            result.innerText = "Введите оба числа";
            return;
        }

        let a = Number(num1.value);
        let b = Number(num2.value);
        let operation = button.getAttribute("data-operation");

        let answer = calculate(a, b, operation);

        result.innerText = answer;
    });
});
