const operationButtons = document.querySelectorAll("[data-button-operation]");
export const operationButtonEvent = (state, render, equal) => {
    operationButtons.forEach((button) => {
        button;
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
                }
                else {
                    equal(state);
                    state.status = true;
                    state.secondNumber = "";
                    state.operation = button.innerText;
                }
                state.equalOperation = state.operation;
                render(state);
            }
        });
    });
};
