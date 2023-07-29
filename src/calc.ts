import { State } from "./types/types";
import { reset } from "./functions/reset.js";
import { del } from "./functions/delete.js";
import { generateNumbers } from "./functions/generateNumbers.js";
import { equal } from "./functions/equal.js";
import { operationButtonEvent } from "./functions/operationButtonEvent.js";
import { equalButtonEvent } from "./functions/equalButtonEvent.js";
import { changeTheme } from "./functions/changeTheme.js";
import { render } from "./functions/render.js";

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
<<<<<<< HEAD:src/calc.ts
=======
//wszystko git
const operationElement: HTMLElement | null =
  document.querySelector(".operation");
const resultsElement: HTMLElement | null = document.querySelector(".result");

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
>>>>>>> master:src/app.ts

const init = () => {
  render(state);
  changeTheme();
  generateNumbers(render, state);
  reset(render, state);
  operationButtonEvent(state, render, equal);
  equalButtonEvent(state, render, equal);
  del(render, state);
};

init();
