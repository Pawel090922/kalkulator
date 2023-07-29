const equalButton = document.querySelector("[data-button-equal]");
export const equalButtonEvent = (state, render, equal) => {
    if (equalButton) {
        equalButton.addEventListener("click", () => {
            if (!state.disabled) {
                equal(state);
                state.isEqualed = true;
                state.clearSecondNumber = true;
                render(state);
            }
        });
    }
};
