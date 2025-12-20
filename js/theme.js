function toggleTheme() {
  const actual = document.body.dataset.theme;
  document.body.dataset.theme = actual === "light" ? "dark" : "light";
}
