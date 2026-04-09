import { ResumeData } from "@/types/resumeTypes";
import { CONFIG } from "../config";

/**
 * Encapsulates all signals extracted from a resume.
 */
export interface ResumeFeatures {
  keywordDensity: number;
  actionVerbCount: number;
  metricCount: number;
  resumeLength: number;
  skillsCount: number;
  hasContactInfo: boolean;
  experienceYears: number;
}

/**
 * Transforms cleaned text and structured data into a feature vector.
 * 
 * @param data - The partial resume data object.
 * @param cleanedText - The cleaned text string from the preprocessing stage.
 * @returns An object containing all engineered features.
 */
export function extractFeatures(data: Partial<ResumeData>, cleanedText: string): ResumeFeatures {
  const words = cleanedText.split(" ");

  // 1. Keyword Density
  let matchedKeywords = 0;
  CONFIG.TECH_KEYWORDS.forEach(kw => {
    if (cleanedText.includes(kw)) matchedKeywords++;
  });
  const keywordDensity = matchedKeywords / CONFIG.TECH_KEYWORDS.length;

  // 2. Action Verbs
  let actionVerbCount = 0;
  const verbsSet = new Set(CONFIG.ACTION_VERBS);
  words.forEach(word => {
    if (verbsSet.has(word)) actionVerbCount++;
  });

  // 3. Metrics (Search for %, numbers followed by indicators like "increase", "revenue", etc.)
  const metricMatches = cleanedText.match(/\d+%/g) || [];
  const metricCount = metricMatches.length;

  // 4. Skills Count
  let skillsCount = 0;
  if (data.skills) {
    skillsCount = (data.skills.languages?.length || 0) +
                  (data.skills.frontend?.length || 0) +
                  (data.skills.backend?.length || 0) +
                  (data.skills.databases?.length || 0) +
                  (data.skills.tools?.length || 0);
  }

  // 5. Contact Info
  const hasContactInfo = !!(data.user?.email || data.user?.linkedin || data.user?.github);

  // 6. Resume Length
  const resumeLength = words.length;

  // 7. Experience Years (Simple estimation)
  let experienceYears = 0;
  if (data.experience) {
    experienceYears = data.experience.length * 1.5; // Roughly 1.5 years per entry for simulation
  }

  return {
    keywordDensity,
    actionVerbCount,
    metricCount,
    resumeLength,
    skillsCount,
    hasContactInfo,
    experienceYears
  };
}
