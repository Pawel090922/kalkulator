const numberButtons = document.querySelectorAll("#button-number");
export const generateNumbers = (render, state) => {
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!state.disabled) {
                if (state.operation === "") {
                    if (state.isEqualed) {
                        state.output = "0";
                        state.isEqualed = false;
                        state.firstNumber = "";
                    }
                    if (button.innerText === ".") {
                        if (state.output.includes(".") === false) {
                            state.output = `${state.output}${button.innerText}`;
                        }
                    }
                    else {
                        state.output =
                            state.output === "0"
                                ? button.innerText
                                : `${state.output}${button.innerText}`;
                    }
                }
                else {
                    if (state.status) {
                        state.output = "0";
                        state.status = false;
                    }
                    if (button.innerText === ".") {
                        if (state.output.includes(".") === false) {
                            state.output = `${state.output}${button.innerText}`;
                        }
                    }
                    else {
                        state.output =
                            state.output === "0"
                                ? button.innerText
                                : `${state.output}${button.innerText}`;
                    }
                    state.secondNumber = state.output;
                }
                state.canDelete = true;
                render();
            }
        });
    });
};
