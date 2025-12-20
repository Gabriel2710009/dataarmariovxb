document.addEventListener("keydown", e => {
  if (e.key === "PrintScreen") {
    document.body.style.filter = "blur(12px)";
    alert("🚫 Capturas deshabilitadas");
  }
});

document.addEventListener("visibilitychange", () => {
  document.body.style.filter = document.hidden ? "blur(15px)" : "none";
});
