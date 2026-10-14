export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: "Under Review" | "In Preparation" | "Working Paper";
  statusBadge: string;
  abstract: string;
  keywords: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  notes?: string;
}

export const publicationsData: Publication[] = [
  {
    id: "riceguard-ai-manuscript",
    title:
      "Explainable Deep Transfer Learning and Generative Augmentation for Rice Leaf Disease Classification",
    authors: ["Ekra Islam Ohi", "Faculty Advisors & Research Collaborators"],
    venue: "Academic Conference Submission (Faculty Supervised)",
    year: "2025",
    status: "Under Review",
    statusBadge: "Conference Manuscript • In Peer Review Process",
    abstract:
      "Investigates deep transfer learning using ResNet-18 architectures coupled with Deep Convolutional GAN (DCGAN) synthetic patch generation to mitigate severe class imbalance across 8 botanical condition classes. Integrates Gradient-weighted Class Activation Mapping (Grad-CAM) saliency maps to provide transparent, visually verifiable localization of pathological plant lesions.",
    keywords: [
      "Computer Vision",
      "Agricultural Deep Learning",
      "ResNet-18",
      "DCGAN Augmentation",
      "Grad-CAM Explainability",
      "Transfer Learning",
    ],
    repositoryUrl: "https://github.com/ekraislam/rice-leaf-disease-detection",
    demoUrl: "https://rice-leaf-disease-detection-1-1m1k.onrender.com/",
    notes: "Drafted under faculty supervision; currently submitted for conference review.",
  },
  {
    id: "citationguard-working-paper",
    title:
      "Evidence-Aware Citation Stance Verification and Hallucination Reduction via Context Isolation",
    authors: ["Ekra Islam Ohi"],
    venue: "Technical Research Report & Working Manuscript",
    year: "2025",
    status: "In Preparation",
    statusBadge: "Working Manuscript • In Preparation",
    abstract:
      "Explores stance detection mechanisms for validating AI-synthesized claims against biomedical literature using fine-tuned PubMedBERT models. Implements strict context isolation protocols to determine 3-class evidential relationships (Supported, Contradicted, Not Enough Evidence) without trusting ungrounded parametric model memory.",
    keywords: [
      "Natural Language Processing",
      "Citation Verification",
      "PubMedBERT",
      "LLM Reliability",
      "Context Isolation",
    ],
    repositoryUrl: "https://github.com/ekraislam/citationguard-ai",
    notes: "Active research exploration focusing on verifiable bibliographic attribution.",
  },
];
