/**
 * Milestone 5.46: Final Feature Engineering Layer
 * Responsibility: Converting raw data into machine-readable feature vectors.
 */
import { ResumeData } from "@/types/resumeTypes";
import { CONFIG } from "../config";
import { cleanRawText } from "./preprocessing";

export interface ResumeFeatures {
  keywordDensity: number;      // 0-1 matches
  actionVerbCount: number;     // Impact verb count
  metricCount: number;         // Percentage based achievements
  resumeLength: number;        // Total word count
  skillsCount: number;         // Count of unique listed skills
  hasContactInfo: boolean;     // Essential info flag
  experienceYears: number;     // Simulation of seniority
  seniorityLevel: string;      // Categorical Feature
}

/**
 * Maps years of experience to a categorical level.
 */
function getSeniorityLevel(years: number): string {
    if (years >= 5) return "Senior";
    if (years >= 2) return "Mid-Level";
    return "Entry-Level";
}

/**
 * Orchestrates feature extraction from structured resume data.
 */
export function extractResumeFeatures(data: Partial<ResumeData>): ResumeFeatures {
  const fullText = JSON.stringify(data);
  const cleanedText = cleanRawText(fullText);
  const words = cleanedText.split(" ");

  // 1. Keyword Intelligence
  let matchedKeywords = 0;
  CONFIG.TECH_KEYWORDS.forEach(kw => {
    if (cleanedText.includes(kw)) matchedKeywords++;
  });
  const keywordDensity = matchedKeywords / CONFIG.TECH_KEYWORDS.length;

  // 2. Action Verb Discovery
  let actionVerbCount = 0;
  const verbsSet = new Set(CONFIG.ACTION_VERBS);
  words.forEach(word => {
    if (verbsSet.has(word)) actionVerbCount++;
  });

  // 3. Quantitative Metric Extraction
  const metricCount = (cleanedText.match(/\d+%/g) || []).length;

  // 4. Skills Parsing
  let skillsCount = 0;
  if (data.skills) {
    skillsCount = (data.skills.languages?.length || 0) +
                  (data.skills.frontend?.length || 0) +
                  (data.skills.backend?.length || 0) +
                  (data.skills.databases?.length || 0) +
                  (data.skills.tools?.length || 0);
  }

  // 5. Seniority Estimation
  const experienceYears = (data.experience?.length || 0) * 1.5;

  return {
    keywordDensity: Number(keywordDensity),
    actionVerbCount: Number(actionVerbCount),
    metricCount: Number(metricCount),
    resumeLength: Number(words.length),
    skillsCount: Number(skillsCount),
    hasContactInfo: !!(data.user?.email || data.user?.linkedin || data.user?.github),
    experienceYears: Number(experienceYears),
    seniorityLevel: getSeniorityLevel(experienceYears)
  };
}
