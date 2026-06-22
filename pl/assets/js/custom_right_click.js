<!-- Prevents right-clicking on photo -->
const noRightClick = document.getElementById("profile");
noRightClick.addEventListener("contextmenu", e => e.preventDefault());
