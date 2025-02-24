import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center text-center p-4">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-[96px] text-gray-800 font-[Castoro Titling] leading-tight">
          From Renaissance to Reimagined
        </h1>
        <p className="text-lg text-gray-600 font-[Lexend Exa] max-w-[800px] mt-4">
          Let’s start where history meets creativity—turning old into bold.
        </p>
      </div>

      <motion.div
        className="absolute bottom-10 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      ></motion.div>
    </section>
  );
};

export default Home;
