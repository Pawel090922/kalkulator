export const generateAdvice = () => {
    const idAdvice = document.querySelector("[data-id-advice]");
    const contentAdvice = document.querySelector("[data-content-advice]");
    fetch("https://api.adviceslip.com/advice")
        .then((res) => {
        if (!res.ok) {
            throw new Error("Problem");
        }
        return res.json();
    })
        .then((data) => {
        idAdvice.innerText = `#${data.slip.id}`;
        contentAdvice.innerText = `"${data.slip.advice}"`;
    })
        .catch((error) => {
        contentAdvice.innerText = `"${error}"`;
    });
};
