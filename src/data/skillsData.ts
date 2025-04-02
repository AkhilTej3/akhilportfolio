export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'language' | 'other';
}

export interface Expertise {
  icon: string;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: "Code",
    category: "language"
  },
  {
    name: "React.js",
    icon: "Atom",
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: "Code",
    category: "frontend"
  },
  {
    name: "Node.js",
    icon: "Server",
    category: "backend"
  },
  {
    name: "TypeScript",
    icon: "FileCode",
    category: "language"
  },
  {
    name: "React Native",
    icon: "Smartphone",
    category: "frontend"
  },
  {
    name: "Python",
    icon: "Terminal",
    category: "language"
  },
  {
    name: "FastAPI",
    icon: "Zap",
    category: "backend"
  },
  {
    name: "RESTful APIs",
    icon: "Network",
    category: "backend"
  },
  {
    name: "SQL",
    icon: "Database",
    category: "database"
  },
  {
    name: "AWS",
    icon: "Cloud",
    category: "tools"
  },
  {
    name: "Docker",
    icon: "Container",
    category: "tools"
  },
  {
    name: "CI/CD",
    icon: "GitMerge",
    category: "tools"
  },
  {
    name: "HTML5",
    icon: "FileText",
    category: "frontend"
  },
  {
    name: "CSS3",
    icon: "Palette",
    category: "frontend"
  },
  {
    name: "Java",
    icon: "Code2",
    category: "language"
  },
  {
    name: "GraphQL",
    icon: "Network",
    category: "backend"
  },
  {
    name: "Three.js",
    icon: "Boxes",
    category: "frontend"
  }
];

export const expertise: Expertise[] = [
  {
    icon: "Code",
    title: "Full Stack Development",
    description: "Building responsive apps with React.js, Next.js, Node.js and React Native."
  },
  {
    icon: "Server",
    title: "Backend Systems",
    description: "Developing robust APIs and server-side logic with Node.js, Python, and FastAPI."
  },
  {
    icon: "Database",
    title: "Database Management",
    description: "Creating efficient database schemas and optimizing data structures for performance."
  },
  {
    icon: "Brain",
    title: "AI & ML Integration",
    description: "Working with Generative AI, Langchain, and Machine Learning systems."
  },
  {
    icon: "Shield",
    title: "Security Engineering",
    description: "Experience with post-quantum cryptography and secure communication systems."
  },
  {
    icon: "Cloud",
    title: "Cloud Services",
    description: "Deploying apps on AWS (EC2, S3, Lambda) and implementing CI/CD pipelines."
  }
];
