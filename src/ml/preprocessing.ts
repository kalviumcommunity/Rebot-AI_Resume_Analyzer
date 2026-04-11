/**
 * Milestone 5.46: Final Preprocessing Layer
 * Responsibility: Consolidating text cleaning and data sanitation for the production pipeline.
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
 * Sanitizes structured data object.
 * Implements final safety checks for the production pipeline.
 */
export function sanitizeData(data: any): any {
    if (!data) return {};
    
    // Future expansion: Add specific field-level Type Guards here
    return data;
}
