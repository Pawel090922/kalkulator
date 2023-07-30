export const getUserIp = () => {
  const searchIp: HTMLInputElement | null = document.querySelector(
    "[data-ip-input]"
  ) as HTMLInputElement;
  const getIpButton = document.querySelector(
    "[data-get-ip]"
  ) as HTMLButtonElement;
  getIpButton.addEventListener("click", async () => {
    let userIp = await fetch("https://api.ipify.org?format=json");
    let response = await userIp.json();
    searchIp.value = response.ip;
  });
};
