"use client";

import { useReviewStore } from "./components/reviewStore";
import TypingText from "./components/TypingText";
import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "./reviews";
import { Button } from "./components/ui/button";


export default function Home() {

  const { currentIndex, reviews, nextReview, prevReview } = useReviewStore();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-[788px] relative mb-20">
        <Image
          src="/assets/hero_name_blue.svg"
          alt="Outlined Text"
          width={660}
          height={480}
        />
        <Image
          src="/assets/hero_name.svg"
          alt="Outlined Text"
          width={660}
          height={480}
          className="absolute pointer-events-none z-40"
        />
        <Image
          src="/assets/hero_subtitle_blue.svg"
          alt="Outlined Text"
          width={660}
          height={480}
        />
        <Image
          src="/assets/hero_subtitle_outline.svg"
          alt="Outlined Text"
          width={660}
          height={480}
          className="absolute pointer-events-none z-40"
          style={{ left: "64px", top: "435px" }}
        />

        {/* Animated Floating Images */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="/assets/image.svg"
            alt="Placeholder 1"
            width={145}
            height={145}
            className="absolute object-cover z-10"
            style={{ left: "31px", top: "30px" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src="/assets/rectangle_1.svg"
            alt="Placeholder 2"
            width={145}
            height={145}
            className="absolute object-cover z-20"
            style={{ left: "470px", top: "158px" }}
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src="/assets/rectangle_3.svg"
            alt="Placeholder 3"
            width={289}
            height={289}
            className="absolute object-cover z-30"
            style={{ left: "532px", top: "340px" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* New Section */}
      <section className="flex flex-col items-center text-right w-full min-h-[1184px] bg-blue relative py-20 px-[52px]">
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col justify-between h-[400px]">
            <motion.div
              className="w-40 h-40 bg-white rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.p
              className="text-xl text-white lexend text-left font-light w-[226px]"
              initial={{ opacity: 0, x: -50 }} // Masuk dari kiri, transparan
              animate={{ opacity: 1, x: 0 }} // Fade in + geser masuk
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ rotate: [0, -2, 2, -2, 0] }} // Wiggle dikit pas hover
            >
              Blending the past with the future, one artwork at a time.
            </motion.p>
          </div>

          <motion.h2
            className="text-9xl font-bold lexend text-white text-right w-[788px] self-end"
            initial={{ opacity: 0, y: 50 }} // Mulai dari bawah & transparan
            animate={{ opacity: 1, y: 0 }} // Fade in + slide up
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Sedikit membesar pas dihover
          >
            Timeless Creations, Modern Vision
          </motion.h2>
        </div>

        {/* SECTION FOTO */}
        <div className="grid grid-cols-3 gap-8 mt-12 w-full">
          {/* Foto 1 */}
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

          {/* Foto 2 */}
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

          {/* Foto 3 */}
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
      <section className="w-full py-20 bg-background text-black flex flex-col items-center">
        {/* Title & Subtitle */}
        <motion.div
          className="flex justify-between items-end mb-12 w-full p-[52px]"
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
          {/* Judul */}
          <motion.h2
            className="text-9xl font-bold text-left lexend w-[788px]"
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

          {/* Sub Judul */}
          <motion.p
            className="text-2xl lexend font-light text-right w-[226px]"
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
  className="items-left content-start mx-auto mb-12 p-[52px]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div className="space-y-3">
    {/* Foto + Nama Reviewer */}
    <div className="flex flex-row items-left content-center text-center space-x-6">
      <motion.img
        src={reviews[currentIndex].photo}
        alt="Reviewer Photo"
        className="w-[134px] h-[134px] object-cover rounded-full border-4 border-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <h4 className="text-2xl font-bold lexend text-black mt-4 content-center">
        {reviews[currentIndex].name}
      </h4>
    </div>

    {/* Teks Review */}
    <TypingText text={reviews[currentIndex].text} speed={30} />
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-between mt-6 w-full">
    <Button onClick={prevReview} className="bg-gray-800 text-white px-4 py-2">
      ← Previous
    </Button>
    <Button onClick={nextReview} className="bg-gray-800 text-white px-4 py-2">
      Next →
    </Button>
  </div>
</motion.div>
      </section>
    </main>
  );
}
