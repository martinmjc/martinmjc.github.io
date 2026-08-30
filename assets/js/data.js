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
  baseCredential: "Electronic Engineer, Universidad Mayor de San Andrés (UMSA), La Paz, Bolivia",
  role: "PhD Candidate in Industrial Engineering",
  affiliation: "Pontificia Universidad Católica de Valparaíso (PUCV)",
  location: "Valparaíso, Chile",
  email: "martin.jurado.c@mail.pucv.cl",
  bio: `PhD Candidate in Industrial Engineering at the Pontificia Universidad Católica de Valparaíso (PUCV), working at the Asset Management Laboratory. My research addresses maintenance and spare parts decisions in capital-intensive industries, particularly mining, where reliability estimates must be built from sparse failure histories and largely unstructured maintenance records. I combine reliability and degradation modelling with mathematical programming, metaheuristics and machine learning, with a particular interest in how the operational information that plants already keep, including free-text work orders, can be turned into parameters that decision models can actually use. Before starting the PhD I led maintenance operations in industry, which is where these questions come from.`,
  // Se usan como píldoras cortas debajo del nombre en el Hero.
  researchLines: ["Industrial Optimization", "Asset Management", "Reliability Engineering"],
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
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/martinmjc",
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
 * Experiencia dividida en dos categorías (cada una en orden más
 * reciente primero), pero ambas se muestran juntas dentro de la
 * sección "Experience" del sitio, en dos columnas:
 *  - academic:  docencia, charlas y talleres en universidades.
 *  - industry:  cargos profesionales fuera del ámbito académico.
 *
 * Los ítems de experiencia laboral vienen del CV del candidato (enero
 * 2026), a partir de "Maintenance Supervisor" — los cargos anteriores
 * a ese se dejaron fuera a pedido del candidato. Los tres cargos que
 * tuvo en el INE (Jefe de Zona, Supervisor de Brigada, Encuestador)
 * se fusionaron en un solo registro como "Consultant".
 *
 * Estructura de referencia para agregar un ítem nuevo (a la lista que
 * corresponda):
 * {
 *   period: "2026 – present",
 *   title: "Cargo o programa",
 *   place: "Institución",
 *   description: "Detalle breve."
 * }
 */
const EXPERIENCE = {
  academic: [
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
  ],
  industry: [
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
  ],
};
