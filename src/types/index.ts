export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string | string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  github?: string;
  image?: string;
  imageContain?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  period?: string;
  description?: string;
  credentialUrl?: string;
  image?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  socialLinks: Social[];
  resumeUrl?: string;
}