"use client";

import { motion } from "framer-motion";
import { Global, ArrowRight } from "iconsax-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white flex flex-col justify-between min-h-screen w-full overflow-hidden"
    >
      {/* Top Section: Skills/Services, Sitemap, Contact Me */}
      <div className="w-full flex flex-row justify-between px-6 sm:px-12 md:px-16 lg:px-[52px] py-12">
        {/* Skills & Services */}
        <motion.div
          className="flex flex-col items-start text-left mr-52"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lg font-normal leading-[300%] lexend text-white/80">
            Skills & Services
          </h2>
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {[
              {
                text: "Web Development",
                hoverEffect: { y: -5, color: "#3B82F6" },
              },
              {
                text: "UI/UX Design",
                hoverEffect: { scale: 1.1, color: "#EC4899" },
              },
              {
                text: "Frontend Engineering",
                hoverEffect: { rotate: 2, color: "#FACC15" },
              },
              {
                text: "Animation & Motion",
                hoverEffect: { x: [0, 3, -3, 0], color: "#22C55E" },
              },
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="text-[28px] font-normal leading-[100%] lexend"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={skill.hoverEffect}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {skill.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        {/* Sitemap */}
        <motion.div
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lg font-normal leading-[300%] lexend text-white/80">
            Sitemap
          </h2>
          <motion.div
            className="grid grid-cols-2 gap-x-12 gap-y-8 text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {[
              {
                text: "Home",
                href: "#hero",
                hoverEffect: { x: 10, opacity: 1, color: "#60a5fa" }, // Geser kanan + warna biru muda
              },
              {
                text: "Projects",
                href: "#projects",
                hoverEffect: {
                  scale: 1.15,
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)", // Scale up + glow
                },
              },
              {
                text: "About",
                href: "#about",
                hoverEffect: {
                  rotate: 5,
                  color: "#facc15", // Rotate lebih ekstrim + warna kuning
                },
              },
              {
                text: "Contact",
                href: "#contact",
                hoverEffect: {
                  y: -6,
                  opacity: 1,
                  textDecoration: "underline",
                  textDecorationThickness: "3px", // Underline lebih tebel pas hover
                },
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="font-normal leading-[100%] lexend relative hover:underline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={item.hoverEffect}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {item.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        {/* Contact Me Card */}
        <motion.div
          className="ml-auto flex flex-col items-end text-right"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="bg-white/20 text-white rounded-2xl p-3 shadow-lg h-[104px] w-[235px] flex flex-col items-end justify-between">
            <Global size="20" className="self-start text-white/80" />

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <a
                href="mailto:aisfarhan.professional@gmail.com"
                className="mt-auto flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium lexend hover:bg-blue-600"
              >
                Contact Me{" "}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  initial={{ rotate: 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}
                >
                  <ArrowRight size="20" className="ml-2" />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col w-full items-center justify-between space-y-6">
        <motion.div
          className="flex w-full justify-between text-sm sm:text-base md:text-lg font-light px-6 sm:px-12 md:px-16 lg:px-[52px] lexend"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              color: "#60a5fa",
            }}
            className="cursor-pointer"
          >
            2025 © Copyright
          </motion.p>

          {/* Email Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
            }}
          >
            Email me at{" "}
            <motion.a
              href="mailto:aisfarhan.professional@gmail.com"
              className="underline"
              whileHover={{
                color: "#60a5fa",
                textDecorationThickness: "3px",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              aisfarhan.professional@gmail.com
            </motion.a>
          </motion.p>
        </motion.div>

        <motion.p
          className="text-[192px] font-bold text-white castoro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            opacity: 1,
          }}
        >
          AIS FARHAN
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
