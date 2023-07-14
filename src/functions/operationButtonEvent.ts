import { State } from "../types/types";

export const operationButtonEvent = (
  operationButtons: NodeListOf<HTMLButtonElement>,
  state: State,
  render: () => void,
  equal: (state: State) => void
) => {
  operationButtons.forEach((button) => {
    button as HTMLElement;
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
        } else {
          equal(state);
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
