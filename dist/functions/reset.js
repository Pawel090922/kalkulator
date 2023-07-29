const resetButton = document.querySelector("[data-button-res]");
export const reset = (render, state) => {
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
            render(state);
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
