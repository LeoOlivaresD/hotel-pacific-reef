export const habitaciones = [
  { id: 1, numero: "101", tipo: "Simple", piso: 1, capacidad: 1, precio: 65, estado: "disponible", amenidades: ["WiFi", "TV", "Aire acondicionado"], m2: 20 },
  { id: 2, numero: "102", tipo: "Simple", piso: 1, capacidad: 1, precio: 65, estado: "mantenimiento", amenidades: ["WiFi", "TV"], m2: 20 },
  { id: 3, numero: "201", tipo: "Doble", piso: 2, capacidad: 2, precio: 95, estado: "ocupada", amenidades: ["WiFi", "TV", "Minibar", "Balcón"], m2: 30 },
  { id: 4, numero: "204", tipo: "Doble", piso: 2, capacidad: 2, precio: 95, estado: "disponible", amenidades: ["WiFi", "TV", "Minibar"], m2: 30 },
  { id: 5, numero: "301", tipo: "Suite", piso: 3, capacidad: 3, precio: 180, estado: "disponible", amenidades: ["WiFi", "TV", "Jacuzzi", "Vista al mar"], m2: 55 },
  { id: 6, numero: "302", tipo: "Suite", piso: 3, capacidad: 3, precio: 180, estado: "ocupada", amenidades: ["WiFi", "TV", "Jacuzzi"], m2: 55 },
  { id: 7, numero: "401", tipo: "Junior Suite", piso: 4, capacidad: 2, precio: 130, estado: "disponible", amenidades: ["WiFi", "TV", "Kitchenette"], m2: 42 },
  { id: 8, numero: "402", tipo: "Junior Suite", piso: 4, capacidad: 2, precio: 130, estado: "disponible", amenidades: ["WiFi", "TV", "Kitchenette", "Balcón"], m2: 42 },
];

export const reservas = [
  { id: 1042, cliente: "María González", habitacion: "204 — Doble", fechaEntrada: "2025-04-15", fechaSalida: "2025-04-18", estado: "confirmada", monto: 643 },
  { id: 1041, cliente: "Pedro Ramírez", habitacion: "301 — Suite", fechaEntrada: "2025-04-16", fechaSalida: "2025-04-20", estado: "pendiente", monto: 1020 },
  { id: 1040, cliente: "Claudia Soto", habitacion: "101 — Simple", fechaEntrada: "2025-04-14", fechaSalida: "2025-04-17", estado: "confirmada", monto: 260 },
  { id: 1039, cliente: "Luis Vargas", habitacion: "401 — Junior Suite", fechaEntrada: "2025-04-10", fechaSalida: "2025-04-13", estado: "cancelada", monto: 520 },
  { id: 1038, cliente: "Rosa Mora", habitacion: "201 — Doble", fechaEntrada: "2025-04-12", fechaSalida: "2025-04-15", estado: "confirmada", monto: 380 },
  { id: 1037, cliente: "Carlos Díaz", habitacion: "302 — Suite", fechaEntrada: "2025-04-11", fechaSalida: "2025-04-14", estado: "confirmada", monto: 720 },
];
