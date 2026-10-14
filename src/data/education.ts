export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  status: string;
  location: string;
  description: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    institution: "Green University of Bangladesh",
    status: "Current Student (Undergraduate)",
    location: "Dhaka, Bangladesh",
    description:
      "Engaged in foundational computer science coursework, software engineering laboratories, and research explorations in machine learning and natural language processing.",
  },
];
