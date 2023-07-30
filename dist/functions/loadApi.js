export const loadApi = async () => {
    const searchIp = document.querySelector("[data-ip-input]");
    if (searchIp) {
        let ip = searchIp.value;
        if (/[a-zA-Z]/.test(ip)) {
            return (await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_wC1fXBxBLj8WNDZMWIXR5eCvFbEbm&domain=${ip}
              `)).json();
        }
        else {
            return (await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_wC1fXBxBLj8WNDZMWIXR5eCvFbEbm&ipAddress=${ip}
              `)).json();
        }
    }
};
