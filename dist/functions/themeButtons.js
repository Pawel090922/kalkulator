import { setTheme } from "../helpers/setTheme.js";
const firstThemeButton = document.querySelectorAll("#first-theme");
const secondThemeButton = document.querySelectorAll("#second-theme");
const thirdThemeButton = document.querySelectorAll("#third-theme");
const circle = document.querySelector(".circle");
export const themeButtons = () => {
    firstThemeButton.forEach((button) => {
        button.addEventListener("click", () => {
            setTheme("firstTheme");
            circle === null || circle === void 0 ? void 0 : circle.style.setProperty("left", "0.1rem");
        });
    });
    secondThemeButton.forEach((button) => {
        button.addEventListener("click", () => {
            setTheme("secondTheme");
            circle === null || circle === void 0 ? void 0 : circle.style.setProperty("left", "1.5rem");
        });
    });
    thirdThemeButton.forEach((button) => {
        button.addEventListener("click", () => {
            setTheme("thirdTheme");
            circle === null || circle === void 0 ? void 0 : circle.style.setProperty("left", "3rem");
        });
    });
};
