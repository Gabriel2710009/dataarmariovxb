const params = new URLSearchParams(window.location.search);

if (params.get("error") === "denied") {
  alert("⛔ Acceso denegado\nNo eres Armero ni Alto Rango");
}

if (params.get("login") === "ok") {
  // después acá se desbloquea la tabla real
  console.log("Login OK");
}
