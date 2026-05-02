"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import "./globals.css";
import ProjectGrid from "./components/customgrid";
import Footer from "./components/footer";
import { ArrowRight, Sparkles, Workflow } from "lucide-react";

const projects = [
  { imgSrc: "/assets/creation_1.svg", altText: "SIPASTI showcase", logoSrc: "/assets/pupr-logo.svg", name: "SIPASTI", year: "2024", link: "/detailed/sipasti" },
  { imgSrc: "/assets/creation_2.svg", altText: "BahanbaKu showcase", logoSrc: "/assets/bahanbaku-logo.svg", name: "BahanbaKu", year: "2022", link: "/detailed/bahanbaku" },
  { imgSrc: "/assets/creation_3.svg", altText: "Coche showcase", logoSrc: "/assets/coche-logo.svg", name: "Coche", year: "2021", link: "/detailed/coche" },
];

const modes = {
  recruiter: { label: "Recruiter", text: "I can walk you through impact, ownership, and delivery quality.", href: "/#projects" },
  founder: { label: "Founder", text: "I focus on business-aware UX, conversion clarity, and iteration speed.", href: "/#about" },
  engineer: { label: "Engineer", text: "I can explain architecture choices, performance tradeoffs, and scalability.", href: "/#projects" },
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

  return (
    <div className="relative overflow-hidden">
      <motion.div className="pointer-events-none absolute -left-24 top-28 h-56 w-56 rounded-full bg-blue-300/30 blur-3xl" animate={{ y: [0, -25, 0], x: [0, 12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="pointer-events-none absolute right-8 top-40 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" animate={{ y: [0, 20, 0], x: [0, -16, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      <Navbar />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 pt-28 md:px-8 md:pt-32"
      >
        <motion.section id="hero" variants={item} whileHover={{ y: -3 }} className="ui-fancy rounded-3xl p-8 md:p-12">
          <motion.p className="code-font text-xs uppercase tracking-wider text-blue-700" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            UI/UX Designer + Frontend Developer
          </motion.p>
          <motion.h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Design systems that feel effortless. Frontend architecture that scales.
          </motion.h1>
          <motion.p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            I build products end-to-end: discovery, UX strategy, visual systems, and production-grade frontend implementation.
          </motion.p>
          <motion.div className="mt-6 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="/#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">View Case Studies <ArrowRight size={16} /></motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="mailto:aisfarhan.professional@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Book a Chat</motion.a>
          </motion.div>
        </motion.section>

        <motion.section variants={item} className="grid gap-5 lg:grid-cols-3">
          <motion.article whileHover={{ y: -3 }} className="ui-surface rounded-2xl p-6 lg:col-span-2">
            <p className="code-font text-xs uppercase tracking-wider text-blue-700">Quick Intro</p>
            <p className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">Choose your context so I can highlight what matters most to you:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(modes) as Mode[]).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setMode(key)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${mode === key ? "bg-blue-600 text-white" : "ui-subtle text-slate-700"}`}
                >
                  {modes[key].label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-4 rounded-xl bg-blue-50 px-4 py-3 text-sm text-slate-700"
              >
                {active.text}
              </motion.p>
            </AnimatePresence>
          </motion.article>

          <motion.article whileHover={{ y: -3 }} className="ui-fancy rounded-2xl p-6">
            <p className="code-font text-xs uppercase tracking-wider text-blue-700">Core Strength</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="flex items-center gap-2"><Sparkles size={15} className="text-blue-600" /> Product-minded UI strategy</motion.li>
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="flex items-center gap-2"><Workflow size={15} className="text-blue-600" /> Solid FE architecture decisions</motion.li>
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.19 }} className="flex items-center gap-2"><Sparkles size={15} className="text-blue-600" /> Motion and interaction polish</motion.li>
            </ul>
          </motion.article>
        </motion.section>

        <motion.section id="about" variants={item} className="grid gap-5 md:grid-cols-3">
          {[
            { label: "Years in Product", value: "1+", note: "UI/UX + FE delivery" },
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

        <motion.section id="projects" variants={item} className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Selected Work</h2>
            <p className="max-w-md text-sm text-slate-600 md:text-base">Case studies that balance business goals, usability, visual quality, and technical execution.</p>
          </div>
          <ProjectGrid projects={projects} />
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
