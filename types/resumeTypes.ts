export interface UserProfile {
  id: string; // userId
  name: string;
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  personalStatement?: string;
}

export interface SkillSet {
  id: string; // userId
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
}

export interface Project {
  id: string; // projectId
  userId: string;
  title: string;
  repo?: string;
  description: string[]; // Keeping as array of bullet points for AI to process
  techStack: string[];
  impact?: string;
  startDate?: string;
  endDate?: string;
}

export interface Experience {
  id: string; // experienceId
  userId: string;
  company: string;
  role: string;
  description: string[];
  techUsed: string[];
  impact?: string;
  startDate: string;
  endDate: string | "Present";
}

export interface Education {
  id: string;
  userId: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Achievement {
  id: string; // achievementId
  userId: string;
  type: string;
  description: string;
  proofLink?: string;
}

export interface ResumeData {
  user: UserProfile;
  skills: SkillSet;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
}
