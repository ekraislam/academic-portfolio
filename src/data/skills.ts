export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for algorithms, machine learning prototypes, and software systems.",
    skills: ["Python", "C", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "ai-ml",
    title: "AI, Machine Learning & NLP",
    description: "Deep learning frameworks, computer vision architectures, and natural language modeling.",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "Scikit-Learn",
      "OpenCV",
      "Grad-CAM (Explainable AI)",
      "DCGAN Generative Models",
      "PubMedBERT & Transformer Fine-Tuning",
    ],
  },
  {
    id: "systems",
    title: "Systems, Toolchain & Web Engineering",
    description: "Containerization, version control, database design, and modern client/server engineering.",
    skills: [
      "Docker",
      "Git & GitHub",
      "Linux / Bash",
      "Fastify & Node.js",
      "React & TypeScript",
      "PostgreSQL & Supabase",
      "Progressive Web Apps (PWA)",
      "Vite & Build Tooling",
    ],
  },
  {
    id: "research-methods",
    title: "Research & Analytical Methodologies",
    description: "Systematic scientific workflows applied across published manuscripts and research repositories.",
    skills: [
      "Context Isolation Protocols",
      "Evidence-Aware Stance Verification",
      "Bilingual OCR Extraction Pipelines",
      "Synthetic Patch Data Augmentation",
      "Post-Hoc Saliency Heatmap Analysis",
      "Empirical Model Evaluation & Metrics",
    ],
  },
];
