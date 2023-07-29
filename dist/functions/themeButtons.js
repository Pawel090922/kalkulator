import { setTheme } from "../helpers/setTheme.js";
const firstThemeButton = document.querySelectorAll("[data-first-theme]");
const secondThemeButton = document.querySelectorAll("[data-second-theme]");
const thirdThemeButton = document.querySelectorAll("[data-third-theme]");
const circle = document.querySelector(".circle");
export const themeButtons = () => {
    firstThemeButton.forEach((button) => {
        button.addEventListener("click", () => {
            setTheme("darkmode");
            circle === null || circle === void 0 ? void 0 : circle.style.setProperty("left", "0.1rem");
        });
    });
    secondThemeButton.forEach((button) => {
        button.addEventListener("click", () => {
            setTheme("lightmode");
            circle === null || circle === void 0 ? void 0 : circle.style.setProperty("left", "3rem");
        });
    });
};
