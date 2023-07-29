const theme = () => {
  if (localStorage.getItem("theme")) {
    document.body.classList.add("light-mode");
  }
  setTimeout(() => {
    document.body.classList.add("transition");
  }, 100);
};
theme();
