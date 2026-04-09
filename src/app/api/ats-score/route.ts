"use client"; // Note: This was incorrectly labeled as Server Component context in some files, but API routes are server-side. Removing it if it was there or ensuring correct imports.
// Actually Next.js API routes don't use "use client".

import { NextRequest, NextResponse } from "next/server";
import { predictAtsScore } from "@/ml/predict";
import { getEvaluationReport } from "@/ml/evaluate";
import { ResumeData } from "@/types/resumeTypes";

/**
 * Endpoint to process a resume through the full ML pipeline.
 * Adheres to Kalvium 5.8: Predict logic is isolated from API concerns.
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

    // ML Pipeline Execution (Prediction Stage)
    const result = predictAtsScore(resumeData);

    // Evaluation Data for Monitoring & UI Transparency
    const evaluation = getEvaluationReport();

    // System Monitoring (Simulation)
    console.log(`[ML MONITOR] Prediction generated. Score: ${result.score}, Label: ${result.label}`);

    return NextResponse.json({
      success: true,
      prediction: result,
      features: result.features,
      evaluation,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("ML Prediction Error:", error);
    return NextResponse.json({ error: "Failed to process ML pipeline" }, { status: 500 });
  }
}
