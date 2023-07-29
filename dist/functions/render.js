const operationElement = document.querySelector(".operation");
const resultsElement = document.querySelector(".result");
export const render = (state) => {
    if (resultsElement) {
        if (Number(state.firstNumber) > 99999999) {
            resultsElement.innerText = "ERROR";
            state.disabled = true;
        }
        else {
            state.output = state.output.slice(0, 8);
            resultsElement.innerText = state.output;
        }
    }
    if (operationElement) {
        operationElement.innerText = state.operation;
    }
};
