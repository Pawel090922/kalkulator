import { themeColors } from "../colors/color-themes.js";
const root = document.documentElement;
export const setTheme = (theme) => {
    const selectedTheme = themeColors[theme];
    Object.keys(selectedTheme).forEach((el) => {
        const property = el;
        root.style.setProperty(el, selectedTheme[property]);
    });
    // root.style.setProperty("--background-color", "blue");
};
