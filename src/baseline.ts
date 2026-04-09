import { ResumeData } from "@/types/resumeTypes";

/**
 * Kalvium Selection-Level Upgrade: Baseline Model
 * Responsibility: Providing a naive reference point for evaluation.
 * 
 * This model uses simple keyword counting without weighting or preprocessing-aware density.
 */
export function predictBaselineScore(data: Partial<ResumeData>): number {
    let keywordHits = 0;
    const text = JSON.stringify(data).toLowerCase();
    
    // Naive keywords (for comparison)
    const NAIVE_KEYWORDS = ["react", "node", "python", "java", "typescript", "sql"];
    
    NAIVE_KEYWORDS.forEach(kw => {
        if (text.includes(kw)) keywordHits++;
    });

    // Simple calculation: 10 points per keyword hit
    const score = Math.min(100, keywordHits * 10);
    return score;
}
