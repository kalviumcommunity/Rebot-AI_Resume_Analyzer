import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const templatePath = path.resolve(process.cwd(), "templates", "resume_template.docx");
    
    // Check if the template exists
    if (!fs.existsSync(templatePath)) {
      return NextResponse.json(
        { error: "Template file not found. Please upload resume_template.docx to /templates folder." },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(templatePath);
    
    const zip = new PizZip(content);
    
    // Initialize docxtemplater with PizZip
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Populate data into template placeholders mapping
    doc.render(data);

    // Generate output as buffer
    const buf = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    // Note: Converting DOCX to PDF is complex in Node.js without LibreOffice or a paid API (e.g. CloudConvert).
    // The typical approach is returning the DOCX, and either:
    // 1. Having a frontend library print it to PDF
    // 2. Returning the raw DOCX to the user
    // Here we return the DOCX directly for standard rendering.
    
    return new NextResponse(buf as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="resume_${data.user?.name || "optimized"}.docx"`,
      },
    });

  } catch (error: any) {
    console.error("Resume Generation Error:", error);
    return NextResponse.json(
       { error: error.message || "Failed to generate resume" },
       { status: 500 }
    );
  }
}
