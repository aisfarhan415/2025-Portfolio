"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import "./globals.css";
import ProjectGrid from "./components/customgrid";
import Footer from "./components/footer";
import { ArrowLeft, ArrowRight, Linkedin, Sparkles, Workflow } from "lucide-react";
import Image from "next/image";
import { useReviewStore } from "./components/reviewStore";
import Magnetic from "./components/magnetic";
import { playSound } from "./utils/audio";

const projects = [
  { imgSrc: "/assets/ollama-hero.svg", altText: "Local Ollama AI Chat Client showcase", logoSrc: "/assets/ollama-logo.svg", name: "Ollama Chat Client", year: "2025", link: "https://github.com/aisfarhan415/intelligent-oppenheimer" },
  { imgSrc: "/assets/ai-manager-hero.svg", altText: "AI Manager Telegram Bot showcase", logoSrc: "/assets/ai-manager-logo.svg", name: "AI Manager Bot", year: "2025", link: "https://github.com/aisfarhan415/AI-Manager" },
  { imgSrc: "/assets/ekatalog-hero.svg", altText: "SIPASTI showcase", logoSrc: "/assets/pupr-logo.svg", name: "SIPASTI", year: "2024", link: "/detailed/sipasti" },
  { imgSrc: "/assets/zenfocus-hero.svg", altText: "ZenFocus Dashboard showcase", logoSrc: "/assets/zenfocus-logo.svg", name: "ZenFocus Dashboard", year: "2024", link: "https://github.com/aisfarhan415" },
  { imgSrc: "/assets/bahanbaku-showcase2.png", altText: "BahanbaKu showcase", logoSrc: "/assets/bahanbaku-logo.svg", name: "BahanbaKu", year: "2022", link: "/detailed/bahanbaku" },
  { imgSrc: "/assets/coche-hero.png", altText: "Coche showcase", logoSrc: "/assets/coche-logo.svg", name: "Coche", year: "2021", link: "/detailed/coche" },
];

const modes = {
  recruiter: { label: "Recruiter", text: "I can walk you through impact, ownership, and delivery quality.", href: "/#projects" },
  founder: { label: "Founder", text: "I focus on business-aware UX, conversion clarity, and iteration speed.", href: "/#about" },
  engineer: { label: "Engineer", text: "I can explain architecture choices, AI LLM integrations, and autonomous terminal bots.", href: "/#projects" },
} as const;

type Mode = keyof typeof modes;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Home() {
  const [mode, setMode] = useState<Mode>("recruiter");
  const active = useMemo(() => modes[mode], [mode]);
  const { currentIndex, reviews, nextReview, prevReview } = useReviewStore();

  return (
    <div className="relative overflow-hidden">
      <Navbar />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 pt-28 md:px-8 md:pt-32"
      >
        {/* Technical decorative details in page margins */}
        <div className="absolute top-48 left-[-80px] hidden xl:flex items-center gap-2 text-[9px] code-font text-slate-400 select-none uppercase tracking-[0.2em] pointer-events-none rotate-90 origin-left">
          <span>PORTFOLIO_SYSTEM // CONSOLE_ACTIVE</span>
        </div>
        <div className="absolute bottom-48 right-[-80px] hidden xl:flex items-center gap-2 text-[9px] code-font text-slate-400 select-none uppercase tracking-[0.2em] pointer-events-none -rotate-90 origin-right">
          <span>SECURE_CONNECTION // JKT_CORE_NODE</span>
        </div>
        <motion.section id="hero" variants={item} whileHover={{ y: -2 }} className="ui-fancy rounded-3xl p-6 md:p-10">
          {/* Top cockpit status bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between border-b border-slate-300/40 pb-4 text-[10px] uppercase tracking-wider text-slate-500 code-font">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>System Core: Operational</span>
            </div>
            <div className="hidden sm:block">
              <span>Port: 8080 // Secure Connection // ID: 9B73</span>
            </div>
            <div>
              <span className="rounded bg-slate-200 px-2 py-0.5 text-slate-700 font-semibold">v2.0-stable</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.p className="code-font text-xs uppercase tracking-wider text-blue-600" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                UI/UX Designer + Frontend Developer
              </motion.p>
              <motion.h1 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                Design systems that feel effortless. Frontend architecture that scales.
              </motion.h1>
              <motion.p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                I build products end-to-end: UI/UX, scalable frontend architecture, and custom AI integrations (Ollama, Gemini API).
              </motion.p>
              <motion.div className="mt-6 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                <Magnetic>
                  <motion.a 
                    whileHover={{ scale: 1.04 }} 
                    whileTap={{ scale: 0.98 }} 
                    onMouseEnter={() => playSound.playHover()}
                    onClick={() => playSound.playClick()}
                    href="/#projects" 
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    View Case Studies <ArrowRight size={16} />
                  </motion.a>
                </Magnetic>
                <Magnetic>
                  <motion.a 
                    whileHover={{ scale: 1.04 }} 
                    whileTap={{ scale: 0.98 }} 
                    onMouseEnter={() => playSound.playHover()}
                    onClick={() => playSound.playClick()}
                    href="mailto:aisfarhan.professional@gmail.com" 
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100/50"
                  >
                    Book a Chat
                  </motion.a>
                </Magnetic>
              </motion.div>
            </div>

            {/* Right Cockpit Console Panel */}
            <div className="lg:col-span-5">
              <div className="ui-console rounded-2xl p-5 font-mono text-xs space-y-4">
                {/* Console Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[9px] text-slate-500">GATEWAY_CONSOLE // ACTIVE</span>
                </div>
                
                {/* Terminal Output Mock */}
                <div className="space-y-1.5 text-slate-300 text-[10.5px] leading-normal">
                  <p className="text-blue-400">&gt; initial_system_check</p>
                  <p className="text-emerald-400">✓ FE Engine: Next.js 14 App Router [OK]</p>
                  <p className="text-emerald-400">✓ Styling tokens: Neomorphic Light [LOADED]</p>
                  <p className="text-emerald-400">✓ Selected Works: 6 Cards [ONLINE]</p>
                  <p className="text-slate-600">-------------------------------------</p>
                  <p className="text-purple-400">&gt; core_inference_active</p>
                  <p className="text-slate-200">Edge Gateway: <span className="text-yellow-500">Gemini 3.5 Flash</span></p>
                </div>

                {/* Latency Chart SVG */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 mb-1">
                    <span>VECTOR RETRIEVAL SIGNAL</span>
                    <span>LATENCY: 24ms</span>
                  </div>
                  <div className="relative h-12 w-full bg-slate-950/60 rounded border border-slate-800 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                      <path d="M 0 35 Q 25 10 50 30 T 100 15 T 150 35 T 200 20" fill="none" stroke="#2563eb" strokeWidth="2" />
                      <path d="M 0 35 Q 25 10 50 30 T 100 15 T 150 35 T 200 20 L 200 48 L 0 48 Z" fill="url(#chartGrad)" opacity="0.1" />
                      <circle cx="100" cy="15" r="3" fill="#2563eb" className="animate-pulse" />
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} className="grid gap-5 lg:grid-cols-3">
          <motion.article whileHover={{ y: -2 }} className="ui-surface rounded-2xl p-6 lg:col-span-2">
            <p className="code-font text-xs uppercase tracking-wider text-blue-600">Quick Intro</p>
            <p className="mt-3 text-sm text-slate-600">Choose your context so I can highlight what matters most to you:</p>
            <div className="mt-3 ui-pressed rounded-xl p-2.5 flex flex-wrap gap-2">
              {(Object.keys(modes) as Mode[]).map((key) => (
                <Magnetic key={key} range={60} strength={0.25}>
                  <motion.button
                    onClick={() => {
                      playSound.playClick();
                      setMode(key);
                    }}
                    onMouseEnter={() => playSound.playHover()}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${mode === key ? "bg-slate-900 text-white shadow-inner" : "bg-white/40 text-slate-700 shadow-sm border border-white/50 hover:bg-white/60"}`}
                  >
                    {modes[key].label}
                  </motion.button>
                </Magnetic>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-4 ui-pressed rounded-xl px-4 py-3 text-sm text-slate-700"
              >
                {active.text}
              </motion.div>
            </AnimatePresence>
          </motion.article>

          <motion.article whileHover={{ y: -2 }} className="ui-surface rounded-2xl p-6">
            <p className="code-font text-xs uppercase tracking-wider text-blue-600">Core Strength</p>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-700">
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="flex items-center gap-2"><Sparkles size={15} className="text-blue-600" /> Product-minded UI strategy</motion.li>
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="flex items-center gap-2"><Workflow size={15} className="text-blue-600" /> Solid FE architecture decisions</motion.li>
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.19 }} className="flex items-center gap-2"><Sparkles size={15} className="text-blue-600" /> Motion and interaction polish</motion.li>
            </ul>
          </motion.article>
        </motion.section>

        <motion.section id="about" variants={item} className="grid gap-5 md:grid-cols-3">
          {[
            { label: "Years in Product", value: "2+", note: "UI/UX + FE delivery" },
            { label: "Projects Shipped", value: "20+", note: "Web products and systems" },
            { label: "Cross-team Collaborations", value: "10+", note: "Designer, PM, engineer" },
          ].map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -4, scale: 1.01 }} className="ui-surface rounded-2xl p-6">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-4xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-500">{stat.note}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section id="experience" variants={item} className="ui-fancy rounded-3xl p-8 md:p-12 space-y-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="code-font text-xs uppercase tracking-wider text-blue-700">Career Timeline</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">Professional Journey</h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">A hybrid background blending UX/UI design and full-stack development.</p>
          </div>

          <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
            {[
              {
                role: "Fullstack Developer",
                company: "Kementerian Pekerjaan Umum",
                date: "Oct 2024 - Present",
                type: "Dev",
                color: "bg-blue-50 text-blue-700 border-blue-200",
              },
              {
                role: "UI/UX Design Intern",
                company: "AIDO Health",
                date: "May - Aug 2024",
                type: "Design",
                color: "bg-emerald-50 text-emerald-700 border-emerald-200",
              },
              {
                role: "UI/UX Designer",
                company: "YouApp",
                date: "Nov 2023 - Jan 2024",
                type: "Design",
                color: "bg-emerald-50 text-emerald-700 border-emerald-200",
              },
            ].map((job) => (
              <motion.div 
                key={job.role} 
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 shadow-sm" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-lg">{job.role}</h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${job.color}`}>
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{job.company}</p>
                  </div>
                  <span className="code-font text-xs text-slate-500">{job.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" variants={item} className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Selected Work</h2>
            <p className="max-w-md text-sm text-slate-600 md:text-base">Case studies that balance business goals, usability, visual quality, and technical execution.</p>
          </div>
          <ProjectGrid projects={projects} />
        </motion.section>

        <motion.section id="testimonials" variants={item} className="ui-fancy rounded-3xl p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <p className="code-font text-xs uppercase tracking-wider text-blue-700">Testimonials</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">From Viewers to Believers</h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">What colleagues and collaborators say about working with me.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="ui-surface rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-100 shadow-sm bg-slate-100">
                    <Image
                      src={reviews[currentIndex].photo}
                      alt={reviews[currentIndex].name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      {reviews[currentIndex].name}
                      <a href={reviews[currentIndex].linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition" aria-label="LinkedIn Profile">
                        <Linkedin size={16} />
                      </a>
                    </h4>
                    <p className="text-xs text-slate-500">{reviews[currentIndex].position}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      playSound.playClick();
                      prevReview();
                    }} 
                    onMouseEnter={() => playSound.playHover()}
                    className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50 transition" 
                    aria-label="Previous review"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button 
                    onClick={() => {
                      playSound.playClick();
                      nextReview();
                    }} 
                    onMouseEnter={() => playSound.playHover()}
                    className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50 transition" 
                    aria-label="Next review"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-sm md:text-base leading-relaxed text-slate-700 italic">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
