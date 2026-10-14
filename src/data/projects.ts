export type ProjectCategory =
  | "AI & NLP"
  | "Computer Vision"
  | "Software & Systems"
  | "Academic Tools"
  | "Interactive & Creative";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  repositoryUrl: string;
  demoUrl?: string;
  isFeatured: boolean;
}

export const allProjects: Project[] = [
  // ==========================================
  // Six Featured Projects (1 to 6)
  // ==========================================
  {
    id: "citationguard-ai",
    title: "CitationGuard AI",
    subtitle: "Evidence-Aware Citation Verification System",
    description:
      "A computational project designed to identify unsupported claims and evaluate evidence grounding in academic contexts. Fine-tuned on biomedical literature using PubMedBERT, it evaluates 3-class stance relationships (Supported, Contradicted, Not Enough Evidence) under a context isolation protocol to improve citation verification reliability.",
    technologies: ["Python", "PyTorch", "PubMedBERT", "Transformers", "NLP"],
    category: "AI & NLP",
    repositoryUrl: "https://github.com/ekraislam/citationguard-ai",
    isFeatured: true,
  },
  {
    id: "bangla-document-intelligence",
    title: "Bangla Document Intelligence",
    subtitle: "Bengali & English OCR Pipeline and Real-Time Search Engine",
    description:
      "A document intelligence system featuring an OCR extraction pipeline optimized for standard hardware alongside an in-memory text search engine. Converts multi-page PDFs to images via PyMuPDF, provides document metrics, and includes containerized Docker configurations.",
    technologies: ["Python", "EasyOCR", "PyMuPDF", "Streamlit", "Docker"],
    category: "AI & NLP",
    repositoryUrl: "https://github.com/ekraislam/bangla-document-intelligence",
    isFeatured: true,
  },
  {
    id: "butterfly-species-classification",
    title: "Butterfly Species Classification",
    subtitle: "Computer Vision & Explainable AI (XAI) with Grad-CAM",
    description:
      "An end-to-end computer vision system for classifying 8 distinct butterfly species using deep transfer learning with a ResNet-18 backbone. Implements native PyTorch Grad-CAM hooks targeting the final convolutional block to generate real-time visual explainability heatmaps for model interpretability.",
    technologies: ["Python", "PyTorch", "ResNet-18", "Grad-CAM", "Streamlit"],
    category: "Computer Vision",
    repositoryUrl: "https://github.com/ekraislam/butterfly-species-classification",
    demoUrl: "https://ai-butterfly-vision.streamlit.app/",
    isFeatured: true,
  },
  {
    id: "riceguard-ai",
    title: "RiceGuard AI",
    subtitle: "Rice Leaf Image Classification with GAN Augmentation & Grad-CAM",
    description:
      "A computer vision project for rice leaf image classification using PyTorch and ResNet-18 across 8 botanical categories. Employs Deep Convolutional GAN (DCGAN) for synthetic patch augmentation to address class imbalance, paired with Grad-CAM visualization to localize pathological lesion regions.",
    technologies: ["Python", "PyTorch", "ResNet-18", "DCGAN", "Grad-CAM"],
    category: "Computer Vision",
    repositoryUrl: "https://github.com/ekraislam/rice-leaf-disease-detection",
    demoUrl: "https://rice-leaf-disease-detection-1-1m1k.onrender.com/",
    isFeatured: true,
  },
  {
    id: "momin-agro",
    title: "Momin Agro",
    subtitle: "Smart Dairy & Biogas Management System",
    description:
      "A mobile-first operational management web application designed for family dairy farms and biogas plants. Built with React and TypeScript on Vite, backed by Supabase PostgreSQL with Row Level Security (RLS) policies, cattle profiling, milk yield logs, and financial records.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "RLS"],
    category: "Software & Systems",
    repositoryUrl: "https://github.com/ekraislam/agro-farm-management",
    demoUrl: "https://agro-farm-management.vercel.app/",
    isFeatured: true,
  },
  {
    id: "uniplanner",
    title: "UniPlanner",
    subtitle: "Academic Planner & GPA Forecasting PWA with Offline Support",
    description:
      "A responsive Progressive Web App designed for university students to manage courses, assessments, grades, and GPA calculations. Implements offline capability using Service Worker caching and browser local storage, with support for Bangladesh UGC 4.0 and US 4.0 grading scales.",
    technologies: ["TypeScript", "React", "PWA", "Service Worker", "Client Storage"],
    category: "Academic Tools",
    repositoryUrl: "https://github.com/ekraislam/uniplanner",
    demoUrl: "https://uniplanner-ohi3.vercel.app/",
    isFeatured: true,
  },

  // ==========================================
  // Seven Additional Projects (7 to 13)
  // ==========================================
  {
    id: "bangla-fake-news-detector",
    title: "Bangla Fake News Detector",
    subtitle: "Bengali News Text Classification Pipeline (সত্যপরীক্ষা)",
    description:
      "An academic machine learning and NLP project evaluating linguistic patterns and vocabulary distributions in Bengali news articles. Built with a Scikit-Learn pipeline utilizing sublinear TF-IDF vectorization and balanced logistic regression for lexical classification.",
    technologies: ["Python", "Scikit-Learn", "TF-IDF", "Logistic Regression", "NLP"],
    category: "AI & NLP",
    repositoryUrl: "https://github.com/ekraislam/BanglaFakeNewsDetector",
    isFeatured: false,
  },
  {
    id: "oscope",
    title: "OScope",
    subtitle: "Operating Systems Concept & Algorithm Observatory",
    description:
      "An interactive educational simulator for fundamental operating systems concepts. Implements five focused laboratories covering CPU process scheduling (FCFS, SJF, SRTF, Round Robin, Priority), virtual memory page replacement policies (FIFO, LRU, Optimal), and Banker's algorithm for deadlock avoidance.",
    technologies: ["TypeScript", "React", "Operating Systems", "Simulation Algorithms"],
    category: "Academic Tools",
    repositoryUrl: "https://github.com/ekraislam/oscope",
    isFeatured: false,
  },
  {
    id: "error-detection-simulator",
    title: "Error Detection & Correction Simulator",
    subtitle: "Interactive Data Link Layer Laboratory Environment",
    description:
      "A Python and Flask-based educational simulator covering seven data communication algorithms: Character and Bit Stuffing framing, 1D and 2D Parity checks, RFC 1071 Internet Checksum, CRC polynomial division, Hamming code single-error correction, and Hamming distance theory, complete with calculation traces.",
    technologies: ["Python", "Flask", "Networking", "Error Correction", "Algorithms"],
    category: "Academic Tools",
    repositoryUrl: "https://github.com/ekraislam/error-detection-correction-simulator",
    isFeatured: false,
  },
  {
    id: "remember-memory-game",
    title: "REMEMBER",
    subtitle: "Cognitive Working Memory Benchmark Game",
    description:
      "An interactive memory benchmark web application designed around working memory thresholds (Miller's Law 7 ± 2). Features adaptive difficulty progression across seven stages, Progressive Web App architecture with documented service worker offline support, and client-side canvas certificate generation.",
    technologies: ["TypeScript", "PWA", "Service Worker", "Canvas API", "Web Audio"],
    category: "Interactive & Creative",
    repositoryUrl: "https://github.com/ekraislam/Remember-Memory-Game",
    demoUrl: "https://remember-memory-game.vercel.app/",
    isFeatured: false,
  },
  {
    id: "event-horizon-3d",
    title: "Event Horizon 3D",
    subtitle: "Relativistic Black Hole WebGL Simulation",
    description:
      "An interactive 3D WebGL relativistic space visualization built with Three.js and custom GLSL shaders. Simulates optical effects around a supermassive black hole, including gravitational light-bending accretion disk arches, relativistic Doppler beaming shaders, starfield microlensing deflection, and interactive camera controls.",
    technologies: ["JavaScript", "Three.js", "WebGL", "GLSL Shaders", "Post-Processing"],
    category: "Interactive & Creative",
    repositoryUrl: "https://github.com/ekraislam/Event-Horizon-",
    isFeatured: false,
  },
  {
    id: "lifeline-charity",
    title: "LifeLine",
    subtitle: "Charity & NGO Operations Management Platform",
    description:
      "A full-stack web application designed for non-profit and charitable organizations. Features multi-role access control (Admin, NGO, Volunteer, Donor, Beneficiary), fundraising campaign tracking, volunteer event signups, donation logging, and containerized deployment with Docker Compose.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Docker"],
    category: "Software & Systems",
    repositoryUrl: "https://github.com/ekraislam/Lifeline-Charity",
    isFeatured: false,
  },
  {
    id: "ohi-workspace",
    title: "Ohi Workspace",
    subtitle: "Interactive Developer Workspace & Portfolio Exploration",
    description:
      "A personal developer workspace and portfolio web project created with React and JavaScript on Vite. Serves as a sandbox for prototyping interface components, organizing project repositories, and experimenting with frontend design patterns.",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    category: "Interactive & Creative",
    repositoryUrl: "https://github.com/ekraislam/ohi-workspace",
    isFeatured: false,
  },
];

export const featuredProjects: Project[] = allProjects.filter((p) => p.isFeatured);
