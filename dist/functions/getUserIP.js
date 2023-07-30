export const getUserIp = () => {
    const searchIp = document.querySelector("[data-ip-input]");
    const getIpButton = document.querySelector("[data-get-ip]");
    getIpButton.addEventListener("click", async () => {
        let userIp = await fetch("https://api.ipify.org?format=json");
        let response = await userIp.json();
        searchIp.value = response.ip;
    });
};
