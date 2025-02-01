<!-- Prevents right-clicking on photo -->
const noRightClick = document.getElementById("profile");
console.log(noRightClick);

noRightClick.addEventListener("contextmenu", e => e.preventDefault());
