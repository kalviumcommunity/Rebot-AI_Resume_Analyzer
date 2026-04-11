/**
 * Milestone 5.40: Random Oversampling
 * Responsibility: Balancing datasets by duplicating minority samples.
 */
export function randomOversample(data: any[], labels: string[]) {
  const minority: any[] = [];
  const majority: any[] = [];

  labels.forEach((label, i) => {
    if (label === "Poor") minority.push(data[i]);
    else majority.push(data[i]);
  });

  if (minority.length === 0) return { balancedData: data, balancedLabels: labels };

  const difference = majority.length - minority.length;
  const resampledMinority = [...minority];

  for (let i = 0; i < difference; i++) {
    const randomIndex = Math.floor(Math.random() * minority.length);
    resampledMinority.push(minority[randomIndex]); // Duplicate
  }

  const balancedData = [...majority, ...resampledMinority];
  const balancedLabels = [
    ...Array(majority.length).fill("Good"),
    ...Array(resampledMinority.length).fill("Poor")
  ];

  console.log(`⚖️ Random Oversampling Complete: Added ${difference} duplicates.`);

  return { balancedData, balancedLabels };
}
