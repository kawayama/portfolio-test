interface ProjectDetails {
  overview: string;
  features: string[];
  technologies: string[];
  architecture: string;
  challenges: string[];
  improvements: string[];
  screenshots: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  details: {
    technologies: string[];
    screenshots: string[];
    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
  };
}

interface ProjectsData {
  projects: Project[];
}

// JSONファイルのインポート時の型定義
declare module "*.json" {
  const value: ProjectsData;
  export default value;
}

interface PageContent {
  projects: Project[];
  // 他のセクションの型定義
} 