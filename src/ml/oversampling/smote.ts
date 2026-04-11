/**
 * Milestone 5.40: SMOTE (Synthetic Minority Oversampling Technique)
 * Responsibility: Generating synthetic samples via linear interpolation.
 */
export function smote(data: any[][], labels: string[]) {
  const minority: any[][] = [];

  labels.forEach((label, i) => {
    if (label === "Poor") minority.push(data[i]);
  });

  if (minority.length < 2) {
    console.warn("⚠️ SMOTE: Too few minority samples to interpolate. Returning original.");
    return [];
  }

  const synthetic: any[][] = [];

  // Generate synthetic samples to match majority (simplified for demo)
  // In a real system, we'd aim for exact balance.
  for (let i = 0; i < minority.length; i++) {
    const a = minority[i];
    // Pick another random minority sample as "neighbor"
    const b = minority[Math.floor(Math.random() * minority.length)];

    const newSample = a.map((val, idx) => {
      const diff = b[idx] - val;
      const gap = Math.random();
      return val + gap * diff; // Interpolate
    });

    synthetic.push(newSample);
  }

  console.log(`🧪 SMOTE: Generated ${synthetic.length} synthetic samples.`);

  return synthetic;
}
