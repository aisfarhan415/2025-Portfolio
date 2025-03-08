"use client";
import Navbar from "./components/navbar";
import { useState } from "react";
import "./globals.css";
import { useReviewStore } from "./components/reviewStore";
import TypingText from "./components/TypingText";
import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "./reviews";
import ReviewNavigation from "./components/ReviewNavigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const { currentIndex, reviews, nextReview, prevReview } = useReviewStore();
  const [bgX, setBgX] = useState("50%");

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100 - 50;

    setBgX((prevX) => {
      return `${parseFloat(prevX) * 0.9 + x * 0.1}%`;
    });
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-background text-gray-900 overflow-hidden scroll-smooth">
        <section
          id="hero"
          className="flex flex-col items-center justify-center text-center w-[60vw] h-[100vh] relative mb-20 pt-[182px]"
        >
          <div className="relative w-full min-w-[326px] h-full min-h-[326px] flex justify-center items-center">
            <div className="relative w-[660px] h-auto">
              <Image
                src="/assets/hero_name_blue.svg"
                alt="Outlined Text"
                width={660}
                height={480}
                className="max-w-full h-auto"
              />
              <Image
                src="/assets/hero_name.svg"
                alt="Outlined Text"
                width={660}
                height={480}
                className="absolute pointer-events-none z-40 max-w-full h-auto"
                style={{ left: "0%", top: "0%" }}
              />

              <Image
                src="/assets/hero_subtitle_blue.svg"
                alt="Outlined Text"
                width={660}
                height={480}
                className="max-w-full h-auto"
                style={{ left: "0%", position: "absolute" }}
              />

              <Image
                src="/assets/hero_subtitle_outline.svg"
                alt="Outlined Text"
                width={660}
                height={480}
                className="absolute pointer-events-none z-40 max-w-full h-auto"
                style={{
                  left: "0%",
                  position: "absolute",
                  zIndex: 40,
                }}
              />
            </div>
          </div>

          {/* Random Background Images */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.img
              src="/assets/image.svg"
              alt="Placeholder 1"
              className="absolute object-cover z-30"
              style={{
                left: "0%",
                top: "42%",
                width: "10vw",
                minWidth: "100px",
                height: "auto",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/assets/rectangle_1.svg"
              alt="Placeholder 2"
              className="absolute object-cover z-30"
              style={{
                left: "55%",
                top: "53%",
                width: "10vw",
                minWidth: "100px",
                height: "auto",
              }}
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/assets/rectangle_3.svg"
              alt="Placeholder 3"
              className="absolute object-cover z-30"
              style={{
                left: "76%",
                top: "74%",
                width: "15vw",
                minWidth: "100px",
                height: "auto",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </section>

        <section
          id="projects"
          className="flex flex-col items-center text-right w-full min-h-[1184px] bg-blue relative py-20 px-[52px]"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-8xl font-bold lexend text-left lg:text-left text-white w-full lg:w-[630px] mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              Timeless Creations, Modern Vision
            </motion.h2>

            <div className="flex flex-col justify-between h-[400px] mb-8 lg:mb-0 w-full items-start lg:items-end lg:space-y-[32px] md:space-y-[16px] sm:space-y-[8px]">
              <motion.p
                className="text-xl text-white lexend font-light w-full sm:w-[226px] lg:text-right text-left sm:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ rotate: [0, -2, 2, -2, 0] }}
              >
                Blending the past with the future, one artwork at a time.
              </motion.p>
              <motion.div
                className="w-40 h-40 bg-white rounded-full animate-pulse"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
            <div className="w-full group">
              <motion.img
                src="/assets/creation_1.svg"
                alt="Photo 1"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
              <div className="mt-4 flex justify-between">
                <p className="text-lg font-light lexend text-white">
                  Project Name 1
                </p>
                <p className="text-lg font-light lexend text-white opacity-50">
                  2023
                </p>
              </div>
            </div>

            <div className="w-full group">
              <motion.img
                src="/assets/creation_2.svg"
                alt="Photo 2"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
              <div className="mt-4 flex justify-between">
                <p className="text-lg font-light lexend text-white">
                  Project Name 2
                </p>
                <p className="text-lg font-light lexend text-white opacity-50">
                  2022
                </p>
              </div>
            </div>

            <div className="w-full group">
              <motion.img
                src="/assets/creation_3.svg"
                alt="Photo 3"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
              <div className="mt-4 flex justify-between">
                <p className="text-lg font-light lexend text-white">
                  Project Name 3
                </p>
                <p className="text-lg font-light lexend text-white opacity-50">
                  2021
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-20 bg-background text-black flex flex-col items-center px-6 sm:px-12 md:px-16 lg:px-20"
        >
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-end mb-12 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: "easeOut",
                  staggerChildren: 0.4,
                },
              },
            }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-left lexend w-full lg:w-[788px]"
              variants={{
                hidden: { opacity: 0, x: -100, skewX: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  transition: { duration: 1.2, ease: "backOut" },
                },
              }}
              whileHover={{
                scale: 1.08,
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              From Viewers to Believers
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lexend font-light text-left lg:text-right w-full lg:w-[226px] mt-6 lg:mt-0"
              variants={{
                hidden: { opacity: 0, x: 100, rotate: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: { duration: 1, ease: "backOut" },
                },
              }}
              whileHover={{
                rotate: [0, -5, 5, -5, 0],
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              When art speaks, people listen—here’s what they say.
            </motion.p>
          </motion.div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-left mx-auto w-full"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start text-left sm:items-start sm:text-left space-y-6 sm:space-y-0 sm:space-x-6">
                <motion.img
                  key={reviews[currentIndex].photo}
                  src={reviews[currentIndex].photo}
                  alt="Reviewer Photo"
                  className="w-[100px] h-[100px] sm:w-[134px] sm:h-[134px] object-cover rounded-full border-4 border-white shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <div className="flex flex-col items-start">
                  <motion.h4
                    key={reviews[currentIndex].name}
                    className="text-xl sm:text-2xl font-bold lexend text-black"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {reviews[currentIndex].name}
                  </motion.h4>
                  <motion.p
                    key={reviews[currentIndex].position}
                    className="text-sm sm:text-lg font-light lexend text-gray-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {reviews[currentIndex].position}
                  </motion.p>
                </div>
              </div>

              <TypingText
                key={reviews[currentIndex].text}
                text={reviews[currentIndex].text}
                speed={5}
              />
            </div>
            <ReviewNavigation />
          </motion.div>
        </section>

        <footer
          id="contact"
          className="bg-black text-white flex flex-col items-center justify-between min-h-[400px] md:min-h-[600px] lg:h-[878px] w-full px-6 sm:px-12 md:px-16 lg:px-[52px] py-12 sm:py-16 md:py-20 lg:py-[52px] overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          <div className="space-y-2 flex flex-col items-center justify-center text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-light lexend">
              Contact me at
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light lexend">
              aisfarhan.professional@gmail.com
            </p>
          </div>

          <motion.p
            className="text-[72px] sm:text-[120px] md:text-[180px] lg:text-[240px] font-bold lexend-exa bg-clip-text text-transparent"
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            style={{
              backgroundImage: "url('/assets/footer.svg')",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "1336px 1336px",
              backgroundPosition: "0% center",
              backgroundRepeat: "repeat",
            }}
          >
            FARHAN
          </motion.p>
        </footer>

        <SpeedInsights />
        <Analytics />
      </main>
    </div>
  );
}
