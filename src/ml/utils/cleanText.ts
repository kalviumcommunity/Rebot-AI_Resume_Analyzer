/**
 * Utility for cleaning raw resume text.
 * Part of the Data Cleaning stage of the ML Pipeline.
 */
export function cleanText(text: string): string {
  if (!text) return "";

  return text
    .toLowerCase()
    // Remove special characters and punctuation
    .replace(/[^\w\s]/g, " ")
    // Remove extra whitespace
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Removes common stop words to focus on meaningful keywords.
 */
export function removeStopWords(text: string): string {
  const stopWords = new Set([
    "a", "an", "the", "and", "or", "but", "if", "then", "else", "when", 
    "at", "from", "by", "for", "with", "about", "against", "between", 
    "into", "through", "during", "before", "after", "above", "below", 
    "to", "of", "in", "on", "is", "are", "was", "were", "be", "been", "being"
  ]);

  return text
    .split(" ")
    .filter(word => !stopWords.has(word))
    .join(" ");
}
