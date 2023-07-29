import { generateAdvice } from "./helpers/generateAdvice.js";
export const buttonAdvice = () => {
    const button = document.querySelector("[data-content-button]");
    generateAdvice();
    button.addEventListener("click", () => {
        console.log("elo");
        generateAdvice();
    });
};
