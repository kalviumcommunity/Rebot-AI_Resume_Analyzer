import { ResumeData } from "@/types/resumeTypes";
import { cleanText } from "../utils/cleanText";

export interface ResumeFeatures {
  keywordDensity: number;      // 0-1
  actionVerbCount: number;     // Absolute count
  metricCount: number;         // Absolute count
  resumeLength: number;        // Total word count
  skillsCount: number;         // Total skills listed
  hasContactInfo: boolean;     // Binary
  experienceYears: number;     // Estimated years
}

const ACTION_VERBS = new Set([
  "led", "managed", "developed", "built", "created", "designed", "implemented",
  "optimized", "increased", "reduced", "saved", "negotiated", "presented",
  "collaborated", "coordinated", "resolved", "launched", "automated", "mentored"
]);

const TECH_KEYWORDS = new Set([
  "react", "typescript", "javascript", "node", "python", "java", "sql", "aws",
  "docker", "kubernetes", "cloud", "agile", "scrum", "git", "api", "backend",
  "frontend", "fullstack", "machine learning", "ai", "devops", "ci/cd"
]);

export function extractFeatures(data: Partial<ResumeData>): ResumeFeatures {
  const fullText = JSON.stringify(data);
  const cleanedText = cleanText(fullText);
  const words = cleanedText.split(" ");

  // 1. Keyword Density
  let matchedKeywords = 0;
  TECH_KEYWORDS.forEach(kw => {
    if (cleanedText.includes(kw)) matchedKeywords++;
  });
  const keywordDensity = matchedKeywords / TECH_KEYWORDS.size;

  // 2. Action Verbs
  let actionVerbCount = 0;
  words.forEach(word => {
    if (ACTION_VERBS.has(word)) actionVerbCount++;
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
