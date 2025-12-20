async function cargarArmas() {
  const res = await fetch(
    "https://backend-pefa.onrender.com/api/registro_armas",
    {
      credentials: "include"
    }
  );

  if (!res.ok) {
    console.log("No autorizado");
    return;
  }

  const data = await res.json();
  renderTabla(data);
}
