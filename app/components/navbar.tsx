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
  const [isOpen, setIsOpen] = useState(false);

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
    setIsProjectsActive(currentSection === "#projects");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="w-full fixed top-4 flex items-center justify-between px-8 z-50"
      animate={{
        y: [0, -15, 0, 15, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ y: 0 }}
    >
      <div className="w-[40px]" />
      {/* Navbar */}
      <motion.nav
        className={cn(
          "inline-flex justify-center py-3 px-8 transition-all duration-300 rounded-full w-fit mx-auto",
          isProjectsActive ? "bg-white shadow-lg" : "bg-blue shadow-lg"
        )}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <div className="flex items-center gap-x-12">
          <Link href="#hero" className="flex items-center gap-2">
            <div className="relative w-[82px] h-[63px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={isHeroActive ? "favicon" : "favicon_blue"}
                  src={
                    isHeroActive
                      ? "assets/favicon.svg"
                      : "assets/favicon_blue.svg"
                  }
                  alt="Logo"
                  width={82}
                  height={63}
                  className="absolute top-0 left-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                />
              </AnimatePresence>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
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
          {/* Burger Menu */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              isProjectsActive ? "text-blue" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={isOpen ? "close" : "hamburger"}
                src={isOpen ? "assets/close.svg" : "assets/hamburger.svg"}
                alt={isOpen ? "Close Menu" : "Open Menu"}
                className="w-6 h-6"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 180, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  filter: isProjectsActive
                    ? "invert(18%) sepia(91%) saturate(749%) hue-rotate(190deg) brightness(95%) contrast(90%)"
                    : "none",
                }}
              />
            </AnimatePresence>
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-[12px] flex flex-col items-center py-4 px-6 mt-[12px]"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group w-full text-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    href={item.href}
                    className="relative block py-3 w-full text-lg font-medium font-lexend transition-colors duration-300 rounded-full text-blue hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* LinkedIn & Email (Masuk ke Dropdown di Mobile) */}
              <div className="flex flex-row items-center gap-3 mt-4">
                {/* Email */}
                <Link
                  href="mailto:aisfarhan.professional@gmail.com"
                  target="_blank"
                >
                  <Image
                    src="/assets/mail.svg"
                    alt="Email"
                    width={32}
                    height={32}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </Link>
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/aisfarhan/"
                  target="_blank"
                >
                  <Image
                    src="/assets/linkedin_logo.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Desktop Only (Disembunyikan di Mobile) */}
      <div className="hidden md:flex gap-3">
        {/* Email */}
        <motion.div
          className="p-3 bg-white rounded-full border-2 border-blue hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          whileHover={{
            scale: 1.1,
            rotate: 10,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Link href="mailto:aisfarhan.professional@gmail.com" target="_blank">
            <Image
              src="/assets/mail.svg"
              alt="Email"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          className="p-3 bg-white rounded-full border-2 border-blue hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
          }}
          whileHover={{
            scale: 1.1,
            rotate: -10,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Link href="https://www.linkedin.com/in/aisfarhan/" target="_blank">
            <Image
              src="/assets/linkedin_logo.svg"
              alt="LinkedIn"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
