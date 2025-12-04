export interface PersonalData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface Skills {
  frontend: string[];
  backend: string[];
  databases: string[];
  testing: string[];
  cloudDevOps: string[];
  tools: string[];
  methodologies: string[];
}

export interface Education {
  id: number;
  school: string;
  location: string;
  program: string;
  year: string;
}

export interface Social {
  github: string;
  linkedin: string;
  email: string;
}

export interface PortfolioData {
  personal: PersonalData;
  experience: Experience[];
  skills: Skills;
  education: Education[];
  social: Social;
}
