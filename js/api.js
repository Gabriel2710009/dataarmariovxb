async function cargarArmas() {
  try {
    const res = await fetch(
      `${CONFIG.API_URL}/api/registros_armas`,
      {
        credentials: "include"
      }
    );

    if (!res.ok) {
      console.log("No autorizado");
      return;
    }

    const data = await res.json();
    
    if (data && data.length > 0) {
      renderTabla(data);
    }
  } catch (error) {
    console.error("Error al cargar armas:", error);
  }
}

function renderTabla(registros) {
  const tbody = document.querySelector("#tabla-armas tbody");
  tbody.innerHTML = "";

  registros.forEach(r => {
    const tr = document.createElement("tr");

    const movimientoClass =
      r.tipo === "deposito" ? "status-deposito" : "status-retiro";

    const movimientoText =
      r.tipo === "deposito" ? "Depósito" : "Retiro";

    tr.innerHTML = `
      <td>${r.objeto ?? "-"}</td>
      <td>${r.cantidad ?? 0}</td>
      <td>
        <span class="status-badge ${movimientoClass}">
          ${movimientoText}
        </span>
      </td>
      <td>${r.created_at ? new Date(r.created_at).toLocaleString() : "-"}</td>
    `;

    tbody.appendChild(tr);
  });
}
