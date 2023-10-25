const darkModeBtn = document.getElementById("darkMode");
const body = document.getElementsByClassName("project");

for (let i = 0; i < project.length; i++) {
    const projectElement = project[i];

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
