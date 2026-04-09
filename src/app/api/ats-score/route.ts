import { NextRequest, NextResponse } from "next/server";
import { runPrediction } from "@/ml/predict/predict";
import { getEvaluationReport } from "@/ml/evaluation/metrics";
import { ResumeData } from "@/types/resumeTypes";

/**
 * Endpoint to process a resume through the full ML pipeline.
 * Separates API concerns from ML logic by using the orchestrated 'runPrediction' pipeline.
 * 
 * @param req - The Next.js request object containing resumeData.
 * @returns JSON response with prediction, features, and system evaluation.
 */
export async function POST(req: NextRequest) {
  try {
    const { resumeData }: { resumeData: Partial<ResumeData> } = await req.json();

    if (!resumeData) {
      return NextResponse.json({ error: "Resume data is required" }, { status: 400 });
    }

    // ML Pipeline Execution (Orchestrated Stage)
    const result = runPrediction(resumeData);

    // Evaluation Data for Monitoring & UI Transparency
    const evaluation = getEvaluationReport();

    // System Monitoring (Simulation)
    console.log(`[ML MONITOR] Prediction generated. Score: ${result.score}, Label: ${result.label}`);

    return NextResponse.json({
      success: true,
      ...result,
      evaluation,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("ML Prediction Error:", error);
    return NextResponse.json({ error: "Failed to process ML pipeline" }, { status: 500 });
  }
}
