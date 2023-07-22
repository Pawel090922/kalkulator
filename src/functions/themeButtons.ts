import { setTheme } from "../helpers/setTheme.js";
const firstThemeButton: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[data-first-theme]");
const secondThemeButton: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[data-second-theme]");
const thirdThemeButton: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[data-third-theme]");
const circle: HTMLElement | null = document.querySelector(".circle");
export const themeButtons = () => {
  firstThemeButton.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme("firstTheme");
      circle?.style.setProperty("left", "0.1rem");
    });
  });
  secondThemeButton.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme("secondTheme");
      circle?.style.setProperty("left", "1.5rem");
    });
  });
  thirdThemeButton.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme("thirdTheme");
      circle?.style.setProperty("left", "3rem");
    });
  });
};
