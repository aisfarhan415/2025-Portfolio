"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Efek Parallax buat semua elemen dalam section
  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}
