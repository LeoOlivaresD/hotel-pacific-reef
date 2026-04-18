import { reservas, habitaciones } from "../data/mockData";

const disponibles = habitaciones.filter((h) => h.estado === "disponible").length;
const ocupadas    = habitaciones.filter((h) => h.estado === "ocupada").length;
const ingresos    = reservas.filter((r) => r.estado === "confirmada").reduce((s, r) => s + r.monto, 0);
const checkins    = 7;

const ocupacionData = [
  { tipo: "Simple",       pct: 78 },
  { tipo: "Doble",        pct: 91 },
  { tipo: "Suite",        pct: 55 },
  { tipo: "Junior Suite", pct: 40 },
];

function estadoPill(estado) {
  const map = { confirmada: "pill-success", pendiente: "pill-warning", cancelada: "pill-danger" };
  const labels = { confirmada: "✓ Confirmada", pendiente: "⏳ Pendiente", cancelada: "✗ Cancelada" };
  return <span className={`pill ${map[estado]}`}>{labels[estado]}</span>;
}

export default function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p>Resumen del sistema — Hotel Pacific Reef</p>
        </div>
        <span className="badge">Abril 2025</span>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Reservas activas</div>
          <div className="kpi-value">{reservas.filter(r=>r.estado==="confirmada").length}</div>
          <div className="kpi-change up">▲ +12% vs mes ant.</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Habitaciones ocupadas</div>
          <div className="kpi-value">{ocupadas}</div>
          <div className="kpi-change up">▲ +5% vs mes ant.</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Ingresos del mes</div>
          <div className="kpi-value">${ingresos.toLocaleString()}</div>
          <div className="kpi-change up">▲ +8% vs mes ant.</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Check-ins hoy</div>
          <div className="kpi-value">{checkins}</div>
          <div className="kpi-change down">▼ −2 vs ayer</div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="card">
          <div className="card-header">
            <h3>Ocupación por tipo de habitación</h3>
          </div>
          <div className="card-body">
            {ocupacionData.map((d) => (
              <div className="bar-row" key={d.tipo}>
                <span className="bar-label">{d.tipo}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${d.pct}%` }} />
                </div>
                <span className="bar-pct">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Últimas reservas</h3>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th><th>Cliente</th><th>Habitación</th><th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {reservas.slice(0,5).map((r) => (
                  <tr key={r.id}>
                    <td style={{color:"var(--gray-400)",fontWeight:500}}>#{r.id}</td>
                    <td>{r.cliente}</td>
                    <td>{r.habitacion}</td>
                    <td>{estadoPill(r.estado)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
