document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ auth.js cargado");

  const loginBtn = document.getElementById("loginBtn");

  if (!loginBtn) {
    console.error("❌ loginBtn NO encontrado en el DOM");
    return;
  }

  loginBtn.addEventListener("click", () => {
    console.log("🔐 Redirigiendo a Discord...");
    window.location.href = `${CONFIG.API_URL}/auth/discord`;
  });
});
