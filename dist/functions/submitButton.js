import { loadApi } from "./loadApi.js";
export const submitButton = (marker, map) => {
    let data;
    let newPosition;
    let ipOutput = document.querySelector("[data-ip-output]");
    let locationOutput = document.querySelector("[data-location-output]");
    let timeOutput = document.querySelector("[data-time-output]");
    let ispOutput = document.querySelector("[data-isp-output]");
    let lon = 0;
    let lat = 0;
    const button = document.querySelector("[data-ip-button]");
    const searchIp = document.querySelector("[data-ip-input]");
    if (button) {
        button.addEventListener("click", async (e) => {
            e.preventDefault();
            try {
                if (!searchIp.value) {
                    alert("Pole nie może byc puste!");
                }
                else {
                    data = await loadApi();
                    ipOutput.textContent = `${data.ip}`;
                    locationOutput.textContent = `${data.location.country}, ${data.location.city}`;
                    timeOutput.textContent = `UTC ${data.location.timezone}`;
                    ispOutput.textContent = data.isp;
                    lon = data.location.lng;
                    lat = data.location.lat;
                    searchIp.value = ``;
                    //@ts-ignore
                    newPosition = L.latLng(lat, lon);
                    marker.bindPopup(`Current IP ${data.ip}`).openPopup();
                    map.flyTo([lat, lon], 13);
                    marker.setLatLng(newPosition);
                }
            }
            catch (_a) {
                alert("Nie znaleziono.");
            }
        });
    }
};
