"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const glassStyle = "bg-white/40 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]";
    
    const handleLogout = () => {
        router.push("/login");
    };

    const navItems = [
        { name: "Home", path: "/dashboard" },
        { name: "Dashboard", path: "/resume-builder" },
        { name: "Profile", path: "/profile" },
    ];

    return (
        <header className="relative z-50 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-6 transition-all duration-700">
            <nav className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <Link href="/dashboard" className={`px-8 py-2.5 rounded-full text-2xl font-light tracking-tight text-[#1D1E20] ${glassStyle} hover:scale-105 transition-transform active:scale-95`}>
                    rebot
                </Link>

                {/* Navigation Pills */}
                <div className={`flex items-center p-1.5 rounded-full ${glassStyle} gap-1 flex-wrap justify-center`}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all duration-400 ease-out ${
                                    isActive 
                                    ? "bg-[#2A2B2F]/90 text-white shadow-lg border border-white/10" 
                                    : "text-[#5A5B5F] hover:text-[#1D1E20] hover:bg-white/20"
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleLogout}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium text-[#1D1E20] ${glassStyle} hover:bg-red-500/10 hover:text-red-500 transition-colors cursor-pointer active:scale-95`}
                    >
                        <LogOut className="w-[20px] h-[20px]" />
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
}
