import { State } from "./types/types";
import { reset } from "./functions/reset.js";
import { del } from "./functions/delete.js";
import { generateNumbers } from "./functions/generateNumbers.js";
import { equal } from "./functions/equal.js";
import { operationButtonEvent } from "./functions/operationButtonEvent.js";
import { equalButtonEvent } from "./functions/equalButtonEvent.js";

let state: State = {
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

const numberButtons = document.querySelectorAll(
  "#button-number"
) as NodeListOf<HTMLButtonElement>;
const resetButton: HTMLButtonElement | null =
  document.querySelector("#button-res");
const operationButtons = document.querySelectorAll(
  "#button-operation"
) as NodeListOf<HTMLButtonElement>;
const equalButton: HTMLButtonElement | null =
  document.querySelector("#button-equal");
const operationElement: HTMLElement | null =
  document.querySelector(".operation");
const resultsElement: HTMLElement | null = document.querySelector(".result");
const deleteButton: HTMLButtonElement | null =
  document.querySelector("#button-del");

const render = () => {
  if (resultsElement) {
    if (Number(state.firstNumber) > 99999999) {
      resultsElement.innerText = "ERROR";
      state.disabled = true;
    } else {
      state.output = state.output.slice(0, 8);
      resultsElement.innerText = state.output;
    }
  }
  if (operationElement) {
    operationElement.innerText = state.operation;
  }
};

const init = () => {
  render();
  generateNumbers(numberButtons, render, state);
  reset(resetButton, render, state);
  operationButtonEvent(operationButtons, state, render, equal);
  equalButtonEvent(equalButton, state, render, equal);
  del(deleteButton, render, state);
};

init();
