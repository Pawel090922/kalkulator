import { State } from "./types/types";
import { reset } from "./functions/reset.js";
import { del } from "./functions/delete.js";
import { generateNumbers } from "./functions/generateNumbers.js";
import { equal } from "./functions/equal.js";
import { operationButtonEvent } from "./functions/operationButtonEvent.js";
import { equalButtonEvent } from "./functions/equalButtonEvent.js";
import { changeTheme } from "./functions/changeTheme.js";
import { render } from "./functions/render.js";

let state: State = {
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

const init = () => {
  render(state);
  changeTheme();
  generateNumbers(render, state);
  reset(render, state);
  operationButtonEvent(state, render, equal);
  equalButtonEvent(state, render, equal);
  del(render, state);
};

init();
