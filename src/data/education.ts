export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  description: string;
  relevantCoursework: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    institution: "Green University of Bangladesh",
    period: "2022 – 2026 (Expected)",
    status: "Undergraduate Degree Candidate",
    location: "Dhaka, Bangladesh",
    description:
      "Rigorous coursework in computational theory, algorithm design, software systems, and artificial intelligence, coupled with applied research in machine learning and natural language processing.",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Machine Learning & Pattern Recognition",
      "Operating Systems & Systems Programming",
      "Database Management Systems",
      "Object-Oriented Programming (C++/Java)",
      "Computer Networks & Data Communication",
      "Software Engineering & Object-Oriented Design",
    ],
  },
];
