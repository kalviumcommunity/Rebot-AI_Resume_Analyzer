/**
 * Kalvium Milestone 5.12: Data Loading Layer
 * Responsibility: ONLY reading and validating raw data from disk.
 * 
 * NEVER cleans, trains, or transforms data here.
 */
import fs from "fs";

/**
 * Loads and validates raw JSON data from a given path.
 * @param path - The filesystem path to the data
 * @throws Error if file missing or malformed
 */
export function loadData(path: string) {
    if (!fs.existsSync(path)) {
        throw new Error(`[DATA LOADER] Source file not found: ${path}`);
    }

    try {
        const rawContent = fs.readFileSync(path, "utf-8");
        const data = JSON.parse(rawContent);

        if (!Array.isArray(data)) {
            throw new Error(`[DATA LOADER] Expected array of records, found ${typeof data}`);
        }

        if (data.length === 0) {
            console.warn(`[DATA LOADER] Warning: Dataset at ${path} is empty.`);
        }

        return data;
    } catch (error: any) {
        throw new Error(`[DATA LOADER] Failed to parse JSON data: ${error.message}`);
    }
}
