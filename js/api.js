async function cargarArmas() {
  try {
    const res = await fetch(
      "https://backend-pefa.onrender.com/api/registro_armas",
      {
        credentials: "include"
      }
    );

    if (!res.ok) return;

    const data = await res.json();
    renderTabla(data);

  } catch (e) {
    console.error("Error cargando datos", e);
  }
}

function renderTabla(data) {
  const tbody = document.querySelector("#tabla-armas tbody");
  tbody.innerHTML = "";

  data.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.id}</td>
      <td>${a.arma}</td>
      <td>${a.serie}</td>
      <td>${a.propietario}</td>
    `;
    tbody.appendChild(tr);
  });
}

// cuando carga la página
cargarArmas();
