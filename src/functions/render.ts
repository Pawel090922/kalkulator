import { State } from "../types/types";

const operationElement: HTMLElement | null =
  document.querySelector(".operation");
const resultsElement: HTMLElement | null = document.querySelector(".result");

export const render = (state: State) => {
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
