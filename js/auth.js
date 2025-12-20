const API = "https://backend-pefa.onrender.com";

document.getElementById("login").onclick = () => {
  window.location.href = `${API}/auth/discord`;
};
