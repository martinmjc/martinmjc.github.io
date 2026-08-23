/**
 * data.js
 * ------------------------------------------------------------------
 * Fuente única de contenido para el sitio. Todo lo que cambia con
 * frecuencia (publicaciones, proyectos, experiencia) vive aquí, separado
 * del HTML/CSS, para que agregar un ítem nuevo sea copiar un objeto
 * y rellenar sus campos: no hay que tocar script.js ni index.html.
 *
 * ------------------------------------------------------------------
 */

// -------------------- PERFIL --------------------
const PROFILE = {
  name: "Martín Jurado-Camacho",
  role: "PhD Candidate in Industrial Engineering",
  affiliation: "Pontificia Universidad Católica de Valparaíso (PUCV)",
  location: "Valparaíso, Chile",
  email: "martin.jurado.c@mail.pucv.cl",
  bio: `PhD Candidate in Industrial Engineering at the Pontificia Universidad Católica de Valparaíso (PUCV). My work focuses on developing
    bio-inspired and hybrid optimization methods for manufacturing and
    industrial maintenance problems, incorporating machine reliability
    criteria into operational decision-making.`,
  researchLines: [
    {
      icon: "fa-diagram-project",
      title: "Industrial Optimization",
      description:
        "Design and application of metaheuristics and bio-inspired algorithms for combinatorial problems in manufacturing and operations.",
    },
    {
      icon: "fa-gears",
      title: "Asset Management",
      description:
        "Industrial maintenance strategies focused on availability and the life cycle of production assets.",
    },
    {
      icon: "fa-shield-halved",
      title: "Reliability Engineering",
      description:
        "Modeling machine reliability and incorporating it as a decision criterion in production system design problems.",
    },
    {
      icon: "fa-dna",
      title: "Metaheuristics",
      description:
        "Development of nature-inspired hybrid algorithms to solve large-scale NP-hard optimization problems.",
    },
  ],
  // Enlaces a perfiles académicos y redes profesionales.
  profiles: [
    {
      name: "Google Scholar",
      icon: "fa-graduation-cap",
      url: "https://scholar.google.com/citations?user=qEHczDQAAAAJ&hl=es",
    },
    {
      name: "ORCID",
      icon: "fa-brands fa-orcid",
      url: "https://orcid.org/0009-0007-5909-7512",
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/martin-miguel-jurado-camacho-b266901b4",
    },
    {
      name: "Email",
      icon: "fa-solid fa-envelope",
      url: "mailto:martin.jurado.c@mail.pucv.cl",
    },
  ],
};

// -------------------- PUBLICACIONES --------------------
/**
 * Extraídas de Google Scholar / ORCID (verificado 2026-08-23).
 * Para agregar una nueva publicación, copia el objeto y complétalo.
 * Campos:
 *  - title:    Título del artículo.
 *  - authors:  Autores tal como figuran en la publicación.
 *  - venue:    Revista o conferencia.
 *  - year:     Año de publicación.
 *  - doi:      DOI (sin el prefijo https://doi.org/), o null si no hay.
 *  - type:     "journal" | "conference" | "preprint" | "other".
 *  - tags:     Palabras clave para futura categorización/filtrado.
 */
const PUBLICATIONS = [
  {
    title:
      "Hybrid Nature-Inspired Optimization for the Cell Formation Problem with Machine Reliability and Alternative Routings",
    authors:
      "P. Figueroa-Torrez, B. Crawford, O. Durán, M. Jurado-Camacho, et al.",
    venue: "Biomimetics",
    volumeInfo: "11(6), 387",
    year: 2026,
    doi: "10.3390/biomimetics11060387",
    type: "journal",
    tags: ["Metaheuristics", "Reliability", "Manufacturing"],
  },
];

// -------------------- PROYECTOS DE INVESTIGACIÓN --------------------
/**
 * Sin proyectos públicos verificables por el momento.
 * Estructura de referencia para agregar uno nuevo:
 * {
 *   title: "Nombre del proyecto",
 *   period: "2026 – present",
 *   role: "Researcher / Collaborator",
 *   description: "Breve descripción del proyecto y su objetivo.",
 *   tags: ["Palabra clave 1", "Palabra clave 2"],
 *   link: "https://enlace-opcional.cl" // o null
 * }
 */
const PROJECTS = [];

// -------------------- DOCENCIA / EXPERIENCIA --------------------
/**
 * Línea de tiempo de formación y experiencia (orden más reciente primero).
 * Los ítems de experiencia laboral vienen del CV del candidato (enero
 * 2026), a partir de "Maintenance Supervisor" — los cargos anteriores
 * a ese se dejaron fuera a pedido del candidato. Los tres cargos que
 * tuvo en el INE (Jefe de Zona, Supervisor de Brigada, Encuestador)
 * se fusionaron en un solo registro como "Consultant".
 * Estructura de referencia para agregar un ítem nuevo:
 * {
 *   period: "2026 – present",
 *   title: "Cargo o programa",
 *   place: "Institución",
 *   description: "Detalle breve."
 * }
 */
const EXPERIENCE = [
  {
    period: "Aug 2026 – present",
    title: "Adjunct Professor",
    place: "Universidad Católica Boliviana \"San Pablo\" Santa Cruz, Bolivia",
    description:
      "Course: Industrial Simulation and Optimization in the Industrial Engineering Program, Department of Engineering and Exact Sciences.",
  },
  {
    period: "Aug 2025 – present",
    title: "Adjunct Professor",
    place: "Universidad Católica Boliviana \"San Pablo\" Tarija, Bolivia",
    description:
      "Courses: Information Engineering and Industrial Simulation and Optimization in the Industrial Engineering Program, Department of Engineering and Exact Sciences; and Module 2, Multivariate Statistics, in the Postgraduate Diploma in Marketing Metrics and Research.",
  },

  {
    period: "Mar 2025",
    title: "Workshop Speaker",
    place: "Universidad Católica Boliviana \"San Pablo\" Tarija, Bolivia",
    description:
      "Delivered the workshop \"Programming Solutions in Industrial Engineering\" for students and faculty at UCB's Tarija campus.",
  },
  {
    period: "Jan 2024 – Dec 2024",
    title: "Consultant",
    place: "National Institute of Statistics (INE), Bolivia, La Paz, Bolivia",
    description:
      "Consultant for Bolivia's 2024 Population and Housing Census and Household Survey. Supervised a six-member team in data collection, verification, validation, and transcription.",
  },
  {
    period: "Aug 2023 – Jan 2024",
    title: "Systems Manager",
    place: "Rojas Distribuciones y Representaciones, La Paz, Bolivia",
    description:
      "Managed computing systems and databases; implemented the OVP commercial management system and led the migration to electronic invoicing.",
  },
  {
    period: "Apr 2022 – Apr 2023",
    title: "Maintenance Manager",
    place: "Embutidos La Española, El Alto, Bolivia",
    description:
      "Led maintenance operations across two production plants, managing preventive programs to maximize equipment availability and executing corrective maintenance to minimize downtime.",
  },
];
