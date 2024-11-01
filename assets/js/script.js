const toggleThemeButton = document.getElementById("toggleTheme");

document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});
