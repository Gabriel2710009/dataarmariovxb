async function cargarArmas() {
  const res = await fetch("https://backend-pefa.onrender.com/api/registro_armas", {
    credentials: "include"
  });
  const data = await res.json();
}
