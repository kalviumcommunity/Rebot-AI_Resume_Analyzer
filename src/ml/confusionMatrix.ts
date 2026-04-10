/**
 * Kalvium Milestone 5.29: Confusion Matrix Analysis
 * Responsibility: Providing full visibility into model behavior and error patterns.
 */

export function confusionMatrix(actual: number[], predicted: number[]): number[][] {
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for (let i = 0; i < actual.length; i++) {
    const a = actual[i];
    const p = predicted[i];
    
    // Safety check for indices
    if (a >= 0 && a < 3 && p >= 0 && p < 3) {
      matrix[a][p]++;
    }
  }

  console.log("\n📊 Confusion Matrix (Actual \\ Predicted):");
  console.table(matrix);

  return matrix;
}

/**
 * Interprets the 3x3 matrix specifically for Rebot business logic.
 */
export function interpretMatrix(matrix: number[][]) {
  const classNames = ["Poor", "Average", "Strong"];
  
  console.log("\n🔍 Interpretation:");

  // Strong resumes (class 2)
  const tpStrong = matrix[2][2];
  const fnStrong = matrix[2][0] + matrix[2][1];
  const fpStrong = matrix[0][2] + matrix[1][2];

  console.log(`✅ Strong resumes correctly identified: ${tpStrong}`);
  console.log(`❌ Strong resumes missed (False Negatives): ${fnStrong}`);
  console.log(`⚠️ Weak resumes wrongly marked strong (False Positives): ${fpStrong}`);

  // Patterns
  if (matrix[0][2] > 0) {
    console.log(`   🚨 Warning: ${matrix[0][2]} Poor resumes were classified as Strong!`);
  }
}

/**
 * Normalizes the matrix by row (Percent Recall per class).
 */
export function normalizedMatrix(matrix: number[][]) {
  return matrix.map(row => {
    const sum = row.reduce((a, b) => a + b, 0);
    return row.map(val => (val / (sum || 1)).toFixed(2));
  });
}
