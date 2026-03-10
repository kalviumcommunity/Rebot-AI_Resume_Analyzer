"use client";

import { ResumeData } from "@/types/resumeTypes";
import { Button } from "./ui/button";
import { Download, Sparkles, FileText, Share2, Printer, Layout, Video, Presentation } from "lucide-react";

interface ResumePreviewProps {
    data: Partial<ResumeData>;
    isStudio?: boolean;
}

export default function ResumePreview({ data, isStudio }: ResumePreviewProps) {
    const handleDownload = async () => {
        console.log("Generating document via /api/generate-resume...");
    };

    const studioTools = [
        { icon: <Layout className="w-5 h-5" />, label: "ATS Check", color: "bg-green-100", textColor: "text-green-600" },
        { icon: <Share2 className="w-5 h-5" />, label: "Share Link", color: "bg-blue-100", textColor: "text-blue-600" },
        { icon: <Printer className="w-5 h-5" />, label: "Print CV", color: "bg-orange-100", textColor: "text-orange-600" },
        { icon: <Sparkles className="w-5 h-5" />, label: "AI Viz", color: "bg-purple-100", textColor: "text-purple-600" },
    ];

    if (isStudio) {
        return (
            <div className="flex flex-col h-full overflow-hidden p-6 gap-6 scroll-smooth">
                {/* A4 Preview - Scaled down for Studio view */}
                <div className="flex-1 min-h-0 relative group">
                    <div className="absolute inset-x-0 bottom-0 top-0 overflow-y-auto px-4 py-8 custom-scrollbar">
                        <div className="mx-auto w-full max-w-[500px] aspect-[1/1.414] bg-white text-black shadow-[0_12px_40px_0_rgba(0,0,0,0.1)] rounded-sm p-10 transform origin-top transition-all duration-500 scale-[1.0] group-hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.15)] flex flex-col font-serif">
                             {/* Header */}
                            <div className="text-center border-b border-zinc-200 pb-4 mb-4">
                                <h1 className="text-2xl font-bold tracking-tight text-zinc-900 mb-1">
                                    {data.user?.name || "YOUR NAME"}
                                </h1>
                                <p className="text-[10px] text-zinc-600 flex justify-center gap-3">
                                    <span>{data.user?.email || "email@example.com"}</span>
                                    <span>{data.user?.linkedin || "linkedin.com/..."}</span>
                                </p>
                            </div>

                            {/* Brief Summary */}
                            <div className="mb-4">
                                <p className="text-[10px] text-zinc-800 leading-relaxed italic">
                                    {data.user?.personalStatement || "A highly motivated software engineer..."}
                                </p>
                            </div>

                            {/* Section Preview Placeholder */}
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="space-y-2">
                                    <div className="h-4 w-24 bg-zinc-100 rounded" />
                                    <div className="h-3 w-full bg-zinc-50 rounded" />
                                    <div className="h-3 w-4/5 bg-zinc-50 rounded" />
                                </div>
                                <div className="space-y-2 mt-4">
                                    <div className="h-4 w-24 bg-zinc-100 rounded" />
                                    <div className="h-3 w-full bg-zinc-50 rounded" />
                                    <div className="h-3 w-3/4 bg-zinc-50 rounded" />
                                </div>
                            </div>

                            <div className="mt-auto pt-4 flex justify-between items-center text-[8px] text-zinc-400 border-t border-zinc-100 uppercase tracking-widest">
                                <span>REBOT ATS-v1</span>
                                <span>2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Studio Tools Area - Matching the right column of the reference image */}
                <div className="grid grid-cols-2 gap-4 pb-4">
                    {studioTools.map((tool) => (
                        <button 
                            key={tool.label}
                            className={`flex flex-col items-center justify-center p-4 rounded-3xl ${tool.color}/20 hover:${tool.color}/40 border border-${tool.color.replace('bg-', '')}/30 transition-all duration-400 group relative`}
                        >
                            <div className={`p-2 rounded-xl mb-2 ${tool.color} ${tool.textColor} group-hover:scale-110 transition-transform`}>
                                {tool.icon}
                            </div>
                            <span className={`text-[11px] font-semibold text-[#1D1E20]`}>{tool.label}</span>
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/40 flex items-center justify-center">
                                <Sparkles className="w-2.5 h-2.5 text-[#FCD34D]" />
                            </div>
                        </button>
                    ))}
                </div>

                <div className="pt-2">
                    <Button 
                        onClick={handleDownload} 
                        className="w-full h-14 rounded-[24px] bg-[#2A2B2F] text-white flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] transition-all group"
                    >
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span className="font-semibold text-[15px]">Download PDF</span>
                    </Button>
                </div>

                <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 0px;
                        background: transparent;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-zinc-100 dark:bg-zinc-900 overflow-y-auto p-8 items-center relative">
            {/* Standard full-screen preview - non-studio */}
            <div className="w-full max-w-3xl aspect-[1/1.414] bg-white text-black shadow-2xl p-12 overflow-hidden flex flex-col">
                <h1 className="text-4xl font-serif font-bold text-center mb-10">{data.user?.name || "YOUR NAME"}</h1>
                {/* ... standard preview content */}
            </div>
        </div>
    );
}
