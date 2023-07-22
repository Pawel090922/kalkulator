import { State } from "../types/types";

const equalButton: HTMLButtonElement | null = document.querySelector(
  "[data-button-equal]"
);

export const equalButtonEvent = (
  state: State,
  render: () => void,
  equal: (state: State) => void
) => {
  if (equalButton) {
    equalButton.addEventListener("click", () => {
      if (!state.disabled) {
        equal(state);
        state.isEqualed = true;
        state.clearSecondNumber = true;
        render();
      }
    });
  }
};
