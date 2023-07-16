import { themeColors } from "../colors/color-themes.js";
import { Colors, Theme } from "../types/types";
const root: HTMLElement = document.documentElement;

export const setTheme = (theme: Theme) => {
  const selectedTheme = themeColors[theme];
  Object.keys(selectedTheme).forEach((el: string) => {
    const property = el as keyof Colors;
    root.style.setProperty(el, selectedTheme[property]);
  });
  // root.style.setProperty("--background-color", "blue");
};
