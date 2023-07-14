import { State } from "../types/types";

export const reset = (
  button: HTMLButtonElement | null,
  render: () => void,
  state: State
) => {
  if (button) {
    button.addEventListener("click", () => {
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
