'use client';

import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white flex flex-col items-center justify-between min-h-[400px] w-full overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center w-full space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold lexend">Get in Touch</h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light lexend">
          Let's collaborate! Reach out at
        </p>
        <a
          href="mailto:aisfarhan.professional@gmail.com"
          className="text-lg sm:text-xl md:text-2xl font-medium lexend text-blue-400 hover:underline"
        >
          aisfarhan.professional@gmail.com
        </a>
      </div>

      <div className="flex flex-col w-full items-center justify-between space-y-6 mt-12">
        <div className="flex w-full justify-between text-sm sm:text-base md:text-lg font-light px-6 sm:px-12 md:px-16 lg:px-[52px]">
          <p>2025 © Copyright</p>
          <p>Email me at <a href="mailto:aisfarhan.professional@gmail.com" className="underline">aisfarhan.professional@gmail.com</a></p>
        </div>
        
        <motion.p
          className="text-[192px] font-bold text-white castoro"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          AIS FARHAN
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
