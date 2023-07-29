import { generateAdvice } from "./helpers/generateAdvice.js";

export const renderAdvice = () => {
  const button = document.querySelector("[data-content-button]") as HTMLElement;
  generateAdvice();
  button.addEventListener("click", () => {
    generateAdvice();
  });
};
