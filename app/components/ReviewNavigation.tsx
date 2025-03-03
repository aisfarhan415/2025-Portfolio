import { useReviewStore } from "./reviewStore";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { motion } from "framer-motion";

const ReviewNavigation = () => {
  const { nextReview, prevReview } = useReviewStore();

  return (
    <div className="flex space-x-4 mt-6">
      <motion.button
        onClick={prevReview}
        className="bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center gap-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="w-[38px] h-[38px] bg-black rounded-full flex items-center justify-center shadow-md"
          whileHover={{ rotate: -360 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft2 size="20" variant="Linear" color="white" />
        </motion.div>
      </motion.button>

      <motion.button
        onClick={nextReview}
        className="bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center gap-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="w-[38px] h-[38px] bg-black rounded-full flex items-center justify-center shadow-md"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowRight2 size="20" variant="Linear" color="white" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ReviewNavigation;
