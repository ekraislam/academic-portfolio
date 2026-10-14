import photoUrl from "../assets/ekra-islam-ohi.jpg";
import cvUrl from "../assets/Ekra_Islam_Ohi_Academic_CV.pdf";

export interface ProfileData {
  name: string;
  affiliation: string;
  department: string;
  institution: string;
  email: string;
  github: string;
  linkedin: string;
  phone?: string;
  whatsapp?: string;
  whatsappUrl?: string;
  monogram: string;
  photoUrl?: string;
  cvUrl?: string;
  directions: string[];
  introduction: string;
  interestTags: string[];
}

export const profileData: ProfileData = {
  name: "Ekra Islam Ohi",
  affiliation: "B.Sc. in Computer Science & Engineering Candidate at Green University of Bangladesh",
  department: "Department of Computer Science and Engineering",
  institution: "Green University of Bangladesh",
  email: "ekraislamohi.academic@gmail.com",
  github: "https://github.com/ekraislam",
  linkedin: "https://www.linkedin.com/in/ekra-islam-ohi",
  phone: "+880 1581-828741",
  whatsapp: "+880 1581-828741",
  whatsappUrl: "https://wa.me/8801581828741?text=Hello%20Ekra,%20I%20visited%20your%20academic%20portfolio",
  monogram: "EIO",
  photoUrl: photoUrl,
  cvUrl: cvUrl,
  directions: [
    "AI/ML & Systems Engineering",
    "Evidence Grounding & NLP Reliability",
    "International Graduate Studies (MS/PhD)",
  ],
  introduction:
    "Undergraduate researcher and software engineer specializing in machine learning reliability, citation verification, and explainable computer vision. Passionate about designing robust, verifiable computational tools that solve real-world problems and bridge theoretical algorithms with dependable software architectures.",
  interestTags: [
    "Machine Learning",
    "Natural Language Processing",
    "Explainable AI (Grad-CAM)",
    "Citation Stance Verification",
    "Offline-First Systems",
  ],
};
