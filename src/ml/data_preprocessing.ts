/**
 * Kalvium Milestone 5.8: Data Preprocessing
 * Responsiveness: Normalizing and cleaning raw resume data.
 * 
 * Each function handles exactly one logical cleaning task.
 */

/**
 * Strips special characters and normalizes whitespace in resume text.
 * @param text - The raw resume text
 * @returns Cleaned and normalized string
 */
export function cleanRawText(text: string): string {
    if (!text || typeof text !== "string") return "";
    
    return text
        .toLowerCase()
        .replace(/[^\w\s%]/g, " ") // Keep alphanumeric, whitespace, and %
        .replace(/\s+/g, " ")      // Normalize multiple spaces
        .trim();
}

/**
 * Extracts and cleans specific fields if provided in JSON format.
 * (Future logic for individual field sanitization)
 */
export function sanitizeData(data: any): any {
    // This function can be extended to handle missing value imputation
    return data;
}
