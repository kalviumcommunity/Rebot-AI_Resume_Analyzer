import React from 'react';
import { 
  Menu, 
  ChevronDown, 
  Sparkles, 
  User, 
  Presentation, 
  Smartphone, 
  ScrollText, 
  Lightbulb, 
  Paperclip, 
  Palette, 
  Box, 
  ArrowUp, 
  Wand2, 
  FileText, 
  Link, 
  Youtube,
  Aperture
} from 'lucide-react';

export default function DokieLandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Exact Background Recreation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#38b4ff] via-[#72cdff] to-[#e6f4ff]" />
        {/* Soft cloud-like glows at the bottom */}
        <div className="absolute bottom-0 left-[10%] w-[40vw] h-[30vh] bg-white/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-[50vw] h-[40vh] bg-white/50 blur-[120px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-5 text-white">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              {/* Logo Icon Placeholder */}
              <Aperture className="w-7 h-7 text-white stroke-[2.5]" />
              <span className="text-2xl font-bold tracking-tight">dokie</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium mt-1">
              <a href="#" className="hover:text-white/80 transition">Tutorial</a>
              <a href="#" className="flex items-center gap-1 hover:text-white/80 transition">
                Tools <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white/80 transition">Community</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Promo Badge */}
            <div className="flex items-center gap-2 bg-white/90 text-slate-800 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              <span className="text-orange-500 font-bold flex items-center gap-1">
                 <span className="text-base">%</span> 50% Off
              </span>
              <span className="text-slate-600">Limited Time</span>
            </div>
            
            {/* Credits Badge */}
            <div className="flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>500</span>
            </div>

            {/* User Avatar */}
            <div className="w-8 h-8 bg-black rounded-full border-2 border-white shadow-sm cursor-pointer" />
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center mt-12 px-4">
          
          {/* Center Logo/Icon */}
          <div className="mb-4">
             <Aperture className="w-14 h-14 text-white stroke-[2]" />
          </div>

          {/* Tagline */}
          <h1 className="text-3xl md:text-4xl text-white mb-10" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            A smarter way to present idea
          </h1>

          {/* Main Input Box */}
          <div className="w-full max-w-[800px] bg-white rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] p-2 mb-10 overflow-hidden">
            
            {/* Top Tabs */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-gray-100/80 px-4 py-2 rounded-full text-sm font-semibold text-slate-800 transition">
                  <Presentation className="w-4 h-4" />
                  Slides
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
                  <Smartphone className="w-4 h-4" />
                  Social media
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
                  <ScrollText className="w-4 h-4" />
                  Long scroll
                </button>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition">
                <Lightbulb className="w-5 h-5" />
              </button>
            </div>

            {/* Text Area */}
            <div className="px-5 py-4">
              <textarea 
                className="w-full h-24 outline-none resize-none text-gray-700 placeholder:text-gray-300 text-lg"
                placeholder="Describe your topic or idea, or upload your files (doc, pdf, pptx, txt)..."
              ></textarea>
            </div>

            {/* Bottom Toolbar */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="h-4 w-px bg-gray-200"></div>
                <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
                  <Palette className="w-4 h-4" />
                  Theme <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
                  <Box className="w-4 h-4" />
                  Free model <ChevronDown className="w-3 h-3 ml-1" />
                </button>
              </div>
              <button className="bg-gray-200 hover:bg-gray-300 text-white p-2.5 rounded-full transition flex items-center justify-center">
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Start Label */}
          <p className="text-white/80 text-sm mb-4 font-medium tracking-wide">Quick Start</p>

          {/* Quick Start Buttons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Wand2 className="w-4 h-4 text-pink-400" />
              Refresh your slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <FileText className="w-4 h-4 text-blue-400" />
              Doc to slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Link className="w-4 h-4 text-green-500" />
              URL to slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Youtube className="w-4 h-4 text-red-500" />
              YouTube to slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
          </div>

          {/* Bottom Card Preview (Partial) */}
          <div className="mt-16 bg-white rounded-t-3xl shadow-xl w-full max-w-[600px] h-[150px] relative overflow-hidden flex">
             <div className="p-8 w-1/2">
                <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">Get started with our quick-start guide here.</h3>
             </div>
             <div className="w-1/2 relative bg-blue-500 mt-4 mr-4 rounded-t-xl overflow-hidden shadow-inner">
                {/* Decorative mock element for the folder/card in the bottom right */}
                <div className="absolute top-4 left-4 text-white font-bold text-2xl tracking-tighter">
                   Take a
                   <br />tour
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                   <div className="w-3 h-1 bg-green-300 rounded-full"></div>
                   <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                </div>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}