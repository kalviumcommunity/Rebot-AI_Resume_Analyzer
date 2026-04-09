"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Share2, Settings, Grid, User, Plus, Edit2, HelpCircle, MessageSquare, Globe, Shield, Zap, Sun, Moon, Monitor, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = React.useState(false);
    const [isEditingTitle, setIsEditingTitle] = React.useState(false);
    const [title, setTitle] = React.useState("rebot resume");
    const { theme, setTheme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const handleLogout = () => {
        router.push("/login");
    };

    const glassStyle = "bg-transparent backdrop-blur-none border-none shadow-none";

    const menuVariants = {
        hidden: { opacity: 0, scale: 0.95, y: -10 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -10 }
    };

    const themeOptions = [
        { id: 'light', label: 'Light mode', icon: Sun },
        { id: 'dark', label: 'Dark mode', icon: Moon },
        { id: 'device', label: 'Device', icon: Monitor },
    ];

    return (
        <header className={`relative z-50 w-full px-6 py-4 transition-all duration-700 border-b border-transparent ${isDark ? 'text-white' : 'text-zinc-900 bg-white/50 backdrop-blur-md border-black/5 shadow-sm'}`}>
            <nav className="flex items-center justify-between">
                {/* Top Left: Logo + Editable Title */}
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>
                        <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center p-0.5 ${isDark ? 'border-white' : 'border-zinc-900'}`}>
                            <div className={`w-full h-full border rounded-[1px] ${isDark ? 'border-white bg-white/40' : 'border-zinc-900 bg-zinc-900/40'}`} />
                        </div>
                    </Link>
                    
                    <div className="flex items-center gap-2 group">
                        {isEditingTitle ? (
                            <input
                                autoFocus
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onBlur={() => setIsEditingTitle(false)}
                                onKeyDown={(e) => e.key === "Enter" && setIsEditingTitle(false)}
                                className={`bg-transparent text-xl font-medium outline-none border-b w-48 transition-all ${isDark ? 'text-white border-white/30 focus:border-white' : 'text-zinc-900 border-black/20 focus:border-black'}`}
                            />
                        ) : (
                            <h1 
                                onClick={() => setIsEditingTitle(true)}
                                className={`text-xl font-medium cursor-text transition-colors ${isDark ? 'text-white hover:text-white/80' : 'text-zinc-900 hover:text-black/70'}`}
                            >
                                {title}
                            </h1>
                        )}
                        <Edit2 className={`w-3.5 h-3.5 transition-colors cursor-pointer ${isDark ? 'text-white/30 group-hover:text-white/60' : 'text-black/30 group-hover:text-black/60'}`} onClick={() => setIsEditingTitle(true)} />
                    </div>
                </div>

                {/* Top Right: Actions */}
                <div className="flex items-center gap-4">
                    {/* Create Notebook Button */}
                    <button className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all shadow-lg active:scale-95 group ${isDark ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                        <div className={`p-0.5 border rounded-md ${isDark ? 'border-zinc-300' : 'border-zinc-600'}`}>
                            <Plus className="w-3.5 h-3.5" />
                        </div>
                        Create Resume
                    </button>

                    {/* Action Icons */}
                    <div className="flex items-center gap-1.5 ml-2">
                        <button className={`p-2.5 rounded-full transition-all group ${isDark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-black/5 text-zinc-500'}`} title="Share">
                            <Share2 className="w-5 h-5 group-hover:scale-110" />
                        </button>
                        <div className="relative">
                            <button 
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                className={`flex items-center gap-2 p-2.5 rounded-full transition-all group ${isSettingsOpen ? (isDark ? 'bg-white/20 text-white' : 'bg-black/10 text-zinc-900') : (isDark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-black/5 text-zinc-500')}`} 
                                title="Settings"
                            >
                                <Settings className={`w-5 h-5 ${isSettingsOpen ? 'rotate-90' : 'group-hover:rotate-45'} transition-transform`} />
                                <span className="hidden lg:block text-[14px] font-medium">Settings</span>
                            </button>

                            <AnimatePresence>
                                {isSettingsOpen && (
                                    <motion.div
                                        variants={menuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute right-0 mt-2 w-64 bg-[#1E1F23] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 z-[60]"
                                    >
                                        <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/90 transition-colors">
                                            <HelpCircle className="w-5 h-5 text-white/60" />
                                            <span className="text-sm font-medium">Rebot Help</span>
                                        </button>
                                        <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/90 transition-colors">
                                            <MessageSquare className="w-5 h-5 text-white/60" />
                                            <span className="text-sm font-medium">Send feedback</span>
                                        </button>
                                        <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 text-white/90 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Globe className="w-5 h-5 text-white/60" />
                                                <span className="text-sm font-medium">Output language</span>
                                            </div>
                                        </button>
                                        <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/90 transition-colors border-b border-white/5 mb-1">
                                            <Shield className="w-5 h-5 text-white/60" />
                                            <span className="text-sm font-medium">Licences</span>
                                        </button>

                                        {/* Theme Picker */}
                                        <div className="relative">
                                            <button 
                                                onMouseEnter={() => setIsThemeMenuOpen(true)}
                                                onMouseLeave={() => setIsThemeMenuOpen(false)}
                                                className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 text-white/90 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {theme === 'light' ? <Sun className="w-5 h-5 text-white/60" /> : theme === 'dark' ? <Moon className="w-5 h-5 text-white/60" /> : <Monitor className="w-5 h-5 text-white/60" />}
                                                    <span className="text-sm font-medium">{themeOptions.find(o => o.id === theme)?.label || 'Theme'}</span>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-white/30" />

                                                <AnimatePresence>
                                                    {isThemeMenuOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className="absolute right-full top-0 mr-1 w-48 bg-[#1E1F23] border border-white/10 rounded-2xl shadow-2xl py-2"
                                                        >
                                                            {themeOptions.map((opt) => (
                                                                <button
                                                                    key={opt.id}
                                                                    onClick={() => {
                                                                        setTheme(opt.id as any);
                                                                        setIsSettingsOpen(false);
                                                                    }}
                                                                    className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 text-sm transition-colors ${theme === opt.id ? 'text-[#FCD34D]' : 'text-white/80'}`}
                                                                >
                                                                    <opt.icon className={`w-4 h-4 ${theme === opt.id ? 'text-[#FCD34D]' : 'text-white/40'}`} />
                                                                    {opt.label}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </button>
                                        </div>

                                        <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/90 transition-colors mt-1">
                                            <Zap className="w-5 h-5 text-[#FCD34D]" />
                                            <span className="text-sm font-medium">Upgrade Rebot</span>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <button className="p-2.5 rounded-full hover:bg-white/10 text-white/80 transition-all" title="Apps">
                            <Grid className="w-5 h-5" />
                        </button>
                        <button onClick={handleLogout} className="ml-2 w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-lg hover:ring-4 hover:ring-pink-600/20 transition-all shadow-lg active:scale-95">
                            R
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
