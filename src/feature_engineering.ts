/**
 * Kalvium Milestone 5.8: Feature Engineering
 * Responsibility: Converting raw data into machine-readable feature vectors.
 */
import { ResumeData } from "@/types/resumeTypes";
import { CONFIG } from "./config";
import { cleanRawText } from "./data_preprocessing";

export interface ResumeFeatures {
  keywordDensity: number;      // 0-1 matches
  actionVerbCount: number;     // Impact verb count
  metricCount: number;         // Percentage based achievements
  resumeLength: number;        // Total word count
  skillsCount: number;         // Count of unique listed skills
  hasContactInfo: boolean;     // Essential info flag
  experienceYears: number;     // Simulation of seniority
}

/**
 * Orchestrates feature extraction from structured resume data.
 * @param data - The resume content object
 * @returns A feature vector (standardized object)
 */
export function extractResumeFeatures(data: Partial<ResumeData>): ResumeFeatures {
  // Use pre-processing utility
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

  // 5. Reliability Checks
  const hasContactInfo = !!(data.user?.email || data.user?.linkedin || data.user?.github);

  // 6. Seniority Estimation
  const experienceYears = (data.experience?.length || 0) * 1.5;

  return {
    keywordDensity,
    actionVerbCount,
    metricCount,
    resumeLength: words.length,
    skillsCount,
    hasContactInfo,
    experienceYears
  };
}
