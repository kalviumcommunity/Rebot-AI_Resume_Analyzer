'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Aperture, 
  ArrowRight, 
  ChevronDown, 
  Maximize2, 
  Sparkles, 
  Play, 
  MousePointer2,
  Menu,
  Type,
  Image as ImageIcon,
  Layout,
  MessageSquare,
  Settings,
  MoreHorizontal
} from 'lucide-react';

export default function AdvancedCustomEditing() {
  // Animation variants for scroll reveals
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans flex flex-col items-center">
      
      {/* Top Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <div className="bg-[#e5e7eb] rounded-full px-5 py-2.5 flex items-center gap-6 shadow-sm">
            <div className="flex items-center gap-2 cursor-pointer text-slate-800 mr-4">
              <Aperture className="w-6 h-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">Rebot</span>
            </div>
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900 transition">Features</a>
              <a href="#" className="hover:text-slate-900 transition">Pricing</a>
              <a href="#" className="hover:text-slate-900 transition">Tutorial</a>
              <a href="#" className="hover:text-slate-900 transition">Blog</a>
              <a href="#" className="flex items-center gap-1 hover:text-slate-900 transition">
                Tools <ChevronDown className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-slate-900 transition">Community</a>
              <a href="#" className="hover:text-slate-900 transition">FAQs</a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-800 bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#1a1a1a] hover:bg-black transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content Split Layout */}
      <div className="w-full max-w-[1300px] mx-auto mt-16 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 py-12">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeLeft}
          className="w-full lg:w-[40%] flex flex-col items-start"
        >
          <div className="border border-gray-200 text-gray-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 bg-white shadow-sm">
            EASY REFINEMENT
          </div>
          
          <h2 className="text-[#0f172a] text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            Advanced custom editing
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8 pr-4">
            Describe what you want to change, and Rebot takes care of the rest: layouts, visuals, structure, and beyond.
          </p>

          <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
            Start for free <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Right Side: Mockup Interface */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeRight}
          className="w-full lg:w-[60%] relative flex justify-center"
        >
          {/* Main Gradient Background Box */}
          <div className="w-full max-w-[750px] aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-[#fcf5da] via-[#c6e6ff] to-[#258ff7] rounded-[32px] p-6 md:p-10 relative flex items-center shadow-inner">
            
            {/* Top Floating Controls */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
               <div className="w-8 h-8 rounded-full bg-[#2d3748] text-white flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-700 transition">
                 <Maximize2 className="w-4 h-4" />
               </div>
               <div className="w-8 h-8 rounded-full bg-[#6366f1] text-white flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-600 transition">
                 <Sparkles className="w-4 h-4 fill-white" />
               </div>
               <div className="w-8 h-8 rounded-full bg-[#2d3748] text-white flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-700 transition">
                 <Play className="w-4 h-4 fill-white" />
               </div>
            </div>

            {/* Inner App Window UI */}
            <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-white/40 flex flex-col mt-4">
               
               {/* App Header/Toolbar */}
               <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-[#f8fafc]">
                 <div className="flex items-center gap-2">
                   <div className="flex gap-1.5 mr-4">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="text-[10px] font-bold text-gray-700">2024 Social Media Trends Report</div>
                 </div>
                 
                 <div className="flex items-center gap-3 text-gray-400">
                   <Type className="w-3.5 h-3.5" />
                   <ImageIcon className="w-3.5 h-3.5" />
                   <Layout className="w-3.5 h-3.5" />
                   <div className="w-px h-3 bg-gray-200"></div>
                   <MessageSquare className="w-3.5 h-3.5" />
                   <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[8px] font-bold">
                     Share
                   </div>
                 </div>
               </div>

               {/* App Body Split */}
               <div className="flex flex-1 overflow-hidden bg-[#f1f5f9]">
                 
                 {/* Left Sidebar (Text Editor/Prompt area) */}
                 <div className="w-[35%] bg-white border-r border-gray-100 p-4 flex flex-col gap-3 overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                       <Sparkles className="w-4 h-4 text-purple-500" />
                       <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                    
                    {/* Mock Text Blocks */}
                    <div className="space-y-1.5">
                       <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                       <div className="h-1.5 bg-gray-200 rounded w-[90%]"></div>
                       <div className="h-1.5 bg-gray-200 rounded w-[80%]"></div>
                    </div>

                    <div className="flex items-start gap-2 bg-purple-50/50 p-2 rounded border border-purple-100/50">
                       <div className="w-2 h-2 rounded-full bg-purple-400 mt-0.5 shrink-0"></div>
                       <div className="space-y-1 w-full">
                         <div className="h-1.5 bg-purple-200 rounded w-[95%]"></div>
                         <div className="h-1.5 bg-purple-200 rounded w-[85%]"></div>
                         <div className="h-1.5 bg-purple-200 rounded w-[60%]"></div>
                       </div>
                    </div>

                    <div className="space-y-1.5 pl-4 relative border-l-2 border-gray-100 ml-1">
                       <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-300 -left-[4px] top-0"></div>
                       <div className="h-1.5 bg-gray-200 rounded w-[85%]"></div>
                       <div className="h-1.5 bg-gray-200 rounded w-[90%]"></div>
                       <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-300 -left-[4px] top-[14px]"></div>
                       <div className="h-1.5 bg-gray-200 rounded w-[70%] mt-2"></div>
                    </div>

                    <div className="space-y-1.5 mt-auto border-t border-gray-100 pt-3">
                       <div className="h-1.5 bg-gray-200 rounded w-[60%]"></div>
                       <div className="h-6 bg-gray-50 border border-gray-200 rounded flex items-center px-2">
                         <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                            <Sparkles className="w-1.5 h-1.5 text-white" />
                         </div>
                         <div className="h-1.5 bg-gray-300 rounded w-1/3"></div>
                       </div>
                    </div>
                 </div>

                 {/* Right Main Area (Slide Canvas) */}
                 <div className="w-[65%] flex flex-col relative">
                   
                   {/* Fake Mouse Cursor over canvas */}
                   <MousePointer2 className="absolute top-4 right-[20%] w-5 h-5 text-black fill-black -rotate-12 z-50 drop-shadow-md" />

                   {/* Main Slide Focus */}
                   <div className="flex-1 p-6 flex items-center justify-center">
                     <div className="w-full aspect-video bg-[#0f0f0f] rounded-lg shadow-md p-4 flex flex-col relative border border-gray-800">
                        {/* Slide Title */}
                        <div className="text-white text-[12px] font-bold mb-4 flex items-center gap-2">
                          Platform-Specific Algorithm Updates
                          <div className="h-px bg-gray-700 flex-1 ml-2"></div>
                        </div>

                        <div className="flex h-full gap-4">
                           {/* Bar Chart Area */}
                           <div className="w-1/2 flex flex-col justify-end relative pb-4 pl-4 border-l border-b border-gray-800">
                              <div className="absolute bottom-1 left-2 text-[5px] text-gray-500">0.0%</div>
                              <div className="absolute bottom-1/3 left-2 text-[5px] text-gray-500">2.5%</div>
                              <div className="absolute bottom-2/3 left-2 text-[5px] text-gray-500">5.0%</div>
                              
                              <div className="flex items-end justify-around h-full w-full px-2 gap-2">
                                <div className="w-full h-[80%] bg-[#bbf7d0] rounded-t-sm"></div>
                                <div className="w-full h-[50%] bg-[#a3e635] rounded-t-sm"></div>
                                <div className="w-full h-[30%] bg-[#84cc16] rounded-t-sm"></div>
                                <div className="w-full h-[45%] bg-[#65a30d] rounded-t-sm"></div>
                              </div>
                           </div>

                           {/* Chart Legend/Text Area */}
                           <div className="w-1/2 space-y-3">
                              <div className="flex gap-2 items-start">
                                <div className="w-3 h-3 rounded-full bg-[#bbf7d0] shrink-0 flex items-center justify-center text-[5px] font-bold text-black">IG</div>
                                <div>
                                  <div className="h-1.5 bg-white/80 rounded w-[80%] mb-1"></div>
                                  <div className="h-1 bg-white/40 rounded w-full mb-0.5"></div>
                                  <div className="h-1 bg-white/40 rounded w-[60%]"></div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-start">
                                <div className="w-3 h-3 rounded-full bg-[#a3e635] shrink-0 flex items-center justify-center text-[5px] font-bold text-black">TT</div>
                                <div>
                                  <div className="h-1.5 bg-white/80 rounded w-[70%] mb-1"></div>
                                  <div className="h-1 bg-white/40 rounded w-[90%] mb-0.5"></div>
                                  <div className="h-1 bg-white/40 rounded w-[50%]"></div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-start">
                                <div className="w-3 h-3 rounded-full bg-[#84cc16] shrink-0 flex items-center justify-center text-[5px] font-bold text-black">YT</div>
                                <div>
                                  <div className="h-1.5 bg-white/80 rounded w-[85%] mb-1"></div>
                                  <div className="h-1 bg-white/40 rounded w-full mb-0.5"></div>
                                </div>
                              </div>
                           </div>
                        </div>
                     </div>
                   </div>

                   {/* Bottom Filmstrip/Thumbnails */}
                   <div className="h-16 bg-white border-t border-gray-200 px-4 flex items-center gap-2 overflow-hidden shadow-[inset_0_5px_10px_rgba(0,0,0,0.02)]">
                      <div className="w-16 h-10 bg-[#0f0f0f] rounded border-2 border-blue-500 shrink-0 relative flex flex-col p-1">
                        <div className="h-1 bg-gray-700 w-3/4 mb-1 rounded"></div>
                        <div className="h-0.5 bg-gray-700 w-full mb-0.5 rounded"></div>
                        <div className="h-0.5 bg-gray-700 w-1/2 rounded"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-white text-[6px] flex items-center justify-center font-bold">4</div>
                      </div>
                      <div className="w-16 h-10 bg-[#0f0f0f] rounded shrink-0 p-1 opacity-60">
                        <div className="flex gap-1 h-full">
                           <div className="w-1/2 h-full bg-gray-800 rounded-sm"></div>
                           <div className="w-1/2 h-full bg-gray-800 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="w-16 h-10 bg-[#0f0f0f] rounded shrink-0 p-1 opacity-60">
                         <div className="h-2 bg-gray-700 w-1/2 mb-1 rounded mx-auto"></div>
                         <div className="h-full w-full bg-gray-800 rounded-sm"></div>
                      </div>
                      <div className="w-16 h-10 bg-[#0f0f0f] rounded shrink-0 p-1 opacity-60">
                        <div className="flex gap-1 h-full">
                           <div className="w-1/3 h-full bg-gray-800 rounded-sm"></div>
                           <div className="w-2/3 h-full bg-gray-800 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="w-16 h-10 bg-[#0f0f0f] rounded shrink-0 p-1 opacity-60">
                         <div className="w-4 h-4 rounded-full bg-gray-700 mx-auto mt-1"></div>
                      </div>
                   </div>

                 </div>
               </div>

            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}