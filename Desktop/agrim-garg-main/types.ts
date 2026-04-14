export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  date?: string; // Added date field for resume accuracy
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface GameSkill {
  name: string;
  level: number;
  xp: number; // 0-100 for the current level progress
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  requirement: string;
  description: string;
  thresholdSkill: string;
  thresholdValue: number;
  icon: string;
}

export interface Principle {
  title: string;
  description: string;
  icon: string;
}

export interface NextSkillOption {
  id: string;
  name: string;
  category: string;
}

export type ThemeID = 'leadership' | 'strategic' | 'hacker' | 'visionary';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  bgBase: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  glow: string;
}

export interface ThemeConfig {
  id: ThemeID;
  name: string;
  colors: ThemeColors;
  fontFamily: string;
  description: string;
}

export interface ImpactMarker {
  id: string;
  x: number; // Percent from left
  y: number; // Percent from top
  location: string;
  initiative: string;
  summary: string;
  type: 'cese' | 'community' | 'vision';
}

export interface MentalFramework {
  id: number;
  title: string;
  description?: string;
  detailedContent?: string;
  mindset?: string;
  icon: string;   
}

export interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  answerSummary: string[];
  answerDetail: string;
}