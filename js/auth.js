const API = "https://backend-pefa.onrender.com";

const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", () => {
  window.location.href = `${API}/auth/discord`;
});
