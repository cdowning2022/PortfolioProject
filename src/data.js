export const profile = {
  name: "Cole Downing",
  tagline: "CS senior at FAU. I build things with Python, deep learning, and full-stack tools.",
  location: "Lake Mary, FL",
  email: "cpdowning2@icloud.com",
  github: "https://github.com/cdowning2022",
  linkedin: "https://www.linkedin.com/in/cole-downing-991309218",
};

export const about = `Computer Science senior at Florida Atlantic University, graduating August 2026. Currently exploring the intersection of machine learning through a senior project on deep learning for narcolepsy detection. Looking for entry-level software engineering or ML roles where I can keep building and learning.`;

export const skills = {
  Languages: ["Python", "Java", "C/C++", "C#", "JavaScript", "Swift", "SQL"],
  "Frameworks & Libraries": ["React", "Node.js", "HTML/CSS", "jQuery", "TensorFlow"],
  Tools: ["Git", "Visual Studio", "Google Colab", "VS Code"],
  "Operating Systems": ["Linux", "Windows", "macOS"],
};

export const projects = [
  {
    title: "Narcolepsy Detection",
    description: "Deep learning model that analyzes EEG brainwave data to detect narcolepsy and classify its severity. Generates hypnograms for clinical interpretability.",
    role: "Team project for Engineering Design 2",
    tech: ["Python", "TensorFlow", "Google Colab", "JavaScript"],
    github: "https://github.com/cdowning2022/narcolepsy-detection",
    demo: "https://youtu.be/R3L0COZ5d-k",
    featured: true,
  },
  {
    title: "BudgetBuddy",
    description: "Full-stack expense tracking web app with user authentication, persistent storage, and spending visualization by category.",
    role: "Solo project",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    github: "https://github.com/cdowning2022/budgetbuddy",
    demo: "https://budgetbuddy-cdowning2022.vercel.app",
    featured: true,
  },
];