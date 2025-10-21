import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import { Project, SkillCategory } from './types';

/**
 * Gets all projects
 */
export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

/**
 * Gets featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured) as Project[];
}

/**
 * Gets project by ID
 */
export function getProjectById(id: number): Project | undefined {
  return projectsData.find((project) => project.id === id) as
    | Project
    | undefined;
}

/**
 * Gets projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter((project) => project.category === category) as Project[];
}

/**
 * Gets all unique categories
 */
export function getCategories(): string[] {
  const categories = projectsData.map((project) => project.category);
  return Array.from(new Set(categories));
}

/**
 * Gets all skills
 */
export function getAllSkills(): SkillCategory {
  return skillsData as SkillCategory;
}

/**
 * Gets skills by category
 */
export function getSkillsByCategory(category: keyof SkillCategory) {
  return skillsData[category];
}
