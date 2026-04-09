/**
 * Kalvium Milestone 5.16: Train-Test Split
 * Responsibility: Dividing raw data into isolated sets for learning and evaluation.
 */

/**
 * Splits an array into training and testing sets.
 * @param data - The raw dataset
 * @param testSize - Proportion of data to be used for testing (default 0.2)
 * @param randomState - Fixed seed for reproducibility (simulated)
 */
export function trainTestSplit(data: any[], testSize: number = 0.2, randomState: number = 42) {
    if (data.length < 2) {
        return { train: data, test: [] };
    }

    // Seeded shuffle simulation (Standard sorting with fixed random state)
    // In production, we'd use a robust seeded random generator.
    const shuffled = [...data].sort(() => 0.5 - (randomState / 100));

    const splitIndex = Math.floor(data.length * (1 - testSize));
    
    // Ensure at least one item in test set if possible
    const finalSplitIndex = (splitIndex === data.length && data.length > 0) ? data.length - 1 : splitIndex;

    const train = shuffled.slice(0, finalSplitIndex);
    const test = shuffled.slice(finalSplitIndex);

    console.log(`[SPLIT] Strategy: 80/20 | Random State: ${randomState}`);
    console.log(`[SPLIT] Training Set: ${train.length} samples`);
    console.log(`[SPLIT] Testing Set:  ${test.length} samples`);

    return { train, test };
}
