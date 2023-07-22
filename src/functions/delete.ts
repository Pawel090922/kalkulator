import { State } from "../types/types";

const deleteButton: HTMLButtonElement | null =
  document.querySelector("[data-button-del]");

export const del = (render: () => void, state: State) => {
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
