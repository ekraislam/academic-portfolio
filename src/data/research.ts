export interface ResearchArea {
  id: string;
  title: string;
  category: string;
  description: string;
  focusTopics: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "llm-reliability",
    title: "LLM Reliability & Citation Verification",
    category: "Primary Research Interest",
    description:
      "Exploring approaches to improve reliability in large language models through factual attribution, evaluation of claim grounding against scientific literature, and structured context isolation.",
    focusTopics: [
      "Evidence-Aware Stance Classification",
      "Hallucination Detection in Academic Synthesis",
      "Context Isolation Protocols",
      "Scientific Claim Verification",
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing & Low-Resource Computing",
    category: "Exploration Area",
    description:
      "Exploring language representation models, document intelligence, and text classification with particular emphasis on regional and low-resource languages such as Bengali.",
    focusTopics: [
      "Bengali Document OCR & Text Extraction",
      "Linguistic Pattern Analysis & Disinformation Detection",
      "Domain-Specific Transformer Adaptation",
    ],
  },
  {
    id: "computer-vision",
    title: "Applied Computer Vision & Interpretable AI",
    category: "Exploration Area",
    description:
      "Examining convolutional neural network architectures for specialized image classification tasks, coupled with post-hoc explainability methods to visualize model decision boundaries.",
    focusTopics: [
      "Deep Transfer Learning (ResNet Architectures)",
      "Gradient-Weighted Class Activation Mapping (Grad-CAM)",
      "Synthetic Patch Augmentation for Imbalanced Datasets",
    ],
  },
  {
    id: "machine-learning",
    title: "Foundations of Machine Learning & Systems",
    category: "Methodological Interest",
    description:
      "Studying core statistical learning algorithms, evaluation metrics, pipeline optimization, and the practical software engineering required to deploy reliable AI systems into accessible client environments.",
    focusTopics: [
      "Pipeline Reproducibility & Scikit-Learn Workflows",
      "Evaluation Metrics & Error Analysis",
      "Lightweight Client-Side & Edge Deployment",
    ],
  },
];
