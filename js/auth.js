const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  window.location.href = `${CONFIG.API_URL}/auth/discord`;
});
