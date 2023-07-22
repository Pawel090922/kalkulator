import { State } from "../types/types";

const resetButton: HTMLButtonElement | null =
  document.querySelector("[data-button-res]");

export const reset = (render: () => void, state: State) => {
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      state.output = "0";
      state.firstNumber = "";
      state.secondNumber = "";
      state.operation = "";
      state.equalOperation = "";
      state.status = false;
      state.isEqualed = false;
      state.clearSecondNumber = false;
      state.canDelete = true;
      state.disabled = false;
      render();
    });
  }
};

// state = {
//   output: "0",
//   firstNumber: "",
//   secondNumber: "",
//   operation: "",
//   equalOperation: "",
//   status: false,
//   isEqualed: false,
//   clearSecondNumber: false,
//   canDelete: true,
//   disabled: false,
// };
