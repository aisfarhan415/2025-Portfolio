"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "../../src/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isHeroActive, setIsHeroActive] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isProjectsActive, setIsProjectsActive] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    let currentSection = "";
    [...navItems, { name: "Hero", href: "#hero" }].forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = item.href;
        }
      }
    });

    setActiveSection(currentSection);
    setIsHeroActive(currentSection === "#hero");
    setIsProjectsActive(currentSection === "#projects"); // Cek apakah lagi di Projects
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-4 left-0 right-0 mx-auto w-fit flex justify-center py-3 px-8 z-50 transition-all duration-300 rounded-full",
        isProjectsActive ? "bg-white shadow-lg" : "bg-blue shadow-lg"
      )}
      animate={{
        y: [0, -15, 0, 15, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{
        y: 0,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="flex items-center gap-x-12">
        {/* Logo ganti warna dengan animasi */}
        <Link href="#hero" className="flex items-center gap-2">
          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="relative w-[82px] h-[63px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={isHeroActive ? "favicon" : "favicon_blue"} // Biar Framer Motion tau ini berubah
                src={isHeroActive ? "assets/favicon.svg" : "assets/favicon_blue.svg"}
                alt="Logo"
                width={82}
                height={63}
                className="absolute top-0 left-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.3 } }}
              />
            </AnimatePresence>
          </motion.div>
        </Link>

        {/* Menu */}
        <div className="flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Link
                href={item.href}
                className={cn(
                  "relative block px-6 py-3 text-lg font-medium font-lexend transition-colors duration-300 rounded-full",
                  activeSection === item.href
                    ? isProjectsActive
                      ? "text-blue bg-blue/20"
                      : "text-white bg-white/20"
                    : isProjectsActive
                    ? "text-blue/50 hover:text-white hover:bg-blue/20"
                    : "text-white/50 hover:text-blue hover:bg-white/20"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
