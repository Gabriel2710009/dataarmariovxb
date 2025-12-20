// Verificar parámetros de URL al cargar
const params = new URLSearchParams(window.location.search);

if (params.get("error") === "denied") {
  alert("⛔ Acceso denegado\nNo eres Armero ni Alto Rango");
  // Mostrar el overlay de login
  document.getElementById("loginOverlay").classList.remove("hidden");
}

if (params.get("login") === "ok") {
  // Usuario autenticado exitosamente
  document.getElementById("loginOverlay").classList.add("hidden");
  document.getElementById("tableContainer").classList.add("unlocked");
  document.getElementById("userInfo").classList.add("active");
  
  // Obtener username de la URL o usar uno por defecto
  const username = params.get("username") || "Usuario";
  document.getElementById("userName").textContent = username;
  document.getElementById("userAvatar").textContent = username.charAt(0).toUpperCase();
  
  // Cargar datos reales de la API
  cargarArmas();
}
