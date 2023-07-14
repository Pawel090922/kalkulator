export const reset = (button, myFunction, myState) => {
    if (button) {
        button.addEventListener("click", () => {
            myState = Object.assign(Object.assign({}, myState), { output: "0", firstNumber: "", secondNumber: "", operation: "", equalOperation: "", status: false, isEqualed: false, clearSecondNumber: false, canDelete: true, disabled: false });
            myFunction(myState);
        });
    }
};
