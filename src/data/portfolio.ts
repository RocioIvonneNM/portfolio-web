export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  overview: string;
  highlights: string[];
  tech: string[];
  accent: string;
  symbol: string;
  kind: "Professional case study" | "Academic project";
};

export const projects: Project[] = [

{
  slug: "rfid-mobile-solutions",
  title: "RFID Mobile Solutions",
  eyebrow: "MOBILE · IOT",
  summary:
    "Multi-tenant RFID applications for asset tracking, inventory management, and tag reading and writing.",
  overview:
    "A collection of enterprise RFID solutions developed at COMNET, combining Flutter, Android, hardware integration, and cloud services.",
  highlights: [
    "Developed specialized and configurable RFID workflows",
    "Integrated handheld and desktop RFID readers",
    "Implemented tag reading, writing, and validation",
    "Built inventory reconciliation and asset tracking features",
  ],
  tech: ["Flutter", "Dart", "Android", "RFID SDKs"],
  accent: "pink",
  symbol: "✿",
  kind: "Professional case study",
},

  {
    slug: "multi-tenant-cloud-api", title: "Multi-Tenant Cloud API", eyebrow: "BACKEND · CLOUD",
    summary: "A cloud backend for assets, locations, transactions, and multi-tenant operations.",
    overview: "Designed and developed a REST API for enterprise applications, integrating cloud infrastructure, authentication, asset data, and transaction workflows.",
    highlights: ["Implemented REST endpoints for business workflows", "Worked with multi-tenant data separation and authentication", "Integrated Cloud Run, API Gateway, and Firestore"],
    tech: ["Node.js", "Express", "Firestore", "Google Cloud"], accent: "blue", symbol: "☁", kind: "Professional case study",
  },
  {
    slug: "enterprise-dashboard", title: "Enterprise Operations Dashboard", eyebrow: "FULL STACK · WEB",
    summary: "Web dashboards for inventory, reporting, and operational insights.",
    overview: "Developed web interfaces that make cloud API data useful through operational views, reports, inventory modules, and location-based workflows.",
    highlights: ["Built dashboards and interactive operational views", "Connected frontend modules to backend services", "Worked on inventory and RFID-related workflows"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"], accent: "yellow", symbol: "✳", kind: "Professional case study",
  },

{
  slug: "nuevamente",
  title: "NuevaMente",
  eyebrow: "AI · BACKEND · HACKATHON",
  summary:
    "AI-powered learning platform that transforms institutional documents into personalized educational content using RAG and intelligent agents.",
  overview:
    "NuevaMente is a collaborative AI education platform developed during the Alura Latam × No Country Hackathon. It transforms institutional documents into personalized learning materials through Retrieval-Augmented Generation and multi-agent AI workflows. My contributions focused on backend development with Python and FastAPI, REST API integration with the Streamlit frontend, RAG context retrieval, and AI agent orchestration using LangGraph.",
  highlights: [
    "Developed backend functionality using Python and FastAPI.",
    "Built REST APIs connecting backend services with the Streamlit frontend.",
    "Worked on LangGraph workflows involving Researcher, Writer, and Reviewer agents.",
    "Improved RAG context retrieval from institutional documents.",
    "Enhanced AI-generated content validation for source fidelity, pedagogical quality, and formatting.",
    "Collaborated with a multidisciplinary Latin American team through GitHub, pull requests, and integration testing."
  ],
  tech: [
    "Python",
    "FastAPI",
    "LangGraph",
    "Gemini",
    "RAG",
    "FAISS",
    "REST APIs",
    "Streamlit"
  ],
  accent: "lilac",
  symbol: "✦",
  kind: "Academic project",
},

  {
    slug: "document-similarity", title: "Document Similarity Screening", eyebrow: "ACADEMIC · BACKEND",
    summary: "Institutional Java module for preliminary PDF similarity screening.",
    overview: "Graduation project developed for an existing institutional platform at SEP. It supported preliminary document similarity review, submission history, and role-based access. Screening results supported a subsequent human review process.",
    highlights: ["Integrated a document screening module into an existing platform", "Worked with PDF processing and rule-based classification", "Supported authentication, review workflows, and database persistence"],
    tech: ["Java", "HTML", "CSS", "MySQL", "PostgreSQL"], accent: "blue", symbol: "✎", kind: "Academic project",
  },
  {
    slug: "finabien-apps", title: "FINABIEN Internal Applications", eyebrow: "ACADEMIC · JAVA",
    summary: "Android access control and a web inventory tool developed during social service.",
    overview: "During university social service, I built two internal applications: a barcode-based personnel check-in/check-out app and a sports inventory/resource tracking system.",
    highlights: ["Built personnel access tracking using barcode scanning", "Implemented timestamp and entry/exit validation", "Developed a local inventory and resource management application"],
    tech: ["Java", "Android Studio", "MySQL", "HTML", "CSS"], accent: "pink", symbol: "♡", kind: "Academic project",
  },
];

export const experience = [
  { period: "2025 — Present", organization: "COMNET", position: "AI & IoT Engineer", description: "From POS configuration and deployment coordination to Flutter RFID applications, cloud APIs, enterprise dashboards, inventory workflows, and AI-powered tools.", accent: "lilac" },
  { period: "2024", organization: "Secretaría de Educación Pública", position: "Graduation Project", description: "Built a Java-based preliminary document similarity screening module integrated into an institutional platform.", accent: "yellow" },
  { period: "2023", organization: "FINABIEN", position: "University Social Service", description: "Developed an Android personnel access control app and a web inventory/resource management system.", accent: "blue" },
];

export const skills = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"], accent: "pink" },
  { group: "Backend", items: ["Node.js", "Express", "Java", "Python", "REST APIs"], accent: "yellow" },
  { group: "Mobile & IoT", items: ["Flutter", "Dart", "Android", "RFID", "Hardware SDKs"], accent: "blue" },
  { group: "Cloud & Data", items: ["Google Cloud", "Cloud Run", "API Gateway", "Firebase", "Firestore", "MySQL", "PostgreSQL"], accent: "lilac" },
  { group: "AI & Workflow", items: ["AI Agents", "RAG", "Conversational AI", "Git", "GitHub"], accent: "pink" },
];
