const clientsData = [
  {
    id: 1,
    name: "María González",
    rut: "12.345.678-9",
    address: "Calle Falsa 123, Santiago",
    phone: "+56987654321",
    email: "maria.gonzalez@example.com",
    birthDate: "1985-04-15",
    gender: "Femenino",
    points: ["Vivienda", "Salud mental", "Empleo"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Situación de vulnerabilidad habitacional con cuadro ansioso-depresivo. Red de apoyo limitada.</p>",
    actionPlan: [
      {
        task: "Solicitar subsidio habitacional",
        dueDate: "2023-12-15",
        completed: false,
        responsible: "Cliente"
      },
      {
        task: "Derivación a psicólogo",
        dueDate: "2023-11-20",
        completed: true,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Informe social.pdf", type: "pdf", date: "2023-10-10" },
      { name: "Certificado médico.jpg", type: "image", date: "2023-10-05" }
    ],
    createdAt: "2023-10-01"
  },
  {
    id: 2,
    name: "Juan Pérez",
    rut: "9.876.543-2",
    address: "Av. Principal 456, Valparaíso",
    phone: "+56912345678",
    email: "juan.perez@example.com",
    birthDate: "1990-08-22",
    gender: "Masculino",
    points: ["Violencia intrafamiliar", "Adicciones"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Situación de violencia intrafamiliar con consumo problemático de alcohol.</p>",
    actionPlan: [
      {
        task: "Inscripción en programa de rehabilitación",
        dueDate: "2023-11-30",
        completed: false,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [],
    createdAt: "2023-09-15"
  },
  {
    id: 3,
    name: "Ana López",
    rut: "13.579.246-8",
    address: "Pasaje Secundario 789, Concepción",
    phone: "+56955555555",
    email: "ana.lopez@example.com",
    birthDate: "1978-11-03",
    gender: "Femenino",
    points: ["Adulto mayor", "Salud", "Aislamiento"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Adulta mayor con movilidad reducida y aislamiento social.</p>",
    actionPlan: [
      {
        task: "Evaluación por terapeuta ocupacional",
        dueDate: "2023-12-05",
        completed: false,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Informe geriátrico.pdf", type: "pdf", date: "2023-09-28" }
    ],
    createdAt: "2023-09-10"
  },
  {
    id: 4,
    name: "Carlos Muñoz",
    rut: "8.765.432-1",
    address: "Camino Largo 321, Antofagasta",
    phone: "+56944444444",
    email: "carlos.munoz@example.com",
    birthDate: "1982-05-17",
    gender: "Masculino",
    points: ["Empleo", "Capacitación"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Desempleado de larga data con baja calificación laboral.</p>",
    actionPlan: [
      {
        task: "Inscripción en curso de capacitación",
        dueDate: "2023-11-25",
        completed: true,
        responsible: "Cliente"
      }
    ],
    attachments: [],
    createdAt: "2023-08-20"
  },
  {
    id: 5,
    name: "Laura Díaz",
    rut: "16.284.937-5",
    address: "Plaza Central 654, La Serena",
    phone: "+56966666666",
    email: "laura.diaz@example.com",
    birthDate: "1995-02-28",
    gender: "Femenino",
    points: ["Maternidad adolescente", "Educación"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Madre adolescente con deserción escolar y necesidades básicas insatisfechas.</p>",
    actionPlan: [
      {
        task: "Inscripción en programa de reinserción escolar",
        dueDate: "2023-12-10",
        completed: false,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Certificado de nacimiento.pdf", type: "pdf", date: "2023-10-15" }
    ],
    createdAt: "2023-10-05"
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    rut: "11.223.344-5",
    address: "Callejón Oscuro 987, Iquique",
    phone: "+56977777777",
    email: "roberto.sanchez@example.com",
    birthDate: "1970-07-12",
    gender: "Masculino",
    points: ["Discapacidad", "Pensión"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Persona con discapacidad física sin acceso a pensión básica.</p>",
    actionPlan: [
      {
        task: "Tramitar certificado de discapacidad",
        dueDate: "2023-11-15",
        completed: true,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Informe médico.pdf", type: "pdf", date: "2023-09-01" }
    ],
    createdAt: "2023-08-25"
  },
  {
    id: 7,
    name: "Marta Contreras",
    rut: "14.567.892-3",
    address: "Avenida Norte 753, Temuco",
    phone: "+56988888888",
    email: "marta.contreras@example.com",
    birthDate: "1988-09-30",
    gender: "Femenino",
    points: ["Violencia de género", "Vivienda"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Víctima de violencia de género con necesidad realojamiento urgente.</p>",
    actionPlan: [
      {
        task: "Solicitar ingreso a casa de acogida",
        dueDate: "2023-11-10",
        completed: true,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Denuncia policial.pdf", type: "pdf", date: "2023-10-01" }
    ],
    createdAt: "2023-10-02"
  },
  {
    id: 8,
    name: "Pedro Vargas",
    rut: "7.654.321-9",
    address: "Pasaje Sur 246, Rancagua",
    phone: "+56999999999",
    email: "pedro.vargas@example.com",
    birthDate: "1992-12-05",
    gender: "Masculino",
    points: ["Migración", "Documentación"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Migrante en situación irregular con necesidad de regularización.</p>",
    actionPlan: [
      {
        task: "Asesoría legal para visa",
        dueDate: "2023-12-20",
        completed: false,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Pasaporte.jpg", type: "image", date: "2023-09-15" }
    ],
    createdAt: "2023-09-10"
  },
  {
    id: 9,
    name: "Isabel Ramírez",
    rut: "15.963.852-7",
    address: "Callejón Alto 135, Puerto Montt",
    phone: "+56922222222",
    email: "isabel.ramirez@example.com",
    birthDate: "1980-03-18",
    gender: "Femenino",
    points: ["Salud mental", "Empleo"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Depresión mayor con dificultades para mantener empleo estable.</p>",
    actionPlan: [
      {
        task: "Control psiquiátrico",
        dueDate: "2023-11-18",
        completed: false,
        responsible: "Cliente"
      },
      {
        task: "Búsqueda de empleo protegido",
        dueDate: "2023-12-01",
        completed: false,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [
      { name: "Receta médica.pdf", type: "pdf", date: "2023-10-12" }
    ],
    createdAt: "2023-09-28"
  },
  {
    id: 10,
    name: "Francisco Méndez",
    rut: "6.543.219-8",
    address: "Pasaje Bajo 864, Arica",
    phone: "+56933333333",
    email: "francisco.mendez@example.com",
    birthDate: "1975-06-22",
    gender: "Masculino",
    points: ["Vivienda", "Servicios básicos"],
    diagnosis: "<p><strong>Diagnóstico:</strong> Situación de calle reciente con necesidad de acceso a servicios básicos.</p>",
    actionPlan: [
      {
        task: "Inscripción en albergue municipal",
        dueDate: "2023-11-05",
        completed: true,
        responsible: "Trabajadora Social"
      },
      {
        task: "Solicitud de ayuda de servicios básicos",
        dueDate: "2023-11-12",
        completed: false,
        responsible: "Trabajadora Social"
      }
    ],
    attachments: [],
    createdAt: "2023-10-18"
  }
];

export default clientsData;

// DONE