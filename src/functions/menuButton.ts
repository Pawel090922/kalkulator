export const menuButton = () => {
  const openButton = document.querySelector(".menu-button");
  const aside = document.querySelector(".nav-sidebar");
  const closeButton = document.querySelector(".close-sidebar-button");
  if (openButton) {
    openButton.addEventListener("click", () => {
      aside?.classList.add("opened");
    });
  }
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      aside?.classList.remove("opened");
    });
  }
};
