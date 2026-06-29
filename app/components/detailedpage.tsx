"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Footer from "./footer";
import { playSound } from "../utils/audio";

const DetailedPage = ({
  title,
  details,
  imageSrc,
  client,
  position,
  credits,
  showcases,
  buttonText,
  buttonOnClick,
}: {
  title: string;
  details: string[];
  imageSrc: string;
  client: string;
  position: string;
  credits: string[];
  showcases: string[];
  buttonText?: string;
  buttonOnClick?: () => void;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="detailed" className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 md:px-8 md:pt-32">
      {/* Decorative vertical metadata borders in margins */}
      <div className="absolute top-48 left-[-80px] hidden xl:flex items-center gap-2 text-[9px] code-font text-slate-400 select-none uppercase tracking-[0.2em] pointer-events-none rotate-90 origin-left">
        <span>CASE_STUDY // CONSOLE_VIEW</span>
      </div>
      <div className="absolute bottom-48 right-[-80px] hidden xl:flex items-center gap-2 text-[9px] code-font text-slate-400 select-none uppercase tracking-[0.2em] pointer-events-none -rotate-90 origin-right">
        <span>SECURE_LINK // DETAILED_NODE</span>
      </div>

      <section className="ui-fancy rounded-[2rem] p-6 md:p-10">
        <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Project Case Study</p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">{title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
            <span className="liquid-chip rounded-full px-3 py-1">{client}</span>
            <span className="liquid-chip rounded-full px-3 py-1">{position}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/60">
          <Image src={imageSrc} alt={`${title} hero`} width={1440} height={900} className="h-auto w-full object-cover" priority />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-4">
            {buttonText && buttonOnClick ? (
              <button
                onClick={() => {
                  playSound.playClick();
                  buttonOnClick();
                }}
                onMouseEnter={() => playSound.playHover()}
                className="inline-flex w-full items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ) : null}
          </div>
          <div className="space-y-3 lg:col-span-8">
            {details.map((item, index) => (
              <p key={index} className="text-sm leading-relaxed text-slate-700 md:text-base">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-12">
        <article className="ui-surface rounded-3xl p-6 lg:col-span-4">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">Credits</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            {credits.map((credit, index) => (
              <li key={index}>{credit}</li>
            ))}
          </ul>
        </article>

        <article className="ui-surface rounded-3xl p-6 lg:col-span-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">Showcases</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {showcases.map((src, index) => (
              <motion.button
                key={src}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-2xl border border-white/65 text-left"
                onMouseEnter={() => playSound.playHover()}
                onClick={() => {
                  playSound.playClick();
                  setSelectedImage(src);
                }}
                aria-label={`Open showcase ${index + 1}`}
              >
                <Image src={src} alt={`Showcase ${index + 1}`} width={520} height={360} className="h-full w-full object-cover" />
              </motion.button>
            ))}
          </div>
        </article>
      </section>

      <div className="mt-5">
        <Footer />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="ui-surface relative w-full max-w-4xl overflow-hidden rounded-3xl p-2"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={selectedImage} alt="Selected showcase" width={1400} height={900} className="h-auto w-full rounded-2xl object-contain" />
              <button
                className="absolute right-5 top-5 rounded-full bg-slate-900 p-2 text-white"
                onMouseEnter={() => playSound.playHover()}
                onClick={() => {
                  playSound.playClick();
                  setSelectedImage(null);
                }}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DetailedPage;
