import { loadApi } from "./loadApi.js";

export const submitButton = (marker: any, map: any) => {
  let data;
  let newPosition;
  let ipOutput = document.querySelector("[data-ip-output]") as HTMLElement;
  let locationOutput = document.querySelector(
    "[data-location-output]"
  ) as HTMLElement;
  let timeOutput = document.querySelector("[data-time-output]") as HTMLElement;
  let ispOutput = document.querySelector("[data-isp-output]") as HTMLElement;
  let lon = 0;
  let lat = 0;

  const button = document.querySelector("[data-ip-button]");
  const searchIp: HTMLInputElement | null = document.querySelector(
    "[data-ip-input]"
  ) as HTMLInputElement;
  if (button) {
    button.addEventListener("click", async (e: Event) => {
      e.preventDefault();
      try {
        if (!searchIp.value) {
          alert("Pole nie może byc puste!");
        } else {
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
      } catch {
        alert("Nie znaleziono.");
      }
    });
  }
};
