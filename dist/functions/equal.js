export const equal = (state) => {
    if (state.equalOperation !== "" && state.secondNumber === "") {
        state.secondNumber = state.firstNumber;
        state.output = eval(`${state.firstNumber} ${state.equalOperation} ${state.secondNumber}`).toString();
        state.firstNumber = state.output;
    }
    else if (state.equalOperation !== "") {
        state.firstNumber =
            state.firstNumber === "" ? state.output : state.firstNumber;
        state.output = eval(`${state.firstNumber} ${state.equalOperation} ${state.secondNumber}`).toString();
        state.firstNumber = state.output;
    }
    state.operation = "";
    state.canDelete = false;
};
