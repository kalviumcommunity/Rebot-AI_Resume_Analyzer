import { ResumeData } from "@/types/resumeTypes";
import { cleanRawText as cleanText } from "../data_preprocessing";
import { CONFIG } from "../config";

export interface ResumeFeatures {
  keywordDensity: number;      // 0-1
  actionVerbCount: number;     // Absolute count
  metricCount: number;         // Absolute count
  resumeLength: number;        // Total word count
  skillsCount: number;         // Total skills listed
  hasContactInfo: boolean;     // Binary
  experienceYears: number;     // Estimated years
}

/**
 * Transforms raw resume data into engineered features for the ML model.
 * Adheres to professional standardization by using centralized CONFIG.
 * 
 * @param data - Raw resume data (partial)
 * @returns ResumeFeatures vector
 */
export function extractFeatures(data: Partial<ResumeData>): ResumeFeatures {
  const fullText = JSON.stringify(data);
  const cleanedText = cleanText(fullText);
  const words = cleanedText.split(" ");

  // 1. Keyword Density (Using CONFIG)
  let matchedKeywords = 0;
  CONFIG.TECH_KEYWORDS.forEach((kw: any) => {
    if (cleanedText.includes(kw)) matchedKeywords++;
  });
  const keywordDensity = matchedKeywords / CONFIG.TECH_KEYWORDS.length;

  // 2. Action Verbs (Using CONFIG)
  let actionVerbCount = 0;
  const verbsSet = new Set(CONFIG.ACTION_VERBS);
  words.forEach((word: string) => {
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
