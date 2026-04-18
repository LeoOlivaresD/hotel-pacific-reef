import { useState } from "react";
import { habitaciones as initialData } from "../data/mockData";

const estadoConfig = {
  disponible:   { label: "Disponible",   cls: "pill-success" },
  ocupada:      { label: "Ocupada",      cls: "pill-danger"  },
  mantenimiento:{ label: "Mantenimiento",cls: "pill-warning" },
};

const tipos = ["Todos", "Simple", "Doble", "Suite", "Junior Suite"];
const estados = ["Todos", "disponible", "ocupada", "mantenimiento"];

export default function Habitaciones({ onReservar }) {
  const [busqueda, setBusqueda] = useState("");
  const [filtrTipo, setFiltrTipo] = useState("Todos");
  const [filtrEstado, setFiltrEstado] = useState("Todos");

  const lista = initialData.filter((h) => {
    const matchBusq = h.numero.includes(busqueda) || h.tipo.toLowerCase().includes(busqueda.toLowerCase());
    const matchTipo = filtrTipo === "Todos" || h.tipo === filtrTipo;
    const matchEst  = filtrEstado === "Todos" || h.estado === filtrEstado;
    return matchBusq && matchTipo && matchEst;
  });

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Habitaciones</h2>
          <p>{lista.length} habitaciones encontradas</p>
        </div>
        <button className="btn btn-primary">+ Nueva habitación</button>
      </div>

      <div className="filters-bar">
        <input
          className="search-input"
          placeholder="Buscar por número o tipo…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        {tipos.map((t) => (
          <button
            key={t}
            className={`filter-btn ${filtrTipo === t ? "active" : ""}`}
            onClick={() => setFiltrTipo(t)}
          >{t}</button>
        ))}
        {estados.slice(1).map((e) => (
          <button
            key={e}
            className={`filter-btn ${filtrEstado === e ? "active" : ""}`}
            onClick={() => setFiltrEstado(filtrEstado === e ? "Todos" : e)}
          >{estadoConfig[e].label}</button>
        ))}
      </div>

      {lista.length === 0 ? (
        <div className="empty-state">
          <div className="icon">🔍</div>
          <p>No se encontraron habitaciones con esos filtros.</p>
        </div>
      ) : (
        <div className="habitaciones-grid">
          {lista.map((h) => {
            const cfg = estadoConfig[h.estado];
            return (
              <div className="hab-card" key={h.id}>
                <div className="hab-card-img">
                  <span>{h.numero}</span>
                  <span className={`hab-status pill ${cfg.cls}`}>{cfg.label}</span>
                </div>
                <div className="hab-body">
                  <div className="hab-tipo">{h.tipo}</div>
                  <div className="hab-meta">
                    Piso {h.piso} · {h.capacidad} {h.capacidad === 1 ? "persona" : "personas"} · {h.m2} m²
                    <br/>
                    {h.amenidades.map((a) => (
                      <span key={a} className="amenidad-tag">{a}</span>
                    ))}
                  </div>
                  <div className="hab-footer">
                    <div className="hab-precio">
                      ${h.precio} <span>/ noche</span>
                    </div>
                    {h.estado === "disponible" ? (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => onReservar(h)}
                      >
                        Reservar
                      </button>
                    ) : (
                      <button className="btn btn-outline btn-sm">Ver detalle</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
