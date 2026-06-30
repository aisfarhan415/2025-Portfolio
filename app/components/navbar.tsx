"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../utils/themeStore";
import { playSound } from "../utils/audio";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8">
      <nav className="ui-surface mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <Link href="/#hero" className="code-font text-sm font-semibold text-blue-700">aisfarhan.dev</Link>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              toggleTheme();
              playSound.playClick();
            }}
            onMouseEnter={() => playSound.playHover()}
            className="flex items-center gap-2 rounded-xl bg-slate-200/50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-300/60 hover:text-slate-900 border border-slate-300/40 transition"
          >
            <Sparkles size={11} className="text-blue-600 animate-pulse" />
            <span>{theme === "tactile" ? "Old Design (Glass)" : "New Design (Tactile)"}</span>
          </button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden">
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="ui-surface mx-auto mt-2 max-w-6xl rounded-xl p-2 md:hidden"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.04, duration: 0.2 }}
              className="mt-2 border-t border-slate-200/40 pt-2"
            >
              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                  playSound.playClick();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50"
              >
                <Sparkles size={13} className="text-blue-600" />
                <span>{theme === "tactile" ? "Switch to Old Design (Glass)" : "Switch to New Design (Tactile)"}</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

