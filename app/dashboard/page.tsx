"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FileText, Plus, Clock, MoreVertical, Edit2, Download, Trash2, Monitor, ArrowRight } from "lucide-react";

export default function DashboardPage() {
    const [mounted, setMounted] = useState(false);
    const loading = false;
    const user = { email: "student@example.com", uid: "123", name: "Lora" };
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const glassStyle = "bg-white/40 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]";
    const darkGlassStyle = "bg-[#2A2B2F]/90 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/10 shadow-[0_12px_40px_0_rgba(0,0,0,0.2)]";
    const cardHoverStyle = "transition-all duration-400 ease-out hover:scale-[1.02] hover:shadow-xl hover:bg-white/50";

    if (!mounted) return null;

    return (
        <div className="min-h-screen w-full font-sans text-[#1D1E20] bg-[#FDFBF7] relative overflow-x-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#FFF2CB]/80 to-[#FDFBF7]/10 blur-[120px]" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#60A5FA]/20 to-transparent blur-[100px]" />
                <div className="absolute bottom-[0%] right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#FFF4D5]/60 to-transparent blur-[120px]" />
            </div>

            <Navbar />

            <main className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-10 animate-stagger-1">
                <style>{`
                    @keyframes slideUpFade {
                        0% { opacity: 0; transform: translateY(20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    .animate-stagger-1 { animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
                `}</style>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-[40px] font-light tracking-tight text-[#1D1E20] leading-tight mb-2">My Resumes</h1>
                        <p className="text-[15px] font-medium text-[#7A7B7F]">Manage your ATS-optimized professional profiles.</p>
                    </div>
                    <button 
                        onClick={() => router.push("/resume-builder")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[15px] font-semibold text-white ${darkGlassStyle} hover:scale-105 transition-all shadow-lg active:scale-95`}
                    >
                        <Plus className="w-5 h-5" />
                        New Resume
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Create New Card */}
                    <div 
                        onClick={() => router.push("/resume-builder")}
                        className={`${glassStyle} ${cardHoverStyle} rounded-[32px] p-8 flex flex-col items-center justify-center min-h-[340px] border-dashed border-2 group cursor-pointer`}
                    >
                        <div className="w-20 h-20 rounded-full bg-[#FCD34D]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Plus className="w-10 h-10 text-[#8C6D1F]" />
                        </div>
                        <h3 className="text-xl font-medium text-[#1D1E20]">Create New</h3>
                        <p className="text-sm text-[#7A7B7F] text-center mt-3 px-4">
                            Start building a fresh resume with AI guidance.
                        </p>
                    </div>

                    {/* Dummy Resume Card */}
                    <div className={`${glassStyle} ${cardHoverStyle} rounded-[32px] p-8 flex flex-col min-h-[340px] relative group`}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100/50 flex items-center justify-center text-blue-600 border border-blue-200/50">
                                <FileText className="w-7 h-7" />
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100">
                                    <MoreVertical className="w-5 h-5 text-[#7A7B7F]" />
                                </button>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-light text-[#1D1E20] mb-1">Fullstack Dev</h3>
                            <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#7A7B7F]">
                                <Clock className="w-3.5 h-3.5" />
                                Updated 2h ago
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col gap-4">
                            <div className="inline-flex items-center justify-between w-full px-4 py-2 rounded-xl bg-green-50/50 border border-green-200/50 text-green-700 text-[13px] font-bold">
                                <span>ATS Score</span>
                                <span className="text-lg">85</span>
                            </div>
                            
                            <button 
                                onClick={() => router.push("/resume-builder")}
                                className="w-full py-3.5 rounded-xl bg-[#2A2B2F]/10 hover:bg-[#2A2B2F]/20 text-[#1D1E20] text-[14px] font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                            >
                                <Edit2 className="w-4 h-4" />
                                Edit Resume
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
