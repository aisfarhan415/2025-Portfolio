"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-[788px] relative mb-20">
        <Image src="/assets/hero_name_blue.svg" alt="Outlined Text" width={660} height={480} />
        <Image src="/assets/hero_name.svg" alt="Outlined Text" width={660} height={480} className="absolute pointer-events-none z-40" />
        <Image src="/assets/hero_subtitle_blue.svg" alt="Outlined Text" width={660} height={480} />
        <Image src="/assets/hero_subtitle_outline.svg" alt="Outlined Text" width={660} height={480} className="absolute pointer-events-none z-40" style={{ left: "64px", top: "435px" }} />

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
      <section className="flex flex-col items-center text-center w-[788px] relative">
        <h2 className="text-5xl font-bold lexend mb-6">Discover the Art of Transformation</h2>
        <p className="text-xl text-gray-700 max-w-2xl">
          Merging historical elegance with modern creativity. Experience a journey where past meets future in an artistic revolution.
        </p>
        <motion.div
          className="mt-8 w-40 h-40 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>
    </main>
  );
}
