import filmAdviserImage from "../assets/Film_Adviserpng.png";
import driftlessImage from "../assets/driftlesspng.png";
import financeAnalyticsImage from "../assets/finance_analytics engine.png";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "OCaml", "C#"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "FastAPI",
      "React",
      "Tailwind CSS",
      "Laravel",
      "REST APIs",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "FastAPI",
      "REST APIs",
      "Backend Architecture",
      "Database Integration",
      "API Development",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Responsive UI Design",
      "Modern Web Interfaces",
    ],
  },
  {
    title: "AI Systems Engineering",
    skills: [
      "AI Agent Development",
      "Retrieval-Augmented Systems",
      "LLM Integrations",
      "Automation Pipelines",
      "Scalable AI Workflows",
    ],
  },
  {
    title: "Data Structures & Core Engineering",
    skills: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "System Design Fundamentals",
      "Problem Solving",
    ],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Postman", "Deployment Fundamentals"],
  },
];

export const projects = [
  {
    image: filmAdviserImage,
    title: "Film Adviser",
    shortDescription:
      "AI-powered movie recommendation platform using intelligent preference analysis and modern full-stack development.",
    description:
      "A full-stack AI-powered movie recommendation platform built for collaborative decision-making, combining React frontend development, FastAPI backend architecture, vector database retrieval systems, and intelligent recommendation pipelines. The system integrates modern AI application development principles with practical user-focused product design.",
    techStack:
      "Python, FastAPI, React, Tailwind CSS, AI Systems Development, Vector Databases, API Integration",
    github: "https://github.com/buchqi/Ai_Powered_Apps_Turing_Titans.git",
    demo: "https://joyful-intuition-production-606c.up.railway.app/",
  },
  {
    image: driftlessImage,
    title: "Driftless",
    shortDescription:
      "Developer-focused API documentation automation platform with SaaS-oriented product strategy.",
    description:
      "A software product designed to automate API documentation generation for backend repositories by analyzing codebases and extracting endpoint structures. Built with both technical product development and business scalability in mind, Driftless demonstrates backend engineering, product strategy, growth modeling, and SaaS-oriented technical execution.",
    techStack:
      "ASP.NET, React, Product Development, API Systems, SaaS Modeling",
    github:
      "https://github.com/nikatopu/product-development-team-localhost-3000.git",
    demo: "https://product-development-team-localhost.vercel.app/?fbclid=IwY2xjawR4JkpleHRuA2FlbQIxMABicmlkETE1SFhubVNDWlNnYWs0Vm1Mc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrB1iyTS1dcUelMCOzwG57vhcQOpgQyLWizIkruMrBl--6igVphj55rQaz4E_aem_9TUe5kmewvX3Qzc5CjKa6Q",
  },
  {
    image: financeAnalyticsImage,
    title: "Finance Analytics Engine",
    shortDescription:
      "Python-based financial transaction analytics system with custom data structures and CLI workflow.",
    description:
      "A portfolio-grade financial analytics platform built with Python, featuring object-oriented architecture, custom data structures, sorting/searching algorithms, CSV import/export systems, transaction filtering, and command-line interface integration. Designed to demonstrate practical software engineering fundamentals, backend logic, and scalable data processing.",
    techStack:
      "Python, OOP, Data Structures, Algorithms, CSV Processing, CLI Development,",
    github: "https://github.com/buchqi/finance-analytics-engine.git",
    demo: "[DEMO_LINK]",
  },
];

export const achievements = [
  {
    title: "Millennium Innovations Award Winner",
    description:
      "Recognized through a major national STEM and innovation competition for advanced technical problem-solving, innovation, and project excellence. This achievement reflects strong analytical capabilities, engineering mindset, and early high-level technical performance.",
    date: "STEM Achievement",
  },
  {
    title: "NASA Space Center University Program — Houston, Texas",
    description:
      "Selected for advanced STEM and technical educational development through NASA Space Center University in Houston, Texas, gaining exposure to high-level innovation environments, engineering concepts, and global scientific learning experiences.",
    date: "International Technical Development",
  },
  {
    title: "STEM Educator & Technical Trainer",
    description:
      "Worked as a trainer and educator in robotics, logic, and technical learning, teaching younger students practical STEM concepts while developing leadership, communication, and mentorship skills.",
    date: "Leadership & Education",
  },
  {
    title: "AI Systems Engineering",
    description:
      "Designed and developed multiple advanced portfolio projects involving backend systems, AI-powered applications, automation workflows, and full-stack technical products, demonstrating strong practical engineering growth.",
    date: "Ongoing Professional Development",
  },
];
