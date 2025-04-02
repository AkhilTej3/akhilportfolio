export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
  imageFallback: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Food & Beverages Pre-Ordering App",
    description: "Led end-to-end development of a mobile app enabling users to pre-order meals and beverages for a seamless dining experience with real-time notifications.",
    technologies: ["Node.js", "SQL", "React.js", "React Native", "AWS", "WebSockets"],
    projectUrl: "#",
    githubUrl: "#",
    imageFallback: "Mobile app for pre-ordering food and beverages"
  },
  {
    id: 2,
    title: "OTT Streaming Platform",
    description: "Spearheaded the development of a next-generation video streaming platform, delivering high-performance, cross-platform compatibility with optimized video streaming performance.",
    technologies: ["React Native", "Mobile Authentication", "Content Search API", "UI/UX Design"],
    projectUrl: "#",
    githubUrl: "#",
    imageFallback: "Video streaming application interface"
  },
  {
    id: 3,
    title: "Quantum-Secure VPN Tunnel",
    description: "Worked on post-quantum cryptography to create a secure VPN tunnel for quantum-secure communication, enhancing system resilience against future quantum computing threats.",
    technologies: ["Post-Quantum Cryptography", "Secure Communication", "VPN", "Encryption"],
    projectUrl: "#",
    githubUrl: "#",
    imageFallback: "Secure VPN tunnel with quantum encryption"
  },
  {
    id: 4,
    title: "RAG Pipeline with Langchain",
    description: "Built a Retrieval-Augmented Generation (RAG) pipeline using Langchain to optimize document comparison and information retrieval processes.",
    technologies: ["Langchain", "Generative AI", "Document Processing", "Python"],
    projectUrl: "#",
    githubUrl: "#",
    imageFallback: "AI document comparison system"
  },
  {
    id: 5,
    title: "Compliance Management System",
    description: "Developed a compliance management system that automates risk analysis through employee surveys and streamlines regulatory compliance processes.",
    technologies: ["Node.js", "React.js", "Survey API", "Risk Analysis"],
    projectUrl: "#",
    githubUrl: "#",
    imageFallback: "Compliance management dashboard"
  }
];
