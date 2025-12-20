function toggleTheme() {
  const theme =
    document.body.dataset.theme === "light" ? "dark" : "light";

  document.body.dataset.theme = theme;
}
