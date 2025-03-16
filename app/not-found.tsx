"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "./globals.css";
import { motion } from "framer-motion";
import CustomButton from "./components/custombutton";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";

export default function NotFound() {
  const [svgCount, setSvgCount] = useState(8);

  useEffect(() => {
    const updateSvgCount = () => {
      setSvgCount(Math.ceil(window.innerHeight / 120));
    };

    updateSvgCount();
    window.addEventListener("resize", updateSvgCount);

    return () => window.removeEventListener("resize", updateSvgCount);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-blue lexendzetta">
      <Navbar />

      {/* Wrapper SVG*/}
      <div className="absolute inset-0 h-screen w-full overflow-hidden">
        {[...Array(svgCount)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              x: index % 2 === 0 ? ["0%", "-80%", "0%"] : ["0%", "80%", "0%"],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="absolute left-1/4 -translate-x-1/2 w-max"
            style={{
              top: `${(index + 0.5) * (100 / svgCount)}vh`,
              height: `${100 / svgCount}vh`,
            }}
          >
            <Image
              src="/assets/not-found.svg"
              alt="404 Not Found"
              width={600}
              height={200}
              className="w-[50vw] max-w-[300px] md:max-w-none h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-3 flex flex-col items-center justify-center">
          <motion.h1
            className="text-2xl md:text-4xl font-bold relative inline-block"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 15px rgba(0, 170, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            OOPS, SOMETHING WENT WRONG!
          </motion.h1>

          <motion.p
            className="text-4xl md:text-6xl font-normal text-blue mt-2 relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            whileHover={{
              rotate: [0, 1, -1, 1, -1, 0],
              transition: { duration: 0.3, repeat: Infinity },
            }}
          >
            404 NOT FOUND
          </motion.p>

          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: -3,
              transition: { duration: 0.3 },
            }}
          >
            <CustomButton
              variant="blue_default"
              iconBg="bg-white"
              iconColor="text-blue"
              icon={ArrowRight}
              onClick={() => (window.location.href = "/")}
              iconStyle={{
                transition: "transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
              className="relative"
            >
              Back to Homepage
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
