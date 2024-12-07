let currentInput = "";
let lastAnswer = "";
let previousInput = "";
let operator;

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".button");
numbers.forEach((number) => {
    number.onclick = function () {
        // console.log(previousInput)
        if (number.value !== ".") {
            currentInput += number.value;
        } else if (number.value == "." && !currentInput.includes(".")) {
            currentInput += number.value;
        }
        display.value = currentInput;
    }
});

const specialCharacters = document.querySelectorAll(".special");
specialCharacters.forEach((character) => {
    character.onclick = function () {
        //hold the current input value to be previous value or the last answer
        previousInput = currentInput;
        currentInput = "";
        display.value = "";
        operator = character.value;
    }
});

const answer = document.querySelector(".answer");

answer.onclick = function () {
    console.log(lastAnswer, previousInput)
    if (operator == "+") {
        lastAnswer = Number(previousInput) + Number(currentInput);
    } else if (operator == "-") {
        lastAnswer = Number(previousInput) - Number(currentInput);
    } else if (operator == "*") {
        lastAnswer = Number(previousInput) * Number(currentInput);
    } else if (operator == "/") {
        lastAnswer = Number(previousInput) / Number(currentInput);
    } else if (operator == "%") {
        lastAnswer = Number(previousInput) % Number(currentInput);
    }
    //display answer after arithmetic operation
    display.value = lastAnswer.toString()
    //hold the answer to the currentInput value for chaining of arithmetic operations(6*3*3)
    currentInput = lastAnswer.toString();

}

const clear = document.querySelector(".clear");
clear.onclick = function () {
    currentInput = "";
    lastAnswer = "";
    previousInput = "";
    operator = "";
    display.value = "";
}
