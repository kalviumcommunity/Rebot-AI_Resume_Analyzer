"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
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
  Link as LinkIcon,
  Youtube,
  Aperture,
  Maximize2,
  Move,
  Play,
  ArrowRight,
  Link2,
  Image as ImageIcon,
  Type,
  Layout,
  MessageSquare,
  MousePointer2,
  Globe,
} from "lucide-react";

// 1. Hero Section
function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Exact Background Recreation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#38b4ff] via-[#72cdff] to-[#e6f4ff]" />
        <div className="absolute bottom-0 left-[10%] w-[40vw] h-[30vh] bg-white/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-[50vw] h-[40vh] bg-white/50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Top Navbar */}
        <nav className="flex items-center justify-between px-8 py-5 text-white sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <Aperture className="w-7 h-7 text-white stroke-[2.5]" />
              <span className="text-2xl font-bold tracking-tight">Rebot</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium mt-1">
              <a href="#" className="hover:text-white/80 transition">
                Tutorial
              </a>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-white/80 transition"
              >
                Tools <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white/80 transition">
                Community
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/90 text-slate-800 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              <span className="text-orange-500 font-bold flex items-center gap-1">
                <span className="text-base">%</span> 50% Off
              </span>
              <span className="text-slate-600">Limited Time</span>
            </div>
            <div className="flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>500</span>
            </div>
            <div className="w-8 h-8 bg-black rounded-full border-2 border-white shadow-sm cursor-pointer" />
          </div>
        </nav>

        <main className="flex-1 flex flex-col items-center mt-12 px-4">
          <div className="mb-4">
            <Aperture className="w-14 h-14 text-white stroke-[2]" />
          </div>

          <h1
            className="text-3xl md:text-4xl text-white mb-10"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            A smarter way to present
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block w-[260px] bg-white rounded-2xl p-3 shadow-2xl z-30 cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{
                transform: "rotate(25deg) scale(0.5)",
                position: "relative",
              }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#333] text-white flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                  <Move className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#333] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              </div>
              <div className="text-[10px] font-bold text-gray-800 mb-2 mt-2">
                FY2024 Financial Performance
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1 bg-blue-50/50 rounded p-2 border border-gray-100 flex flex-col justify-end h-16">
                  <div className="w-full flex items-end gap-1">
                    <div className="w-1/3 bg-blue-200 h-4 rounded-sm"></div>
                    <div className="w-1/3 bg-blue-400 h-8 rounded-sm"></div>
                    <div className="w-1/3 bg-blue-600 h-12 rounded-sm"></div>
                  </div>
                </div>
                <div className="col-span-1 bg-[#eaff80] rounded p-2 border border-gray-100 relative overflow-hidden h-16">
                  <div className="text-[10px] font-bold">214.45</div>
                  <svg
                    className="absolute bottom-0 left-0 w-full h-8"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M0,100 L20,60 L50,80 L100,20 L100,100 Z"
                      fill="rgba(0,0,0,0.1)"
                    />
                    <path
                      d="M0,100 L20,60 L50,80 L100,20"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="col-span-1 bg-indigo-500 rounded p-2 flex items-center justify-center h-16 relative">
                  <div className="absolute top-1 left-1 text-white/80 text-[8px]">
                    15%
                  </div>
                  <div className="w-8 h-8 rounded-full border-[3px] border-white/30 border-t-white"></div>
                </div>
              </div>
            </motion.div>
            ideas
          </h1>

          <div className="w-full max-w-[800px] bg-white rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] p-2 mb-10 overflow-hidden">
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

            <div className="px-5 py-4">
              <textarea
                className="w-full h-24 outline-none resize-none text-gray-700 placeholder:text-gray-300 text-lg"
                placeholder="Describe your topic or idea, or upload your files (doc, pdf, pptx, txt)..."
              ></textarea>
            </div>

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

          <p className="text-white/80 text-sm mb-4 font-medium tracking-wide">
            Quick Start
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Wand2 className="w-4 h-4 text-pink-400" />
              Refresh your slides{" "}
              <span className="text-gray-400 ml-1">&gt;</span>
            </button>
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <FileText className="w-4 h-4 text-blue-400" />
              Doc to slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <LinkIcon className="w-4 h-4 text-green-500" />
              URL to slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
            <button className="flex items-center gap-2 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Youtube className="w-4 h-4 text-red-500" />
              YouTube to slides <span className="text-gray-400 ml-1">&gt;</span>
            </button>
          </div>

          <div className="mt-16 bg-white rounded-t-3xl shadow-xl w-full max-w-[600px] h-[150px] relative overflow-hidden flex">
            <div className="p-8 w-1/2">
              <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">
                Get started with our quick-start guide here.
              </h3>
            </div>
            <div className="w-1/2 relative bg-blue-500 mt-4 mr-4 rounded-t-xl overflow-hidden shadow-inner">
              <div className="absolute top-4 left-4 text-white font-bold text-2xl tracking-tighter">
                Take a<br />
                tour
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

// 2. Interactive Stories Section
function InteractiveStorySection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatCard = (delay: number) => ({
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay, type: "spring", stiffness: 100 },
    },
  });

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans pb-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="flex flex-col items-center mt-20 mb-24 z-10 relative"
      >
        <p className="text-gray-400 text-sm mb-4 font-medium">
          Start from here
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <Wand2 className="w-4 h-4 text-red-400" />
            Refresh your deck <span className="text-gray-400 ml-1">&gt;</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <FileText className="w-4 h-4 text-blue-400" />
            Start from a doc <span className="text-gray-400 ml-1">&gt;</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <LinkIcon className="w-4 h-4 text-green-500" />
            Turn a link into a deck{" "}
            <span className="text-gray-400 ml-1">&gt;</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <Youtube className="w-4 h-4 text-red-500" />
            Summarize a YouTube video{" "}
            <span className="text-gray-400 ml-1">&gt;</span>
          </button>
        </div>
      </motion.div>

      <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center z-20 flex flex-col items-center mt-32"
        >
          <div className="border border-gray-200 text-gray-500 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6 bg-white/50 backdrop-blur-sm">
            Interactive Story
          </div>
          <h2 className="text-[#0a0a1a] text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            From slides to <br />
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              Interactive
            </span>{" "}
            stories
          </h2>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.1)}
          className="absolute left-[5%] md:left-[10%] top-[10%] md:top-[20%] w-[240px] bg-[#991b1b] rounded-2xl p-4 shadow-xl z-10 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-3">
            <div className="text-white/70 font-medium">Illustration</div>
            <div className="text-white/70 font-medium">Graphic Design</div>
            <div className="text-white font-bold flex items-center justify-between">
              Motion Design
              <div
                className="absolute -bottom-4 right-10 w-4 h-6 bg-black text-white flex items-center justify-center shadow-md transform rotate-[-20deg]"
                style={{
                  clipPath: "polygon(0 0, 100% 100%, 40% 100%, 0 140%)",
                }}
              ></div>
            </div>
            <div className="w-full h-20 bg-[#111] rounded-lg mt-2 border border-white/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-400"></div>
              <span className="text-white/50 text-[10px] text-center px-4 leading-tight">
                THIS CONTENT IS NOT AVAILABLE
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.3)}
          className="absolute left-[2%] md:left-[5%] bottom-[5%] md:bottom-[10%] w-[200px] h-[120px] rounded-2xl shadow-xl z-20 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#e6a88e] to-[#a491b5]"
        >
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, #ff7b54 0%, transparent 40%)",
            }}
          />
          <div className="absolute bottom-0 w-full h-10 bg-[#594d66]"></div>
          <div className="absolute bottom-10 w-full h-px bg-white/20"></div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] flex items-center gap-2">
            <Play className="w-2 h-2 fill-black" />
            <div className="w-10 h-1 bg-gray-300 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-green-500"></div>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm w-16 h-8 rounded text-[6px] p-1 text-gray-500 text-right leading-tight">
            Lorem ipsum dolor sit amet
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.2)}
          className="absolute right-[10%] md:right-[25%] top-[10%] md:top-[5%] w-[260px] bg-white rounded-2xl p-3 shadow-2xl z-30 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#333] text-white flex items-center justify-center shadow-lg">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
              <Move className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#333] text-white flex items-center justify-center shadow-lg">
              <Play className="w-4 h-4 fill-white" />
            </div>
          </div>
          <div className="text-[10px] font-bold text-gray-800 mb-2 mt-2">
            FY2024 Financial Performance
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 bg-blue-50/50 rounded p-2 border border-gray-100 flex flex-col justify-end h-16">
              <div className="w-full flex items-end gap-1">
                <div className="w-1/3 bg-blue-200 h-4 rounded-sm"></div>
                <div className="w-1/3 bg-blue-400 h-8 rounded-sm"></div>
                <div className="w-1/3 bg-blue-600 h-12 rounded-sm"></div>
              </div>
            </div>
            <div className="col-span-1 bg-[#eaff80] rounded p-2 border border-gray-100 relative overflow-hidden h-16">
              <div className="text-[10px] font-bold">214.45</div>
              <svg
                className="absolute bottom-0 left-0 w-full h-8"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,100 L20,60 L50,80 L100,20 L100,100 Z"
                  fill="rgba(0,0,0,0.1)"
                />
                <path
                  d="M0,100 L20,60 L50,80 L100,20"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="col-span-1 bg-indigo-500 rounded p-2 flex items-center justify-center h-16 relative">
              <div className="absolute top-1 left-1 text-white/80 text-[8px]">
                15%
              </div>
              <div className="w-8 h-8 rounded-full border-[3px] border-white/30 border-t-white"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.4)}
          className="absolute right-[5%] md:right-[15%] top-[40%] md:top-[45%] w-[220px] h-[140px] rounded-2xl shadow-xl z-10 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#006699]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00b4d8] to-[#0077b6] opacity-80 mix-blend-overlay"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/20 blur-[1px] rotate-12 transform origin-top"></div>
          <div className="absolute top-0 left-1/2 w-2 h-full bg-white/10 blur-[2px] rotate-12 transform origin-top"></div>
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-white text-center">
            <h3 className="text-3xl font-serif z-10">Emperor</h3>
            <h3 className="text-xl font-serif italic z-10 -mt-2">Angelfish</h3>
            <div className="absolute right-2 top-2 w-16 h-16 bg-yellow-400 rounded-full blur-[20px] opacity-40"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.5)}
          className="absolute right-[0%] md:right-[5%] bottom-[0%] md:bottom-[5%] w-[240px] bg-white rounded-xl shadow-2xl z-20 overflow-hidden border border-gray-100 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="relative p-3 overflow-hidden text-center flex items-center justify-center h-[120px]">
            <div className="absolute inset-0 flex flex-col justify-center opacity-90 leading-[0.8]">
              <span className="text-red-600 font-black text-2xl tracking-tighter whitespace-nowrap">
                ME COLLECTION 202
              </span>
              <span className="text-black font-black text-2xl tracking-tighter whitespace-nowrap">
                / NYC / NY 94 / NY
              </span>
              <span className="text-red-600 font-black text-2xl tracking-tighter whitespace-nowrap">
                1994 EST 1994 ES
              </span>
            </div>
            <div className="absolute bottom-0 w-16 h-24 bg-gray-800 rounded-t-full shadow-[0_0_15px_rgba(255,255,255,1)] flex items-end justify-center z-10 border-2 border-white overflow-hidden">
              <div className="w-full h-1/2 bg-gray-600 border-t-2 border-gray-400 flex justify-center gap-1">
                <div className="w-1 h-full bg-white/30"></div>
                <div className="w-1 h-full bg-white/30"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 3. Content Lead Design
function ContentLeadDesign() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 150, rotate: 0 },
    visible: (custom: { rotate: number; delay: number }) => ({
      opacity: 1,
      y: 0,
      rotate: custom.rotate,
      transition: {
        duration: 0.8,
        delay: custom.delay,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans flex flex-col bg-gradient-to-b from-[#56a8fb] via-[#2e74e6] to-[#1a1f35] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="flex flex-col items-center mt-12 z-20 text-center px-4"
      >
        <div className="bg-white/20 backdrop-blur-sm text-white/90 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/10">
          CONTENT-FIRST
        </div>
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Let{" "}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: "normal",
            }}
          >
            content lead
          </span>{" "}
          the design
        </h2>
        <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 font-light">
          Rebot adapts layout and structure to your content, so every
          presentation feels clear, focused, and right for its moment.
        </p>
        <button className="bg-white text-[#111] hover:bg-gray-50 px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-xl">
          Start for free <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="relative w-full max-w-[1200px] mx-auto h-[450px] mt-24 perspective-1000 z-30">
        <motion.div
          custom={{ rotate: -6, delay: 0.1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={cardVariants}
          className="absolute left-[5%] top-[10%] w-[380px] h-[220px] bg-gradient-to-br from-[#4faaff] via-[#2a77ff] to-[#0d3bcf] rounded-xl shadow-[-10px_20px_40px_rgba(0,0,0,0.4)] z-10 p-6 overflow-hidden border border-white/10 origin-bottom-right"
        >
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-[24px] border-[#66bcff] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)] opacity-80" />
          <div className="absolute top-4 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <h3 className="text-white font-black text-4xl leading-tight tracking-tight mt-4 drop-shadow-md">
              Q4 SALES <br /> REPORT
            </h3>
            <div className="text-white/70 text-[8px] max-w-[150px] uppercase font-bold tracking-wider leading-tight">
              Report Period: Q4 2024 <br /> Department: Sales & Analytics Team
            </div>
          </div>
        </motion.div>

        <motion.div
          custom={{ rotate: 4, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="absolute left-[22%] top-[15%] w-[420px] h-[240px] bg-gradient-to-br from-[#2ca0ff] to-[#0433a1] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 p-6 overflow-hidden border border-white/10 origin-bottom-left"
        >
          <div className="absolute top-10 left-1/3 w-12 h-12 rounded-full bg-white/20 blur-[2px]" />
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-blue-400/30 blur-[10px]" />
          <h3 className="text-white font-black text-4xl leading-none tracking-tighter mt-2 mb-8 drop-shadow-md relative z-10 flex flex-col">
            <span className="text-3xl opacity-90">TABLE OF</span>
            <span className="ml-12 text-5xl">CONTENTS</span>
          </h3>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-2 z-10">
            {[
              { num: "1", title: "Executive Summary" },
              { num: "2", title: "Competitor Analysis" },
              { num: "3", title: "Q4 Channel Performance" },
              { num: "4", title: "Inventory Turnover Analysis" },
              { num: "5", title: "Supply Chain Optimization" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center text-center"
              >
                <div className="w-5 h-5 rounded-full bg-white text-blue-800 text-[10px] font-bold flex items-center justify-center mb-2 shadow-sm">
                  {item.num}
                </div>
                <div className="text-white text-[7px] font-medium leading-tight">
                  {item.title}
                </div>
              </div>
            ))}
            <div className="absolute top-2.5 left-4 right-4 h-px bg-white/30 -z-10" />
          </div>
        </motion.div>

        <motion.div
          custom={{ rotate: 10, delay: 0.4 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="absolute right-[5%] top-[18%] w-[380px] h-[220px] bg-gradient-to-br from-[#1264df] to-[#041a54] rounded-xl shadow-[10px_20px_40px_rgba(0,0,0,0.4)] z-10 p-5 border border-white/10 origin-bottom-left"
        >
          <div className="flex justify-between h-full">
            <div className="w-1/3 flex flex-col">
              <h3 className="text-white font-black text-lg tracking-wider mb-6">
                COMPETITOR
              </h3>
              <div className="space-y-2 mt-auto">
                <div className="h-6 border border-blue-400/30 rounded flex items-center px-2">
                  <div className="w-1/2 h-1.5 bg-blue-400 rounded"></div>
                </div>
                <div className="h-6 border border-blue-400/30 rounded flex items-center px-2">
                  <div className="w-3/4 h-1.5 bg-purple-400 rounded"></div>
                </div>
                <div className="h-6 border border-blue-400/30 rounded flex items-center px-2">
                  <div className="w-1/3 h-1.5 bg-orange-400 rounded"></div>
                </div>
              </div>
            </div>
            <div className="w-2/3 flex items-center justify-center relative">
              <div className="w-40 h-40 rounded-full bg-[conic-gradient(#3b82f6_0%_35%,_#8b5cf6_35%_65%,_#f97316_65%_80%,_#1e40af_80%_100%)] flex items-center justify-center shadow-lg relative">
                <div className="w-24 h-24 rounded-full bg-[#07246b] shadow-inner" />
                <span className="absolute top-4 right-8 text-white text-[8px] font-bold">
                  25%
                </span>
                <span className="absolute bottom-6 right-6 text-white text-[8px] font-bold">
                  15%
                </span>
                <span className="absolute bottom-8 left-8 text-white text-[8px] font-bold">
                  10%
                </span>
                <span className="absolute top-8 left-6 text-white text-[8px] font-bold">
                  45%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          custom={{ rotate: 2, delay: 0.3 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="absolute right-[22%] top-[12%] w-[440px] h-[250px] bg-[#f8faff] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-40 p-6 border border-gray-100 flex flex-col justify-between origin-bottom-left"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-gray-900 font-black text-xl tracking-tight">
              PERFORMANCE OVERVIEW
            </h3>
            <div className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
              +18%
            </div>
          </div>
          <div className="flex h-full mt-4">
            <div className="w-2/3 relative h-full flex flex-col justify-end pb-4 border-b border-gray-200">
              <div className="absolute top-0 w-full border-b border-dashed border-gray-200" />
              <div className="absolute top-1/3 w-full border-b border-dashed border-gray-200" />
              <div className="absolute top-2/3 w-full border-b border-dashed border-gray-200" />
              <svg
                className="w-full h-24 absolute bottom-4 left-0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,100 C20,90 40,80 60,60 C80,30 100,10 100,10 L100,100 Z"
                  fill="rgba(59,130,246,0.1)"
                />
                <path
                  d="M0,100 C20,90 40,80 60,60 C80,30 100,10"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="4"
                  fill="white"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex justify-between text-gray-400 text-[8px] font-medium absolute -bottom-4 w-full">
                <span>Q1 2024</span>
                <span>Q2 2024</span>
                <span>Q3 2024</span>
                <span>Q4 2024</span>
              </div>
            </div>
            <div className="w-1/3 pl-4 flex flex-col justify-between h-full relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              <div className="mb-2">
                <div className="text-gray-400 text-[8px] font-bold uppercase">
                  Total Revenue
                </div>
                <div className="text-blue-600 font-black text-2xl tracking-tighter">
                  $125M
                </div>
                <div className="text-gray-400 text-[6px]">+12% vs prev</div>
              </div>
              <div className="mb-2">
                <div className="text-gray-400 text-[8px] font-bold uppercase">
                  Units Sold
                </div>
                <div className="text-blue-500 font-black text-xl tracking-tighter">
                  2.3M
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-[8px] font-bold uppercase">
                  Avg Order Value
                </div>
                <div className="text-blue-500 font-black text-xl tracking-tighter">
                  $54.35
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[-20px] left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none z-0">
        <h1 className="text-[12vw] font-black text-white/5 uppercase tracking-wider text-center flex gap-8 justify-center select-none">
          <span>Education</span>
          <span>•</span>
          <span>Business</span>
          <span>•</span>
          <span>Fashion</span>
          <span>•</span>
          <span>Tech</span>
        </h1>
      </div>
    </div>
  );
}

// 4. AI Powered Features
function AIPoweredFeatures() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const staggerCards = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const cardItem = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", stiffness: 80 },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center pb-32 pt-20">
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
          AI sits at the core of Rebot, shaping how content is understood,
          structured, and turned into visual expression.
        </p>
        <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
          Start for free <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerCards}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-[1200px] px-6"
      >
        {/* Card 1 */}
        <motion.div
          variants={cardItem}
          className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="h-[280px] w-full bg-gradient-to-b from-[#8ce0ff] via-[#cbf1ff] to-[#f0f9ff] relative overflow-hidden flex items-center justify-center pt-8">
            <div className="absolute top-[40%] w-[120%] h-[120%] rounded-full border border-white/40 border-t-transparent border-r-transparent border-l-transparent transform -translate-x-1/2 left-1/2"></div>
            <div className="absolute top-[30%] w-[150%] h-[150%] rounded-full border border-white/20 border-t-transparent border-r-transparent border-l-transparent transform -translate-x-1/2 left-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#ffc875] rounded-full blur-[30px] opacity-80"></div>
            <Aperture className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white z-10 stroke-[2.5]" />

            <div className="absolute left-[15%] top-[55%] -rotate-12 bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
              <div className="bg-[#21a366] text-white text-[8px] font-black w-full h-full rounded flex items-center justify-center text-center leading-none">
                XLSX
              </div>
            </div>
            <div className="absolute left-[25%] top-[70%] -rotate-6 bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
              <div className="bg-[#e24444] text-white w-full h-full rounded flex items-center justify-center">
                <div className="w-3 h-4 border-2 border-white rounded-sm"></div>
              </div>
            </div>
            <div className="absolute left-[40%] top-[80%] rotate-0 bg-white w-12 h-10 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
              <div className="bg-[#d04423] text-white text-[8px] font-black w-full h-full rounded flex items-center justify-center">
                PPTX
              </div>
            </div>
            <div className="absolute right-[40%] top-[80%] rotate-6 bg-white w-12 h-10 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
              <div className="bg-[#2b579a] text-white text-[8px] font-black w-full h-full rounded flex items-center justify-center">
                DOC
              </div>
            </div>
            <div className="absolute right-[25%] top-[70%] rotate-12 bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
              <div className="text-[#2a85ff] w-full h-full flex items-center justify-center">
                <Link2 className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute right-[15%] top-[55%] rotate-[20deg] bg-white w-10 h-12 rounded-lg shadow-md flex items-center justify-center p-1 border border-gray-100">
              <div className="text-[#34a853] w-full h-full flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="p-8 bg-white flex-grow">
            <h3 className="text-xl font-bold text-gray-900">
              Multi-Format Understanding
            </h3>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardItem}
          className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="h-[280px] w-full bg-[#fdfaf0] relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ffe2a8] rounded-full blur-[40px] opacity-50"></div>

            <div className="absolute top-[15%] left-[50%] w-16 h-20 bg-orange-500 rounded-lg blur-md opacity-60"></div>
            <div className="absolute left-[15%] top-[30%] w-32 h-20 bg-indigo-900 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 via-purple-600 to-indigo-900 relative">
                <div className="absolute top-2 left-4 w-8 h-8 border-2 border-orange-300 rounded-full"></div>
                <div className="absolute bottom-[-10px] right-2 w-16 h-16 bg-blue-500 rounded-full blur-md mix-blend-screen"></div>
              </div>
            </div>
            <div className="absolute left-[25%] bottom-[15%] w-20 h-14 bg-green-800 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-blue-300 to-green-600 relative">
                <div className="absolute bottom-0 w-full h-1/2 bg-green-700 rounded-t-[100%]"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-200 rounded-full"></div>
              </div>
            </div>
            <div className="absolute right-[20%] top-[25%] w-14 h-20 bg-blue-950 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-black to-blue-900">
                <div className="w-6 h-10 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-300 via-purple-500 to-transparent blur-[2px] rounded-full"></div>
              </div>
            </div>
            <div className="absolute right-[15%] bottom-[20%] w-28 h-16 bg-purple-900 rounded-xl shadow-lg border-[3px] border-white overflow-hidden">
              <div className="w-full h-full bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-purple-500 via-pink-500 to-indigo-500 blur-sm scale-150"></div>
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
            </div>

            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center drop-shadow-2xl hover:scale-105 transition-transform">
              <svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="rotate-[20deg]"
              >
                <path
                  d="M 80 20 Q 90 50 60 80 Q 20 80 10 70 Q 40 70 60 50 Q 70 30 80 20 Z"
                  fill="#ffcd33"
                  stroke="#f0b600"
                  strokeWidth="2"
                />
                <path
                  d="M 80 20 Q 90 50 60 80"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  opacity="0.4"
                />
                <g transform="translate(45, 50) scale(0.6)">
                  <circle cx="15" cy="15" r="12" fill="white" />
                  <path
                    d="M15 9 C11 9 9 12 9 15 C9 18 11 21 15 21 C17 21 18.5 20 19.5 18 L15 18 L15 15 L23 15 C23 16 23 17 23 21 C21 24 18 25 15 25 C9 25 5 20 5 15 C5 10 9 5 15 5 C18 5 21 6.5 22.5 9 L19 11 C18.5 9.5 17 9 15 9 Z"
                    fill="#4285f4"
                  />
                  <path
                    d="M5 15 C5 10 9 5 15 5 L15 9 C11 9 9 12 9 15 L5 15 Z"
                    fill="#ea4335"
                  />
                  <path
                    d="M9 15 C9 18 11 21 15 21 L15 25 C9 25 5 20 5 15 L9 15 Z"
                    fill="#34a853"
                  />
                  <path
                    d="M15 21 C17 21 18.5 20 19.5 18 L23 20 C21 24 18 25 15 25 L15 21 Z"
                    fill="#fbbc05"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="p-8 bg-white flex-grow">
            <h3 className="text-xl font-bold text-gray-900">
              Image Generation & Search
            </h3>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardItem}
          className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="h-[280px] w-full bg-[#f8f3ff] relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-32 bg-[#eac7ff] rounded-[100%] blur-[40px] opacity-60"></div>

            <div className="relative w-full h-full flex items-center justify-center mt-12 perspective-[1000px]">
              <div className="absolute w-20 h-24 bg-white/90 backdrop-blur border border-white rounded-lg shadow-[-5px_10px_20px_rgba(150,100,200,0.15)] transform -rotate-[20deg] -translate-x-[110px] -translate-y-[20px] skew-y-6 flex items-center justify-center p-2 z-10">
                <div className="w-full h-full border-l border-b border-gray-200 relative">
                  <div className="w-2 h-2 rounded-full bg-blue-400 absolute bottom-2 left-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 absolute top-4 left-6"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400 absolute bottom-6 right-2"></div>
                </div>
              </div>
              <div className="absolute w-24 h-28 bg-white border border-gray-100 rounded-lg shadow-[0_10px_20px_rgba(150,100,200,0.1)] transform -rotate-[5deg] -translate-x-[45px] -translate-y-[40px] skew-y-3 flex items-center justify-center p-3 z-20">
                <div className="w-12 h-12 rounded-full border-4 border-blue-400 border-t-green-400 border-r-purple-400 relative">
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute w-24 h-28 bg-white border border-gray-100 rounded-lg shadow-[5px_10px_20px_rgba(150,100,200,0.1)] transform rotate-[5deg] translate-x-[45px] -translate-y-[40px] -skew-y-3 flex flex-col items-center justify-center p-3 z-20 space-y-1.5">
                <div className="w-8 h-4 border border-blue-400 bg-blue-50 rounded-sm"></div>
                <div className="w-0.5 h-2 bg-gray-300"></div>
                <div className="flex gap-2">
                  <div className="w-6 h-4 border border-green-400 bg-green-50 rounded-sm"></div>
                  <div className="w-6 h-4 border border-purple-400 bg-purple-50 rounded-sm"></div>
                </div>
              </div>
              <div className="absolute w-20 h-24 bg-white/90 backdrop-blur border border-white rounded-lg shadow-[10px_10px_20px_rgba(150,100,200,0.15)] transform rotate-[20deg] translate-x-[110px] -translate-y-[20px] -skew-y-6 flex flex-col items-center justify-center p-2 z-10 gap-1.5">
                <div className="w-[80%] h-3 bg-blue-400/20 border border-blue-400 rounded-sm"></div>
                <div className="w-[60%] h-3 bg-green-400/20 border border-green-400 rounded-sm"></div>
                <div className="w-[40%] h-3 bg-purple-400/20 border border-purple-400 rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white flex-grow">
            <h3 className="text-xl font-bold text-gray-900">
              Data & Logic Visualization
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// 5. Brand Ready Section
function BrandReadySection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const floatElement = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: customDelay,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    }),
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans flex flex-col items-center pb-20 pt-12">
      <div className="relative w-full max-w-[1250px] mx-auto px-4">
        <div className="w-full h-[800px] bg-gradient-to-tr from-[#fff7e0] via-[#fffbfa] to-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-orange-50/50 overflow-hidden relative flex flex-col items-center pt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="flex flex-col items-center text-center z-30"
          >
            <div className="border border-gray-200 text-gray-700 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 bg-white shadow-sm">
              BRAND-READY
            </div>
            <h2 className="text-[#0a0a0a] text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">
              Built for your brand
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Upload templates to ensure presentations follow your brand's
              design consistently.
            </p>
            <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
              Start for free <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 h-[450px] w-full flex justify-center perspective-[1200px]">
            {/* 1. Left - PPTX Node */}
            <motion.div
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute left-[15%] top-[150px] flex flex-col items-center z-20"
            >
              <div className="w-20 h-24 bg-white rounded-xl shadow-xl flex items-center justify-center relative border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100 rounded-bl-xl border-l border-b border-white"></div>
                <div className="bg-[#ed6b23] text-white text-xs font-black px-3 py-1.5 rounded">
                  PPTX
                </div>
              </div>
              <div className="mt-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-gray-600 shadow-sm border border-gray-100">
                Your Template
              </div>
              <svg className="absolute left-[80px] top-[40px] w-[120px] h-[60px] overflow-visible -z-10">
                <path
                  d="M0,10 C40,10 60,-40 100,-40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="100" cy="-40" r="3" fill="#ed6b23" />
                <path
                  d="M0,10 C40,10 60,60 100,60"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="100" cy="60" r="3" fill="#ed6b23" />
              </svg>
            </motion.div>

            {/* 2. Center - Brand Control Panel */}
            <motion.div
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute left-[30%] top-[70px] w-[300px] bg-white/90 backdrop-blur-xl rounded-[28px] p-4 shadow-[0_20px_50px_rgba(237,107,35,0.08)] border border-orange-100/50 z-30"
            >
              <div className="bg-[#fff9f5] rounded-2xl p-4 mb-3 border border-orange-50 h-[100px] flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 mb-auto">
                  Logo
                </span>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-[#ed6b23] fill-current"
                  >
                    <path d="M12 0l2 8h8l-6 5 2 9-6-6-6 6 2-9-6-5h8z" />
                  </svg>
                  <span className="text-[#ed6b23] font-black text-xl tracking-wider">
                    SIMPLE
                  </span>
                </div>
              </div>
              <div className="flex gap-3 h-[90px]">
                <div className="w-1/3 bg-[#fff9f5] rounded-2xl p-3 border border-orange-50 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-500">
                    Font
                  </span>
                  <div className="text-3xl font-serif text-gray-800 text-center leading-none mb-1 tracking-tighter">
                    Aa
                  </div>
                </div>
                <div className="w-2/3 bg-[#fff9f5] rounded-2xl p-3 border border-orange-50 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-500">
                    Color
                  </span>
                  <div className="flex justify-between items-center px-1 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#ed6b23] shadow-sm"></div>
                    <div className="w-5 h-5 rounded-full bg-[#562123] shadow-sm"></div>
                    <div className="w-5 h-5 rounded-full bg-[#9ca3af] shadow-sm"></div>
                    <div className="w-5 h-5 rounded-full bg-white shadow-sm border border-gray-200"></div>
                    <div className="w-5 h-5 rounded-full bg-[#1f2937] shadow-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Right Floating Presentations Group */}
            <motion.div
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute right-[5%] top-[10px] w-[340px] h-[200px] bg-white rounded-xl shadow-lg border border-orange-50/50 p-6 origin-bottom-left rotate-[-2deg] scale-[0.85] z-10 opacity-90"
            >
              <div className="text-[#ed6b23] text-[8px] font-bold mb-4 tracking-widest uppercase border-b border-orange-100 pb-2">
                Product Mix & Drivers
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 space-y-3">
                  <div className="w-full h-8 bg-orange-50 rounded"></div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                    <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="w-1/2 space-y-3">
                  <div className="w-full h-8 bg-[#fff5f0] border border-orange-100 rounded"></div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                    <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute right-[22%] top-[60px] w-[380px] h-[220px] bg-[#fffaf5] rounded-xl shadow-[0_20px_40px_rgba(237,107,35,0.15)] border border-orange-100 p-6 origin-bottom-left rotate-[4deg] z-30 overflow-hidden"
            >
              <svg
                className="absolute -top-10 -right-8 w-40 h-40 text-[#ed6b23] opacity-90"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M 100, 0 C 130, 20 160, 10 180, 40 C 170, 70 190, 90 170, 120 C 180, 150 150, 170 120, 160 C 100, 190 70, 180 50, 150 C 20, 160 0, 130 10, 100 C -10, 70 10, 40 40, 50 C 30, 20 60, 0 80, 20 Z" />
              </svg>
              <svg
                className="absolute -bottom-16 -left-10 w-32 h-32 text-[#ed6b23] opacity-20"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M 100, 0 C 130, 20 160, 10 180, 40 C 170, 70 190, 90 170, 120 C 180, 150 150, 170 120, 160 C 100, 190 70, 180 50, 150 C 20, 160 0, 130 10, 100 C -10, 70 10, 40 40, 50 C 30, 20 60, 0 80, 20 Z" />
              </svg>
              <div className="relative z-10 h-full flex justify-between">
                <div className="w-[55%] flex flex-col">
                  <div className="flex items-center gap-1 text-[#ed6b23] font-bold text-[8px] mb-2">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0l2 8h8l-6 5 2 9-6-6-6 6 2-9-6-5h8z" />
                    </svg>
                    SIMPLE
                  </div>
                  <h3 className="text-[#562123] font-black text-3xl leading-tight mb-2 tracking-tighter">
                    Q4 Sales Report
                  </h3>
                  <p className="text-gray-500 text-[9px] mb-auto font-medium">
                    Consumer Electronics Brand | Internal Overview
                  </p>
                  <div className="flex justify-between text-[7px] text-gray-400 font-bold border-t border-orange-100 pt-2 mt-4">
                    <div>
                      <span className="text-[#ed6b23]">DATE</span> <br />
                      2024-11-22
                    </div>
                    <div>
                      <span className="text-[#ed6b23]">PREPARED FOR</span>{" "}
                      <br />
                      Executive Leadership Team
                    </div>
                  </div>
                </div>
                <div className="w-[40%] flex justify-end items-center relative z-20">
                  <div className="w-24 h-32 bg-[#562123] transform rotate-[20deg] rounded-lg shadow-xl border-4 border-white/50"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={0.6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute left-[30%] top-[250px] w-[340px] h-[200px] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-orange-50 p-6 origin-bottom-right rotate-[-4deg] z-20 overflow-hidden"
            >
              <svg
                className="absolute -top-8 right-10 w-24 h-24 text-[#ed6b23] opacity-80"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M 100, 0 C 130, 20 160, 10 180, 40 C 170, 70 190, 90 170, 120 C 180, 150 150, 170 120, 160 C 100, 190 70, 180 50, 150 C 20, 160 0, 130 10, 100 C -10, 70 10, 40 40, 50 C 30, 20 60, 0 80, 20 Z" />
              </svg>
              <h3 className="text-[#ed6b23] font-black text-xl mb-4 tracking-tight">
                CONTENTS
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-3">
                    <div className="text-[#ed6b23] font-bold text-xs">
                      {num}
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                      <div className="h-1.5 bg-gray-100 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={0.7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute right-[12%] top-[240px] w-[360px] h-[200px] bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-orange-100 p-5 origin-bottom-left rotate-[2deg] z-40 overflow-hidden"
            >
              <div className="text-[#ed6b23] text-[9px] font-bold mb-3 tracking-widest uppercase">
                Supply Chain Optimization Result
              </div>
              <div className="flex gap-4">
                <div className="w-[60%] space-y-3">
                  <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                  <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                  <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                  <div className="mt-4 pt-2 border-t border-orange-50">
                    <div className="text-[#562123] font-bold text-[8px] mb-1">
                      Key Improvements
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-1 h-1 bg-[#ed6b23] rounded-full"></div>
                      <div className="h-1 bg-gray-200 rounded w-full"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#ed6b23] rounded-full"></div>
                      <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] flex items-end justify-center gap-2 h-24 border-b border-gray-100 pb-1">
                  <div className="w-6 h-[40%] bg-[#ed6b23] rounded-t-sm relative">
                    <span className="absolute -top-3 text-[6px] text-gray-500 w-full text-center">
                      Q1
                    </span>
                  </div>
                  <div className="w-6 h-[60%] bg-[#562123] rounded-t-sm relative">
                    <span className="absolute -top-3 text-[6px] text-gray-500 w-full text-center">
                      Q2
                    </span>
                  </div>
                  <div className="w-6 h-[90%] bg-[#1e293b] rounded-t-sm relative">
                    <span className="absolute -top-3 text-[6px] text-gray-500 w-full text-center">
                      Q3
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. Advanced Custom Editing
function AdvancedCustomEditing() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans flex flex-col items-center">
      <div className="w-full max-w-[1300px] mx-auto mt-16 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 py-12">
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
            Describe what you want to change, and Rebot takes care of the rest:
            layouts, visuals, structure, and beyond.
          </p>
          <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
            Start for free <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeRight}
          className="w-full lg:w-[60%] relative flex justify-center"
        >
          <div className="w-full max-w-[750px] aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-[#fcf5da] via-[#c6e6ff] to-[#258ff7] rounded-[32px] p-6 md:p-10 relative flex items-center shadow-inner">
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

            <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-white/40 flex flex-col mt-4">
              <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-[#f8fafc]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] font-bold text-gray-700">
                    2024 Social Media Trends Report
                  </div>
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

              <div className="flex flex-1 overflow-hidden bg-[#f1f5f9]">
                <div className="w-[35%] bg-white border-r border-gray-100 p-4 flex flex-col gap-3 overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
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

                <div className="w-[65%] flex flex-col relative">
                  <MousePointer2 className="absolute top-4 right-[20%] w-5 h-5 text-black fill-black -rotate-12 z-50 drop-shadow-md" />
                  <div className="flex-1 p-6 flex items-center justify-center">
                    <div className="w-full aspect-video bg-[#0f0f0f] rounded-lg shadow-md p-4 flex flex-col relative border border-gray-800">
                      <div className="text-white text-[12px] font-bold mb-4 flex items-center gap-2">
                        Platform-Specific Algorithm Updates
                        <div className="h-px bg-gray-700 flex-1 ml-2"></div>
                      </div>
                      <div className="flex h-full gap-4">
                        <div className="w-1/2 flex flex-col justify-end relative pb-4 pl-4 border-l border-b border-gray-800">
                          <div className="absolute bottom-1 left-2 text-[5px] text-gray-500">
                            0.0%
                          </div>
                          <div className="absolute bottom-1/3 left-2 text-[5px] text-gray-500">
                            2.5%
                          </div>
                          <div className="absolute bottom-2/3 left-2 text-[5px] text-gray-500">
                            5.0%
                          </div>
                          <div className="flex items-end justify-around h-full w-full px-2 gap-2">
                            <div className="w-full h-[80%] bg-[#bbf7d0] rounded-t-sm"></div>
                            <div className="w-full h-[50%] bg-[#a3e635] rounded-t-sm"></div>
                            <div className="w-full h-[30%] bg-[#84cc16] rounded-t-sm"></div>
                            <div className="w-full h-[45%] bg-[#65a30d] rounded-t-sm"></div>
                          </div>
                        </div>
                        <div className="w-1/2 space-y-3">
                          <div className="flex gap-2 items-start">
                            <div className="w-3 h-3 rounded-full bg-[#bbf7d0] shrink-0 flex items-center justify-center text-[5px] font-bold text-black">
                              IG
                            </div>
                            <div>
                              <div className="h-1.5 bg-white/80 rounded w-[80%] mb-1"></div>
                              <div className="h-1 bg-white/40 rounded w-full mb-0.5"></div>
                              <div className="h-1 bg-white/40 rounded w-[60%]"></div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-start">
                            <div className="w-3 h-3 rounded-full bg-[#a3e635] shrink-0 flex items-center justify-center text-[5px] font-bold text-black">
                              TT
                            </div>
                            <div>
                              <div className="h-1.5 bg-white/80 rounded w-[70%] mb-1"></div>
                              <div className="h-1 bg-white/40 rounded w-[90%] mb-0.5"></div>
                              <div className="h-1 bg-white/40 rounded w-[50%]"></div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-start">
                            <div className="w-3 h-3 rounded-full bg-[#84cc16] shrink-0 flex items-center justify-center text-[5px] font-bold text-black">
                              YT
                            </div>
                            <div>
                              <div className="h-1.5 bg-white/80 rounded w-[85%] mb-1"></div>
                              <div className="h-1 bg-white/40 rounded w-full mb-0.5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-16 bg-white border-t border-gray-200 px-4 flex items-center gap-2 overflow-hidden shadow-[inset_0_5px_10px_rgba(0,0,0,0.02)]">
                    <div className="w-16 h-10 bg-[#0f0f0f] rounded border-2 border-blue-500 shrink-0 relative flex flex-col p-1">
                      <div className="h-1 bg-gray-700 w-3/4 mb-1 rounded"></div>
                      <div className="h-0.5 bg-gray-700 w-full mb-0.5 rounded"></div>
                      <div className="h-0.5 bg-gray-700 w-1/2 rounded"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-white text-[6px] flex items-center justify-center font-bold">
                        4
                      </div>
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

// 7. Human AI Collaboration
function HumanAiCollaboration() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const slideFromTopLeft = {
    hidden: { opacity: 0, x: -100, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };
  const slideFromBottomRight = {
    hidden: { opacity: 0, x: 100, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans flex flex-col bg-gradient-to-br from-[#e0f2fe] via-[#80d4ff] to-[#50bfff]">
      <div className="relative flex-1 w-full h-full min-h-[800px] flex items-center justify-center pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromTopLeft}
          className="absolute top-[15%] left-[-5%] md:left-[5%] w-[400px] md:w-[600px] opacity-90 pointer-events-none"
        >
          <svg
            viewBox="0 0 600 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            <path
              d="M 50 150 C 150 180, 250 250, 320 230 C 350 220, 330 200, 300 210"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 50 120 C 200 150, 350 200, 420 250 C 430 260, 410 270, 400 250"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 80 100 C 250 130, 400 180, 470 230 C 480 240, 460 250, 450 230"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 120 80 C 280 110, 450 160, 520 200 C 530 210, 510 220, 500 200"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 160 60 C 310 90, 480 130, 550 160 C 560 170, 540 180, 530 160"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-20 flex flex-col items-center text-center -mt-20"
        >
          <h1
            className="text-white text-5xl md:text-6xl tracking-wide mb-8 drop-shadow-md"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Human for will, AI for skill.
          </h1>
          <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-[0_10px_30px_rgba(42,133,255,0.4)]">
            Start for free <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromBottomRight}
          className="absolute bottom-[-10%] right-[-5%] md:right-[5%] w-[500px] h-[500px] pointer-events-none opacity-90 mix-blend-screen"
        >
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_0_20px_rgba(100,200,255,0.5)]"
          >
            <defs>
              <linearGradient
                id="metalBlue"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#80c4ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1a75ff" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient
                id="glowYellow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffea80" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffb31a" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 350 500 L 450 500 L 400 350 L 300 380 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="2"
            />
            <path
              d="M 390 360 L 410 355 L 420 380 L 400 385 Z"
              fill="url(#glowYellow)"
              opacity="0.8"
              blur="2"
            />
            <path
              d="M 280 370 C 250 300, 300 250, 350 250 C 380 250, 420 300, 410 360 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="2"
            />
            <circle
              cx="340"
              cy="310"
              r="30"
              fill="none"
              stroke="url(#glowYellow)"
              strokeWidth="4"
              className="drop-shadow-[0_0_10px_#ffea80]"
            />
            <path
              d="M 260 340 L 200 320 L 180 300 L 190 280 L 220 310 L 280 320 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="1.5"
            />
            <circle cx="200" cy="320" r="6" fill="url(#glowYellow)" />
            <path
              d="M 300 260 L 260 180 L 240 120 L 255 115 L 275 175 L 320 250 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="1.5"
            />
            <ellipse
              cx="260"
              cy="180"
              rx="8"
              ry="12"
              fill="url(#metalBlue)"
              stroke="url(#glowYellow)"
              strokeWidth="2"
              transform="rotate(-20 260 180)"
            />
            <ellipse
              cx="247"
              cy="117"
              rx="6"
              ry="10"
              fill="url(#glowYellow)"
              opacity="0.8"
              transform="rotate(-15 247 117)"
            />
            <path
              d="M 330 250 L 310 160 L 305 90 L 320 85 L 330 155 L 350 245 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="1.5"
            />
            <ellipse
              cx="310"
              cy="160"
              rx="8"
              ry="12"
              fill="url(#metalBlue)"
              stroke="url(#glowYellow)"
              strokeWidth="2"
              transform="rotate(-5 310 160)"
            />
            <path
              d="M 360 255 L 365 170 L 375 110 L 390 115 L 380 175 L 380 260 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="1.5"
            />
            <ellipse
              cx="365"
              cy="170"
              rx="8"
              ry="12"
              fill="url(#metalBlue)"
              stroke="url(#glowYellow)"
              strokeWidth="2"
              transform="rotate(10 365 170)"
            />
            <path
              d="M 390 270 L 410 200 L 430 150 L 440 160 L 420 210 L 400 280 Z"
              fill="url(#metalBlue)"
              stroke="#a1d6ff"
              strokeWidth="1.5"
            />
            <ellipse
              cx="410"
              cy="200"
              rx="8"
              ry="12"
              fill="url(#metalBlue)"
              stroke="url(#glowYellow)"
              strokeWidth="2"
              transform="rotate(25 410 200)"
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] h-[120px] bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-30" />
    </div>
  );
}

// 8. Footer Component
function FooterComponent() {
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#83d1ff] via-[#d3efff] to-[#ffe4cc] overflow-hidden font-sans flex flex-col items-center justify-end pb-12 pt-32 px-4 md:px-8">
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={slideUp}
        className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-16 flex flex-col justify-between min-h-[400px] z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          <div className="flex items-center gap-2 cursor-pointer">
            <Aperture className="w-8 h-8 text-[#2a85ff] stroke-[2.5]" />
            <span className="text-3xl font-bold text-[#0a0a0a] tracking-tight">
              Rebot
            </span>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 mb-6 tracking-wide">
                Product
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 mb-6 tracking-wide">
                Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 mb-6 tracking-wide">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-20 pt-8 border-t border-gray-50 gap-6 md:gap-0">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors">
              <Globe className="w-3.5 h-3.5 text-gray-500" /> EN
            </button>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.2.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.005H5.032z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.27-1.67 1.36-3.83 1.94-5.94 1.6-3.15-.46-5.74-2.84-6.42-5.93-.68-3.04.16-6.4 2.5-8.4 2.15-1.87 5.16-2.52 7.89-1.92v4.22c-1.28-.35-2.69-.32-3.84.28-1.53.79-2.39 2.59-2.09 4.26.23 1.29 1.04 2.5 2.19 3.12 1.63.88 3.75.58 4.96-.86.91-1.07 1.29-2.54 1.26-3.95-.05-5.55-.02-11.1-.03-16.65z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-[11px] font-medium text-gray-400 tracking-wide">
            ©2024 Rebot. All rights reserved
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

// ==========================================
// Main Full Page Export
// ==========================================
export default function RebotFullLandingPage() {
  return (
    <main className="w-full flex flex-col font-sans bg-white overflow-x-hidden">
      <HeroSection />
      <InteractiveStorySection />
      <ContentLeadDesign />
      <AIPoweredFeatures />
      <BrandReadySection />
      <AdvancedCustomEditing />
      <HumanAiCollaboration />
      <FooterComponent />
    </main>
  );
}
