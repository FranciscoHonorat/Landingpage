// Centralized type definitions for the portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  decisions: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'backend' | 'database' | 'devops' | 'tools';
  icon?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}
