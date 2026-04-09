'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, ArrowRight, ChevronDown, Link2, Image as ImageIcon } from 'lucide-react';

export default function AIPoweredFeatures() {
  // Scroll reveal animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 80 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center pb-32">
      
      {/* Navbar specific to this image */}
      <nav className="w-full flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          {/* Gray Pill Menu */}
          <div className="bg-[#b4bac2] rounded-full px-5 py-2.5 flex items-center gap-6 shadow-sm">
            <div className="flex items-center gap-2 cursor-pointer text-white mr-4">
              <Aperture className="w-6 h-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">Rebot</span>
            </div>
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-white/90">
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">Pricing</a>
              <a href="#" className="hover:text-white transition">Tutorial</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="flex items-center gap-1 hover:text-white transition">
                Tools <ChevronDown className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-white transition">Community</a>
              <a href="#" className="hover:text-white transition">FAQs</a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-800 bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#22252a] hover:bg-black transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="flex flex-col items-center text-center mt-12 px-4 max-w-3xl"
      >
        <div className="border border-gray-200 text-gray-700 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 bg-white shadow-sm">
          AI-POWERED
        </div>
        
        <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Powered by strong AI capabilities
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
          AI sits at the core of Rebot, shaping how content is understood, structured, and turned into visual expression.
        </p>

        <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
          Start for free <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerCards}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-[1200px] px-6"
      >

        {/* Card 1: Multi-Format Understanding */}
        <motion.div variants={cardItem} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Visual Area */}
          <div className="h-[280px] w-full bg-gradient-to-b from-[#8ce0ff] via-[#cbf1ff] to-[#f0f9ff] relative overflow-hidden flex items-center justify-center pt-8">
             {/* Concentric Arcs */}
             <div className="absolute top-[40%] w-[120%] h-[120%] rounded-full border border-white/40 border-t-transparent border-r-transparent border-l-transparent transform -translate-x-1/2 left-1/2"></div>
             <div className="absolute top-[30%] w-[150%] h-[150%] rounded-full border border-white/20 border-t-transparent border-r-transparent border-l-transparent transform -translate-x-1/2 left-1/2"></div>
             
             {/* Center Glow & Logo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#ffc875] rounded-full blur-[30px] opacity-80"></div>
             <Aperture className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white z-10 stroke-[2.5]" />

             {/* Floating File Icons (U-Shape curve) */}
             {/* XLSX */}
             <div className="absolute left-[15%] top-[55%] -rotate-12 bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
                <div className="bg-[#21a366] text-white text-[8px] font-black w-full h-full rounded flex items-center justify-center text-center leading-none">XLSX</div>
             </div>
             {/* PDF (Red) */}
             <div className="absolute left-[25%] top-[70%] -rotate-6 bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
                <div className="bg-[#e24444] text-white w-full h-full rounded flex items-center justify-center">
                   <div className="w-3 h-4 border-2 border-white rounded-sm"></div>
                </div>
             </div>
             {/* PPTX */}
             <div className="absolute left-[40%] top-[80%] rotate-0 bg-white w-12 h-10 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
                <div className="bg-[#d04423] text-white text-[8px] font-black w-full h-full rounded flex items-center justify-center">PPTX</div>
             </div>
             {/* DOC */}
             <div className="absolute right-[40%] top-[80%] rotate-6 bg-white w-12 h-10 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
                <div className="bg-[#2b579a] text-white text-[8px] font-black w-full h-full rounded flex items-center justify-center">DOC</div>
             </div>
             {/* Link */}
             <div className="absolute right-[25%] top-[70%] rotate-12 bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
                <div className="text-[#2a85ff] w-full h-full flex items-center justify-center"><Link2 className="w-5 h-5" /></div>
             </div>
             {/* Image */}
             <div className="absolute right-[15%] top-[55%] rotate-[20deg] bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
                <div className="text-[#34a853] w-full h-full flex items-center justify-center"><ImageIcon className="w-5 h-5" /></div>
             </div>
          </div>
          <div className="p-8 bg-white flex-grow">
            <h3 className="text-xl font-bold text-gray-900">Multi-Format Understanding</h3>
          </div>
        </motion.div>

        {/* Card 2: Image Generation & Search */}
        <motion.div variants={cardItem} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Visual Area */}
          <div className="h-[280px] w-full bg-[#fdfaf0] relative overflow-hidden flex items-center justify-center">
             {/* Subtle dot pattern */}
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
             {/* Center warm glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ffe2a8] rounded-full blur-[40px] opacity-50"></div>

             {/* Mock Images Layout */}
             
             {/* Background Blurred Image */}
             <div className="absolute top-[15%] left-[50%] w-16 h-20 bg-orange-500 rounded-lg blur-md opacity-60"></div>

             {/* Main Left Image (Abstract) */}
             <div className="absolute left-[15%] top-[30%] w-32 h-20 bg-indigo-900 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
                {/* CSS Art Abstract space/circles */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 via-purple-600 to-indigo-900 relative">
                   <div className="absolute top-2 left-4 w-8 h-8 border-2 border-orange-300 rounded-full"></div>
                   <div className="absolute bottom-[-10px] right-2 w-16 h-16 bg-blue-500 rounded-full blur-md mix-blend-screen"></div>
                </div>
             </div>

             {/* Bottom Left Image (Landscape) */}
             <div className="absolute left-[25%] bottom-[15%] w-20 h-14 bg-green-800 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-blue-300 to-green-600 relative">
                   <div className="absolute bottom-0 w-full h-1/2 bg-green-700 rounded-t-[100%]"></div>
                   <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-200 rounded-full"></div>
                </div>
             </div>

             {/* Top Right Image (Portrait) */}
             <div className="absolute right-[20%] top-[25%] w-14 h-20 bg-blue-950 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-black to-blue-900">
                   <div className="w-6 h-10 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-300 via-purple-500 to-transparent blur-[2px] rounded-full"></div>
                </div>
             </div>

             {/* Bottom Right Image (Purple Swirl) */}
             <div className="absolute right-[15%] bottom-[20%] w-28 h-16 bg-purple-900 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
                 <div className="w-full h-full bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-purple-500 via-pink-500 to-indigo-500 blur-sm scale-150"></div>
                 <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
             </div>

             {/* The Banana Graphic (Using SVG) */}
             <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center drop-shadow-2xl hover:scale-105 transition-transform">
                <svg width="80" height="80" viewBox="0 0 100 100" className="rotate-[20deg]">
                  <path d="M 80 20 Q 90 50 60 80 Q 20 80 10 70 Q 40 70 60 50 Q 70 30 80 20 Z" fill="#ffcd33" stroke="#f0b600" strokeWidth="2" />
                  <path d="M 80 20 Q 90 50 60 80" fill="none" stroke="#fff" strokeWidth="3" opacity="0.4" />
                  {/* Google-like 'G' icon on the banana */}
                  <g transform="translate(45, 50) scale(0.6)">
                     <circle cx="15" cy="15" r="12" fill="white" />
                     <path d="M15 9 C11 9 9 12 9 15 C9 18 11 21 15 21 C17 21 18.5 20 19.5 18 L15 18 L15 15 L23 15 C23 16 23 17 23 21 C21 24 18 25 15 25 C9 25 5 20 5 15 C5 10 9 5 15 5 C18 5 21 6.5 22.5 9 L19 11 C18.5 9.5 17 9 15 9 Z" fill="#4285f4"/>
                     <path d="M5 15 C5 10 9 5 15 5 L15 9 C11 9 9 12 9 15 L5 15 Z" fill="#ea4335"/>
                     <path d="M9 15 C9 18 11 21 15 21 L15 25 C9 25 5 20 5 15 L9 15 Z" fill="#34a853"/>
                     <path d="M15 21 C17 21 18.5 20 19.5 18 L23 20 C21 24 18 25 15 25 L15 21 Z" fill="#fbbc05"/>
                  </g>
                </svg>
             </div>

          </div>
          <div className="p-8 bg-white flex-grow">
            <h3 className="text-xl font-bold text-gray-900">Image Generation & Search</h3>
          </div>
        </motion.div>

        {/* Card 3: Data & Logic Visualization */}
        <motion.div variants={cardItem} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Visual Area */}
          <div className="h-[280px] w-full bg-[#f8f3ff] relative overflow-hidden flex items-center justify-center">
             {/* Grid background */}
             <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             {/* Center Purple Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-32 bg-[#eac7ff] rounded-[100%] blur-[40px] opacity-60"></div>

             {/* Folded UI Mockups Arc */}
             <div className="relative w-full h-full flex items-center justify-center mt-12 perspective-[1000px]">
               
               {/* Panel 1 (Far Left) */}
               <div className="absolute w-20 h-24 bg-white/90 backdrop-blur border border-white rounded-lg shadow-[-5px_10px_20px_rgba(150,100,200,0.15)] transform -rotate-[20deg] -translate-x-[110px] -translate-y-[20px] skew-y-6 flex items-center justify-center p-2 z-10">
                  {/* Scatter plot mock */}
                  <div className="w-full h-full border-l border-b border-gray-200 relative">
                     <div className="w-2 h-2 rounded-full bg-blue-400 absolute bottom-2 left-2"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400 absolute top-4 left-6"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-purple-400 absolute bottom-6 right-2"></div>
                  </div>
               </div>

               {/* Panel 2 (Center Left) */}
               <div className="absolute w-24 h-28 bg-white border border-gray-100 rounded-lg shadow-[0_10px_20px_rgba(150,100,200,0.1)] transform -rotate-[5deg] -translate-x-[45px] -translate-y-[40px] skew-y-3 flex items-center justify-center p-3 z-20">
                  {/* Pie chart flow mock */}
                  <div className="w-12 h-12 rounded-full border-4 border-blue-400 border-t-green-400 border-r-purple-400 relative">
                     <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                     <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
               </div>

               {/* Panel 3 (Center Right) */}
               <div className="absolute w-24 h-28 bg-white border border-gray-100 rounded-lg shadow-[5px_10px_20px_rgba(150,100,200,0.1)] transform rotate-[5deg] translate-x-[45px] -translate-y-[40px] -skew-y-3 flex flex-col items-center justify-center p-3 z-20 space-y-1.5">
                  {/* Flowchart mock */}
                  <div className="w-8 h-4 border border-blue-400 bg-blue-50 rounded-sm"></div>
                  <div className="w-0.5 h-2 bg-gray-300"></div>
                  <div className="flex gap-2">
                     <div className="w-6 h-4 border border-green-400 bg-green-50 rounded-sm"></div>
                     <div className="w-6 h-4 border border-purple-400 bg-purple-50 rounded-sm"></div>
                  </div>
               </div>

               {/* Panel 4 (Far Right) */}
               <div className="absolute w-20 h-24 bg-white/90 backdrop-blur border border-white rounded-lg shadow-[10px_10px_20px_rgba(150,100,200,0.15)] transform rotate-[20deg] translate-x-[110px] -translate-y-[20px] -skew-y-6 flex flex-col items-center justify-center p-2 z-10 gap-1.5">
                  {/* Funnel/Pyramid Mock */}
                  <div className="w-[80%] h-3 bg-blue-400/20 border border-blue-400 rounded-sm"></div>
                  <div className="w-[60%] h-3 bg-green-400/20 border border-green-400 rounded-sm"></div>
                  <div className="w-[40%] h-3 bg-purple-400/20 border border-purple-400 rounded-sm"></div>
               </div>

             </div>
          </div>
          <div className="p-8 bg-white flex-grow">
            <h3 className="text-xl font-bold text-gray-900">Data & Logic Visualization</h3>
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}