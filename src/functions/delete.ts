import { State } from "../types/types";

export const del = (
  deleteButton: HTMLButtonElement | null,
  render: () => void,
  state: State
) => {
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
