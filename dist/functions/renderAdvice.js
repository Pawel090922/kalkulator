import { generateAdvice } from "./helpers/generateAdvice.js";
export const renderAdvice = () => {
    const button = document.querySelector("[data-content-button]");
    generateAdvice();
    button.addEventListener("click", () => {
        generateAdvice();
    });
};
