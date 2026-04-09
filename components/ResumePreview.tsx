"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ResumeData } from "@/types/resumeTypes";
import { Button } from "./ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Download,
  Sparkles,
  Share2,
  Printer,
  Layout,
  Maximize,
  X,
  ChevronUp,
  ChevronDown
} from "lucide-react";




import { useTheme } from "@/context/ThemeContext";
import AtsScorePanel from "./ml/AtsScorePanel";

interface ResumePreviewProps {
  data: Partial<ResumeData>;
  isStudio?: boolean;
}

interface MlResult {
  prediction: {
    score: number;
    baselineScore: number;
    label: string;
    confidence: number;
    version: string;
    featureContributions: { name: string; contribution: number; impact: "positive" | "negative" | "neutral" }[];
  };
  features: {
    keywordDensity: number;
    actionVerbCount: number;
    metricCount: number;
    resumeLength: number;
    skillsCount: number;
  };
  evaluation: {
    accuracy: number;
    meanAbsoluteError: number;
    baselineMAE: number;
  };
}

// A4 page height in px at 96 DPI ≈ 1123px. We use a slightly smaller content height
// to account for padding, leaving 40px top + 40px bottom padding.
const PAGE_CONTENT_HEIGHT = 1043;

export default function ResumePreview({ data, isStudio }: ResumePreviewProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isToolsExpanded, setIsToolsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [pageBreakIndex, setPageBreakIndex] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mlResult, setMlResult] = useState<MlResult | null>(null);
  const [isCheckingAts, setIsCheckingAts] = useState(false);
  const [showAtsPanel, setShowAtsPanel] = useState(false);

  const handleDownload = async () => {
    if (!pdfRef.current || isGenerating) return;
    setIsGenerating(true);
    try {
      const element = pdfRef.current;
      // Render at 2x scale for high quality
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = pdfWidth / imgWidth;
      const scaledHeight = imgHeight * ratio;

      // If content fits in one page
      if (scaledHeight <= pdfHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, scaledHeight);
      } else {
        // Multi-page: slice the canvas
        let yOffset = 0;
        let page = 0;
        const pageHeightPx = pdfHeight / ratio;
        while (yOffset < imgHeight) {
          if (page > 0) pdf.addPage();
          const sliceCanvas = document.createElement("canvas");
          sliceCanvas.width = imgWidth;
          sliceCanvas.height = Math.min(pageHeightPx, imgHeight - yOffset);
          const ctx = sliceCanvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(canvas, 0, -yOffset);
            const sliceData = sliceCanvas.toDataURL("image/png");
            const sliceH = sliceCanvas.height * ratio;
            pdf.addImage(sliceData, "PNG", 0, 0, pdfWidth, sliceH);
          }
          yOffset += pageHeightPx;
          page++;
        }
      }
      const fileName = (data.user?.name || "Resume").replace(/\s+/g, "_");
      pdf.save(`${fileName}_Resume.pdf`);
    } catch (e) {
      console.error("PDF generation error:", e);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAtsCheck = async () => {
    setIsCheckingAts(true);
    setShowAtsPanel(true);
    try {
      const response = await fetch("/api/ats-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeData: data }),
      });
      const result = await response.json();
      if (result.success) {
        setMlResult(result);
      }
    } catch (error) {
      console.error("ATS Check Error:", error);
    } finally {
      setIsCheckingAts(false);
    }
  };

  const studioTools = [
    {
      icon: isCheckingAts ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Layout className="w-5 h-5" />,
      label: "ATS Check",
      color: "bg-green-100",
      textColor: "text-green-600",
      onClick: handleAtsCheck,
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      label: "Share Link",
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: <Printer className="w-5 h-5" />,
      label: "Print CV",
      color: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: "AI Viz",
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  // Build sections as an ordered list of React nodes
  const buildSections = useCallback(() => {
    const sections: { key: string; node: React.ReactNode }[] = [];

    // Header
    sections.push({
      key: "header",
      node: (
        <div className="text-left mb-3" style={{ fontFamily: "Cambria, serif" }}>
          <h1 className="font-bold text-black mb-0.5 tracking-tight" style={{ fontFamily: "Cambria, serif", fontSize: "14px" }}>
            {data.user?.name || "Student Fullname"}
          </h1>
          <div className="flex justify-start items-center gap-1.5 text-black flex-wrap" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
            {data.user?.linkedin ? <span>{data.user.linkedin}</span> : <span>LinkedIn</span>}
            {data.user?.github ? <span>| {data.user.github}</span> : <span>| Github</span>}
            {data.user?.portfolio ? <span>| {data.user.portfolio}</span> : <span>| [optionally student can add other portfolios]</span>}
          </div>
        </div>
      ),
    });

    // Technical Skills
    if (data.skills) {
      sections.push({
        key: "skills",
        node: (
          <div className="mb-2" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
            <h2 className="font-bold text-black uppercase mb-1 border-b border-black pb-0.5" style={{ fontFamily: "Cambria, serif", fontSize: "10px" }}>TECHNICAL SKILLS</h2>
            <div className="text-black flex flex-col gap-0" style={{ textAlign: "justify" }}>
              {data.skills.languages && data.skills.languages.length > 0 && (
                <p><strong>Languages:</strong> {data.skills.languages.join(", ")}</p>
              )}
              {data.skills.frontend && data.skills.frontend.length > 0 && (
                <p><strong>Frontend:</strong> {data.skills.frontend.join(", ")}</p>
              )}
              {data.skills.backend && data.skills.backend.length > 0 && (
                <p><strong>Backend:</strong> {data.skills.backend.join(", ")}</p>
              )}
              {data.skills.databases && data.skills.databases.length > 0 && (
                <p><strong>Databases:</strong> {data.skills.databases.join(", ")}</p>
              )}
              {data.skills.tools && data.skills.tools.length > 0 && (
                <p><strong>Tools / Frameworks / Libraries:</strong> {data.skills.tools.join(", ")}</p>
              )}
            </div>
          </div>
        ),
      });
    }

    // Personal Statement
    if (data.user?.personalStatement) {
      sections.push({
        key: "personalStatement",
        node: (
          <div className="mb-2" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
            <h2 className="font-bold text-black uppercase mb-1 border-b border-black pb-0.5" style={{ fontFamily: "Cambria, serif", fontSize: "10px" }}>PERSONAL STATEMENT</h2>
            <p className="text-black" style={{ textAlign: "justify" }}>
              {data.user.personalStatement}
            </p>
          </div>
        ),
      });
    }

    // Experience
    if (data.experience && data.experience.length > 0) {
      sections.push({
        key: "experience-header",
        node: (
          <div className="mb-0.5" style={{ fontFamily: "Cambria, serif", fontSize: "10px" }}>
            <h2 className="font-bold text-black uppercase mb-1 border-b border-black pb-0.5" style={{ fontSize: "10px" }}>EXPERIENCE</h2>
          </div>
        ),
      });
      data.experience.forEach((exp, index) => {
        sections.push({
          key: `exp-${exp.id || index}`,
          node: (
            <div className="mb-2 text-black" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
              <div className="flex justify-between items-start font-bold">
                <span>{exp.company} | {exp.role}</span>
                <span className="text-right shrink-0 ml-4">{exp.startDate} – {exp.endDate}</span>
              </div>
              {exp.description && exp.description.length > 0 && (
                <ul className="list-disc list-outside mt-0.5 ml-4 flex flex-col gap-0 pr-2" style={{ textAlign: "justify" }}>
                  {exp.description.filter(d => d.trim()).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ),
        });
      });
    }

    // Projects
    if (data.projects && data.projects.length > 0) {
      sections.push({
        key: "projects-header",
        node: (
          <div className="mb-0.5" style={{ fontFamily: "Cambria, serif", fontSize: "10px" }}>
            <h2 className="font-bold text-black uppercase mb-1 border-b border-black pb-0.5" style={{ fontSize: "10px" }}>PROJECTS</h2>
          </div>
        ),
      });
      data.projects.forEach((project, index) => {
        sections.push({
          key: `proj-${project.id || index}`,
          node: (
            <div className="mb-2 text-black" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
              <div className="flex justify-between items-start font-bold">
                <span>
                  {project.title}
                  {project.repo && ` | ${project.repo}`}
                </span>
                {(project.startDate || project.endDate) && (
                  <span className="text-right shrink-0 ml-4">
                    {project.startDate || ""}{project.startDate && project.endDate ? " – " : ""}{project.endDate || ""}
                  </span>
                )}
              </div>
              {project.description && project.description.length > 0 && (
                <ul className="list-disc list-outside mt-0.5 ml-4 flex flex-col gap-0 pr-2" style={{ textAlign: "justify" }}>
                  {project.description.filter(d => d.trim()).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ),
        });
      });
    }

    // Education
    if (data.education && data.education.length > 0) {
      sections.push({
        key: "education",
        node: (
          <div className="mb-2" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
            <h2 className="font-bold text-black uppercase mb-1 border-b border-black pb-0.5" style={{ fontSize: "10px" }}>EDUCATION ENROLLMENT</h2>
            <div className="flex flex-col gap-1">
              {data.education.map((edu, index) => (
                <div key={edu.id || index} className="text-black">
                  <div className="flex justify-between items-start font-bold">
                    <span>{edu.degree} in {edu.field}</span>
                    <span className="text-right shrink-0 ml-4">{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <p className="mt-0">Campus: {edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      });
    }

    // Achievements
    if (data.achievements && data.achievements.length > 0) {
      sections.push({
        key: "achievements",
        node: (
          <div className="mb-2" style={{ fontFamily: "Cambria, serif", fontSize: "10px", lineHeight: "1.15" }}>
            <h2 className="font-bold text-black uppercase mb-1 border-b border-black pb-0.5" style={{ fontSize: "10px" }}>ACHIEVEMENTS & EXTRACURRICULARS</h2>
            <ul className="list-disc list-outside text-black ml-4 flex flex-col gap-0 pr-2" style={{ textAlign: "justify" }}>
              {data.achievements.map((ach, index) => (
                <li key={ach.id || index}>
                  <strong>{ach.type}:</strong> {ach.description}
                </li>
              ))}
            </ul>
          </div>
        ),
      });
    }

    return sections;
  }, [data]);

  const allSections = buildSections();

  // Measure section heights after render to decide page break
  useEffect(() => {
    if (!contentRef.current) return;
    const children = contentRef.current.children;
    let cumulativeHeight = 0;
    let breakIdx: number | null = null;

    for (let i = 0; i < children.length; i++) {
      const rect = (children[i] as HTMLElement).getBoundingClientRect();
      const parentRect = contentRef.current.getBoundingClientRect();
      const relativeTop = rect.top - parentRect.top;
      const relativeBottom = relativeTop + rect.height;

      if (relativeBottom > PAGE_CONTENT_HEIGHT && breakIdx === null) {
        breakIdx = i;
        break;
      }
    }
    setPageBreakIndex(breakIdx);
  }, [allSections]);

  // Split sections into page 1 and page 2
  const page1Sections = pageBreakIndex !== null ? allSections.slice(0, pageBreakIndex) : allSections;
  const page2Sections = pageBreakIndex !== null ? allSections.slice(pageBreakIndex) : [];

  const PageSheet = ({ children, pageNumber, totalPages, scale }: { children: React.ReactNode; pageNumber: number; totalPages: number; scale?: string }) => (
    <div className={`relative bg-white text-black shadow-[0_12px_40px_0_rgba(0,0,0,0.1)] flex flex-col ${scale || ""}`}>
      {/* Page label */}
      <div className="absolute -top-7 left-0 text-[10px] font-semibold text-[#7A7B7F] uppercase tracking-widest" style={{ fontFamily: "sans-serif" }}>
        Page {pageNumber} of {totalPages}
      </div>
      {children}
    </div>
  );

  // Hidden measurement div
  const MeasurementDiv = () => (
    <div
      ref={contentRef}
      className="absolute opacity-0 pointer-events-none"
      style={{
        width: "595px", // A4 at 72dpi approximately
        padding: "40px",
        fontFamily: "Cambria, serif",
        fontSize: "10px",
        lineHeight: "1.15",
      }}
      aria-hidden="true"
    >
      {allSections.map((s) => (
        <div key={s.key}>{s.node}</div>
      ))}
    </div>
  );

  // Hidden PDF render container (off-screen but visible to html2canvas)
  const PdfRenderDiv = () => (
    <div
      ref={pdfRef}
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "794px", // A4 at 96dpi
        backgroundColor: "#ffffff",
        padding: "38px 57px", // ~1cm top/bottom, 1.5cm sides
        fontFamily: "Cambria, serif",
        fontSize: "10px",
        lineHeight: "1.15",
        color: "#000000",
      }}
    >
      {allSections.map((s) => (
        <div key={s.key}>{s.node}</div>
      ))}
    </div>
  );

  // ---- FULLSCREEN MODE ----
  if (isFullscreen) {
    const totalPages = page2Sections.length > 0 ? 2 : 1;
    return (
      <div className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-start p-4 md:p-8 overflow-y-auto">
        <MeasurementDiv />
        <div className="w-full flex justify-end mb-4 shrink-0 max-w-[1700px] px-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className={`p-3 border rounded-full transition-all hover:scale-110 cursor-pointer active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-black/5 border-black/10 text-zinc-900 hover:bg-black/10'}`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Pages displayed side-by-side */}
        <div className={`flex ${totalPages > 1 ? 'flex-row gap-8 items-start justify-center flex-wrap' : 'justify-center'} w-full`}>
          {/* Page 1 */}
          <div className="relative shrink-0">
            <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: 'sans-serif' }}>Page 1 of {totalPages}</div>
            <div className="w-[500px] h-[707px] bg-white text-black shadow-2xl p-8 flex flex-col overflow-hidden" style={{ fontFamily: 'Cambria, serif', textAlign: 'justify' }}>
              {page1Sections.map((s) => (
                <div key={s.key}>{s.node}</div>
              ))}
            </div>
          </div>

          {/* Page 2 */}
          {page2Sections.length > 0 && (
            <div className="relative shrink-0">
              <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: 'sans-serif' }}>Page 2 of {totalPages}</div>
              <div className="w-[500px] h-[707px] bg-white text-black shadow-2xl p-8 flex flex-col overflow-hidden" style={{ fontFamily: 'Cambria, serif' }}>
                {page2Sections.map((s) => (
                  <div key={s.key}>{s.node}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-10 shrink-0" />
      </div>
    );
  }

  // ---- STUDIO MODE ----
  if (isStudio) {
    const totalPages = page2Sections.length > 0 ? 2 : 1;
    return (
      <div className="flex flex-col h-full overflow-hidden p-6 gap-2 scroll-smooth relative">
        <MeasurementDiv />
        {/* A4 Preview - Scaled down for Studio */}
        <div className="flex-1 min-h-0 relative group">
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md cursor-pointer shadow-lg"
            title="Full Screen Preview"
          >
            <Maximize className="w-4 h-4" />
          </button>
          <div className="absolute inset-x-0 bottom-0 top-0 overflow-y-auto px-4 py-4 custom-scrollbar">
            {/* Page 1 */}
            <div className="mx-auto w-full max-w-[500px] relative mb-2">
              <div className="text-[8px] font-semibold text-[#7A7B7F] uppercase tracking-widest mb-1" style={{ fontFamily: "sans-serif" }}>
                Page 1 of {totalPages}
              </div>
              <div className="bg-white text-black shadow-[0_12px_40px_0_rgba(0,0,0,0.1)] rounded-sm py-8 px-6 flex flex-col h-[707px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.15)]" style={{ fontFamily: "Cambria, serif" }}>
                {page1Sections.map((s) => (
                  <div key={s.key}>{s.node}</div>
                ))}
              </div>
            </div>

            {/* Page 2 */}
            {page2Sections.length > 0 && (
              <div className="mx-auto w-full max-w-[500px] relative mt-6 mb-4">
                <div className="text-[8px] font-semibold text-[#7A7B7F] uppercase tracking-widest mb-1" style={{ fontFamily: "sans-serif" }}>
                  Page 2 of {totalPages}
                </div>
                <div className="bg-white text-black shadow-[0_12px_40px_0_rgba(0,0,0,0.1)] rounded-sm py-8 px-6 flex flex-col h-[707px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.15)]" style={{ fontFamily: "Cambria, serif" }}>
                  {page2Sections.map((s) => (
                    <div key={s.key}>{s.node}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tools Toggle */}
        <div className="flex justify-center -mt-2 z-10">
          <button
            onClick={() => setIsToolsExpanded(!isToolsExpanded)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full text-[12px] font-semibold shadow-sm transition-all cursor-pointer backdrop-blur-md ${isDark ? 'bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300' : 'bg-black/5 hover:bg-black/10 border-black/5 text-zinc-700'}`}
          >
            {isToolsExpanded ? "Hide Details Tools" : "Show Details Tools"}
            {isToolsExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Studio Tools Area */}
        <div className={`transition-all duration-500 origin-bottom overflow-hidden flex flex-col gap-4 ${isToolsExpanded ? 'max-h-[500px] opacity-100 pb-2' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-2 gap-4">
            {studioTools.map((tool) => (
              <button
                key={tool.label}
                onClick={tool.onClick}
                className={`flex flex-col items-center justify-center p-4 rounded-3xl ${tool.color}/20 hover:${tool.color}/40 border border-${tool.color.replace("bg-", "")}/30 transition-all duration-400 group relative cursor-pointer`}
              >
                <div
                  className={`p-2 rounded-xl mb-2 ${tool.color} ${tool.textColor} group-hover:scale-110 transition-transform`}
                >
                  {tool.icon}
                </div>
                <span className={`text-[11px] font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {tool.label}
                </span>
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/40 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-[#FCD34D]" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-1">
            <Button
              onClick={handleDownload}
              className={`w-full h-14 rounded-[24px] flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] transition-all group cursor-pointer font-bold ${isDark ? 'bg-white text-zinc-950' : 'bg-black text-white'}`}
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span className="font-semibold text-[15px]">Download PDF</span>
            </Button>
          </div>
        </div>

        {/* ML Prediction Overlay */}
        {showAtsPanel && (
          <div className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center p-4">
            <div className="w-full max-w-[450px] relative animate-in slide-in-from-bottom duration-500">
              <button 
                onClick={() => setShowAtsPanel(false)}
                className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              
              {isCheckingAts ? (
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium italic">Running ML Pipeline...<br/>Cleaning Data → Engineering Features → Scoring</p>
                </div>
              ) : mlResult ? (
                <AtsScorePanel 
                  prediction={mlResult.prediction} 
                  features={mlResult.features} 
                  evaluation={mlResult.evaluation} 
                />
              ) : null}
            </div>
          </div>
        )}

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}</style>
      </div>
    );
  }

  // ---- DEFAULT / STANDARD MODE ----
  const totalPages = page2Sections.length > 0 ? 2 : 1;
  return (
    <div className="flex flex-col h-full bg-zinc-950 overflow-y-auto p-4 md:p-12 items-center relative">
      <MeasurementDiv />

      {/* Page 1 */}
      <div className="w-full max-w-[800px] relative mb-2">
        <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>
          Page 1 of {totalPages}
        </div>
        <div className="bg-white shadow-2xl p-10 md:p-14 flex flex-col h-[1131px] overflow-hidden" style={{ fontFamily: "Cambria, serif" }}>
          {page1Sections.map((s) => (
            <div key={s.key}>{s.node}</div>
          ))}
        </div>
      </div>

      {/* Page 2 */}
      {page2Sections.length > 0 && (
        <div className="w-full max-w-[800px] relative mt-10 mb-10">
          <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>
            Page 2 of {totalPages}
          </div>
          <div className="bg-white shadow-2xl p-10 md:p-14 flex flex-col h-[1131px] overflow-hidden" style={{ fontFamily: "Cambria, serif" }}>
            {page2Sections.map((s) => (
              <div key={s.key}>{s.node}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
