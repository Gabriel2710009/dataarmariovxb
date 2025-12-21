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

function renderTabla(armas) {
  const tbody = document.querySelector("#tabla-armas tbody");
  tbody.innerHTML = "";
  
  armas.forEach(arma => {
    const tr = document.createElement("tr");
    
    let statusClass = "status-disponible";
    let statusText = "Disponible";
    
    if (arma.estado === "asignado") {
      statusClass = "status-asignado";
      statusText = "Asignado";
    } else if (arma.estado === "mantenimiento") {
      statusClass = "status-mantenimiento";
      statusText = "Mantenimiento";
    }
    
    tr.innerHTML = `
      <td>${arma.id}</td>
      <td>${arma.nombre}</td>
      <td>${arma.tipo}</td>
      <td><span class="status-badge ${statusClass}">${statusText}</span></td>
      <td>${arma.asignado_a || "-"}</td>
      <td>${new Date(arma.fecha).toLocaleDateString()}</td>
    `;
    
    tbody.appendChild(tr);
  });
}
