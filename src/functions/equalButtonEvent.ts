import { State } from "../types/types";

export const equalButtonEvent = (
  equalButton: HTMLButtonElement | null,
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
