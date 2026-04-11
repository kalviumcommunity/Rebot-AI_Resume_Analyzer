/**
 * Milestone 5.38: Stratified Train-Test Split
 * Responsibility: Ensuring training and test sets maintain identical class distributions.
 */
export function stratifiedSplit(data: any[], labels: number[], trainRatio: number = 0.8) {
  console.log("\n⚖️ PERFORMING STRATIFIED SPLIT");

  const classes: Record<number, { d: any[], l: number[] }> = {};

  // Group by class
  labels.forEach((label, i) => {
    if (!classes[label]) classes[label] = { d: [], l: [] };
    classes[label].d.push(data[i]);
    classes[label].l.push(label);
  });

  const train: any[] = [];
  const trainL: number[] = [];
  const test: any[] = [];
  const testL: number[] = [];

  // Split each class proportionately
  Object.keys(classes).forEach(clsStr => {
    const cls = Number(clsStr);
    const clsData = classes[cls].d;
    const clsLabels = classes[cls].l;
    
    const splitIndex = Math.floor(clsData.length * trainRatio);

    train.push(...clsData.slice(0, splitIndex));
    trainL.push(...clsLabels.slice(0, splitIndex));
    
    test.push(...clsData.slice(splitIndex));
    testL.push(...clsLabels.slice(splitIndex));
  });

  console.log(`- Stratified Set: Train=${train.length}, Test=${test.length}`);
  return { train, trainL, test, testL };
}
