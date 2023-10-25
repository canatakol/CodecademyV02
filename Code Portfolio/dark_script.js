const darkModeBtn = document.getElementById("darkMode");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});