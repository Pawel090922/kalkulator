import { submitButton } from "./functions/submitButton.js";
import { getUserIp } from "./functions/getUserIP.js";
// @ts-ignore
let map = L.map("map").setView([51.5, -0.09], 13);
// @ts-ignore
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);
// @ts-ignore
let marker = L.marker([51.5, -0.09]).addTo(map);
// @ts-ignore
(() => {
    getUserIp();
    submitButton(marker, map);
})();
