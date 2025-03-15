"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 3500); // Tambah delay biar ada waktu buat animasi

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }} // Delay biar transparan terakhir
    >
      {/* Wrapper gambar */}
      <div className="relative w-full h-full flex">
        {/* BAGIAN KIRI */}
        <motion.div
          className="w-1/2 h-full relative overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }} // Delay 1 detik biar ada waktu sebelum kebelah
        >
          <Image
            src="/assets/splash.svg"
            alt="Splash Screen Left"
            layout="fill"
            objectFit="cover"
            className="absolute left-0 top-0"
            style={{ clipPath: "inset(0 50% 0 0)" }} // Potong sisi kiri
          />
        </motion.div>

        {/* BAGIAN KANAN */}
        <motion.div
          className="w-1/2 h-full relative overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }} // Sama delaynya biar sinkron
        >
          <Image
            src="/assets/splash.svg"
            alt="Splash Screen Right"
            layout="fill"
            objectFit="cover"
            className="absolute right-0 top-0"
            style={{ clipPath: "inset(0 0 0 50%)" }} // Potong sisi kanan
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
