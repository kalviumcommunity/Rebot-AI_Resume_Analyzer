/**
 * Normalizes and cleans raw text for feature extraction.
 * Removes noise, special characters, and converts to lowercase.
 * 
 * @param text - The raw resume text to clean.
 * @returns The cleaned, normalized string.
 * @throws Error if input is invalid.
 */
export function cleanText(text: string): string {
  if (!text || typeof text !== "string") {
    throw new Error("Invalid resume input: text must be a non-empty string.");
  }

  return text
    .toLowerCase()
    .replace(/[^\w\s%]/g, " ") // Remove special characters but keep % for metrics
    .replace(/\s+/g, " ")     // Normalize whitespace
    .trim();
}
