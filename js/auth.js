const API = "https://backend-pefa.onrender.com";

const btn = document.getElementById("login");

btn.addEventListener("click", () => {
  window.location.href = `${API}/auth/discord`;
});
