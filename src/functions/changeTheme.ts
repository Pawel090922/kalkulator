export const changeTheme = () => {
  const boxButton: HTMLElement | null = document.querySelector(
    "[data-button-change-theme]"
  );
  if (boxButton) {
    boxButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
      } else {
        localStorage.removeItem("theme");
      }
    });
  }
};
