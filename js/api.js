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

    const tipoClass =
      r.tipo?.toLowerCase() === "deposito"
        ? "badge-deposito"
        : "badge-retiro";

    tr.innerHTML = `
      <td>${r.id}</td>
      <td><span class="badge ${tipoClass}">${r.tipo}</span></td>
      <td>${r.timestamp ? new Date(r.timestamp).toLocaleString() : "-"}</td>
      <td>${r.nombre ?? "-"}</td>
      <td>${r.steamid ?? "-"}</td>
      <td>${r.discord ?? "-"}</td>
      <td>${r.objeto ?? "-"}</td>
      <td>${r.cantidad ?? 1}</td>
      <td>${r.almacen ?? "-"}</td>
      <td>${r.en_operativo}</td>
      <td>${r.created_at ? new Date(r.created_at).toLocaleString() : "-"}</td>
      <td>${r.discord_id ?? "-"}</td>
      <td>${r.validado}</td>
      <td>${r.validado_por ?? "-"}</td>
      <td>${r.fecha_validacion ? new Date(r.fecha_validacion).toLocaleString() : "-"}</td>
      <td>${r.alerta_message_id ?? "-"}</td>
      <td>${r.alerta_channel_id ?? "-"}</td>
    `;

    tbody.appendChild(tr);
  });
}

