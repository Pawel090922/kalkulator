import { State } from "../types/types";

export const reset = (
  button: HTMLButtonElement | null,
  myFunction: Function,
  myState: State
) => {
  if (button) {
    button.addEventListener("click", () => {
      myState = {
        ...myState,
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
      myFunction(myState);
    });
  }
};
