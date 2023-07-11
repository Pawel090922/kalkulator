"use strict";
let state = {
    output: "0",
    firstNumber: "",
    secondNumber: "",
    operation: "",
    equalOperation: "",
    status: false,
    isEqualed: false,
    clearSecondNumber: false,
    canDelete: true,
    disabled: false,
};
const numberButtons = document.querySelectorAll("#button-number");
const resetButton = document.querySelector("#button-res");
const operationButtons = document.querySelectorAll("#button-operation");
const equalButton = document.querySelector("#button-equal");
const operationElement = document.querySelector(".operation");
const resultsElement = document.querySelector(".result");
const deleteButton = document.querySelector("#button-del");
const del = () => {
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            if (!state.disabled) {
                if (state.canDelete) {
                    state.output =
                        state.output.length === 1 ? "0" : state.output.slice(0, -1);
                    if (state.operation !== "") {
                        state.secondNumber = state.output;
                    }
                }
                render();
            }
        });
    }
};
const render = () => {
    console.log(state);
    if (resultsElement) {
        if (Number(state.firstNumber) > 99999999) {
            resultsElement.innerText = "ERROR";
            state.disabled = true;
        }
        else {
            state.output = state.output.slice(0, 8);
            resultsElement.innerText = state.output;
        }
    }
    if (operationElement) {
        operationElement.innerText = state.operation;
    }
};
const equal = () => {
    if (state.equalOperation !== "" && state.secondNumber === "") {
        state.secondNumber = state.firstNumber;
        state.output = eval(`${state.firstNumber} ${state.equalOperation} ${state.secondNumber}`).toString();
        state.firstNumber = state.output;
    }
    else if (state.equalOperation !== "") {
        state.firstNumber =
            state.firstNumber === "" ? state.output : state.firstNumber;
        state.output = eval(`${state.firstNumber} ${state.equalOperation} ${state.secondNumber}`).toString();
        state.firstNumber = state.output;
    }
    state.operation = "";
    state.canDelete = false;
};
const equalEvent = () => {
    if (equalButton) {
        equalButton.addEventListener("click", () => {
            if (!state.disabled) {
                equal();
                state.isEqualed = true;
                state.clearSecondNumber = true;
                render();
            }
        });
    }
};
const operations = () => {
    operationButtons.forEach((button) => {
        button;
        button.addEventListener("click", () => {
            if (!state.disabled) {
                state.canDelete = false;
                if (state.clearSecondNumber) {
                    state.secondNumber = "";
                    state.clearSecondNumber = false;
                }
                if (state.secondNumber === "") {
                    state.firstNumber = state.output;
                    state.operation = button.innerText;
                    state.status = true;
                }
                else {
                    equal();
                    state.status = true;
                    state.secondNumber = "";
                    state.operation = button.innerText;
                }
                state.equalOperation = state.operation;
                render();
            }
        });
    });
};
const numbers = () => {
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!state.disabled) {
                if (state.operation === "") {
                    if (state.isEqualed) {
                        state.output = "0";
                        state.isEqualed = false;
                        state.firstNumber = "";
                    }
                    if (button.innerText === ".") {
                        if (state.output.includes(".") === false) {
                            state.output = `${state.output}${button.innerText}`;
                        }
                    }
                    else {
                        state.output =
                            state.output === "0"
                                ? button.innerText
                                : `${state.output}${button.innerText}`;
                    }
                }
                else {
                    if (state.status) {
                        state.output = "0";
                        state.status = false;
                    }
                    if (button.innerText === ".") {
                        if (state.output.includes(".") === false) {
                            state.output = `${state.output}${button.innerText}`;
                        }
                    }
                    else {
                        state.output =
                            state.output === "0"
                                ? button.innerText
                                : `${state.output}${button.innerText}`;
                    }
                    state.secondNumber = state.output;
                }
                state.canDelete = true;
                render();
            }
        });
    });
};
const reset = () => {
    if (resetButton) {
        resetButton.addEventListener("click", () => {
            state = {
                output: "0",
                firstNumber: "",
                secondNumber: "",
                operation: "",
                equalOperation: "",
                status: false,
                isEqualed: false,
                clearSecondNumber: false,
                canDelete: true,
                disabled: false,
            };
            render();
        });
    }
};
const init = () => {
    render();
    numbers();
    reset();
    operations();
    equalEvent();
    del();
};
init();
