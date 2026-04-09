import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Initialize the new Google GenAI SDK Client
// We ensure we try to get the global API key, but fail safely if it's missing in dev
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "dummy_key" });

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const prompt = `You are an ATS resume optimization assistant.
Your task is to improve resume content for software engineering roles.

Rules:
• Use strong action verbs (Built, Developed, Implemented).
• Keep bullet points between 1 and 2 lines.
• Mention technologies and frameworks used.
• Add measurable impact when possible.
• Avoid vague phrases.
• Ensure ATS keyword alignment.

Rewrite the following resume bullet point to be more impactful:
"${text}"

Return ONLY the rewritten text, without any conversational filler or quotes around it.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const improvedText = response.text?.trim() || "";

    return NextResponse.json({ improvedText });
  } catch (error: any) {
    console.error("AI Route Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process request" }, { status: 500 });
  }
}
