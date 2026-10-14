export interface ProfileData {
  name: string;
  affiliation: string;
  department: string;
  institution: string;
  email: string;
  github: string;
  monogram: string;
  directions: string[];
  introduction: string;
  interestTags: string[];
}

export const profileData: ProfileData = {
  name: "Ekra Islam Ohi",
  affiliation: "Computer Science and Engineering student at Green University of Bangladesh",
  department: "Department of Computer Science and Engineering",
  institution: "Green University of Bangladesh",
  email: "ekraislamohi.academic@gmail.com",
  github: "https://github.com/ekraislam",
  monogram: "EIO",
  directions: [
    "AI/ML Engineering",
    "Research-Oriented Software Development",
    "Academic Research & International Higher Studies",
  ],
  introduction:
    "I am a Computer Science and Engineering student interested in machine learning, natural language processing, and the reliability of AI systems. I enjoy exploring technical problems and developing practical software projects that connect computing concepts with real-world needs.",
  interestTags: [
    "Machine Learning",
    "Natural Language Processing",
    "LLM Reliability & Evaluation",
    "AI-Assisted Citation Verification",
  ],
};
