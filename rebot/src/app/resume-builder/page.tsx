"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ResumeEditor from "@/components/ResumeEditor";
import ResumePreview from "@/components/ResumePreview";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ResumeData } from "@/types/resumeTypes";
import { FileText, Briefcase, Layout, Cpu, Plus } from "lucide-react";

export default function ResumeBuilderPage() {
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState("brief");
    const [resumeData, setResumeData] = useState<Partial<ResumeData>>({
        user: {
            id: "demo-user",
            name: "Lora Piterson",
            email: "student@example.com",
            linkedin: "linkedin.com/in/lorapiterson",
            github: "github.com/lorapiterson",
            personalStatement: "A passionate software engineer with experience in full-stack development..."
        }
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleDataChange = (newData: Partial<ResumeData>) => {
        setResumeData(prev => ({ ...prev, ...newData }));
    };

    if (!mounted) return null;

    const sections = [
        { id: "brief", label: "Brief", icon: <FileText className="w-5 h-5" /> },
        { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
        { id: "projects", label: "Projects", icon: <Layout className="w-5 h-5" /> },
        { id: "skills", label: "Skills", icon: <Cpu className="w-5 h-5" /> },
    ];

    const glassStyle = "bg-white/40 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]";

    return (
        <div className="min-h-screen h-screen flex flex-col bg-[#FDFBF7] relative overflow-hidden font-sans text-[#1D1E20]">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#FFF2CB]/80 to-[#FDFBF7]/10 blur-[120px]" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#60A5FA]/20 to-transparent blur-[100px]" />
                <div className="absolute bottom-[0%] right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#FFF4D5]/60 to-transparent blur-[120px]" />
            </div>

            <Navbar />

            <main className="flex-1 flex overflow-hidden relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 pb-8 gap-6">
                <style>{`
                    @keyframes slideUpFade {
                        0% { opacity: 0; transform: translateY(20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    .animate-stagger-1 { animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                `}</style>

                {/* Left Column: Sources/Sections (20%) */}
                <aside className={`w-[20%] min-w-[240px] rounded-[32px] p-8 flex flex-col gap-6 ${glassStyle} animate-stagger-1`}>
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-medium">Sections</h2>
                        <button className="p-2 rounded-xl hover:bg-white/40 transition-colors">
                            <Plus className="w-5 h-5 text-[#7A7B7F]" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[14px] font-medium transition-all duration-300 ${
                                    activeSection === section.id
                                    ? "bg-[#2A2B2F] text-white shadow-lg"
                                    : "text-[#5A5B5F] hover:bg-white/40 hover:text-[#1D1E20]"
                                }`}
                            >
                                {section.icon}
                                {section.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/20">
                        <div className="p-4 rounded-[24px] bg-[#FCD34D]/10 border border-[#FCD34D]/20">
                            <p className="text-[11px] font-semibold text-[#8C6D1F] uppercase tracking-wider mb-2">AI Assistant</p>
                            <p className="text-[12px] text-[#8C6D1F]/80 leading-relaxed">Let rebot optimize your content as you type.</p>
                        </div>
                    </div>
                </aside>

                {/* Center Column: Chat/Editor (40%) */}
                <section className={`flex-1 rounded-[32px] flex flex-col overflow-hidden ${glassStyle} animate-stagger-1`} style={{ animationDelay: '0.1s' }}>
                    <ResumeEditor activeSection={activeSection} data={resumeData} onChange={handleDataChange} />
                </section>

                {/* Right Column: Studio / Preview (40%) */}
                <section className={`w-[40%] rounded-[32px] flex flex-col overflow-hidden ${glassStyle} animate-stagger-1`} style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between p-6 pb-2">
                        <h2 className="text-xl font-medium px-2">Studio</h2>
                        <div className="flex items-center gap-2">
                            <div className="px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200/50 text-blue-600 text-[11px] font-bold">PRO</div>
                        </div>
                    </div>
                    <ResumePreview data={resumeData} isStudio />
                </section>
            </main>

            {/* AI Assistant Widget (Floating) */}
            <ChatbotWidget />
        </div>
    );
}
