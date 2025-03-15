"use client";

import Image from "next/image";
import CustomButton from "./custombutton";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import { useState, useEffect } from "react";

const DetailedPage = ({
  title,
  details,
  imageSrc,
  client,
  position,
  credits,
  showcases,
  buttonText,
  buttonOnClick,
}: {
  title: string;
  details: string[];
  imageSrc: string;
  client: string;
  position: string;
  credits: string[];
  showcases: string[];
  buttonText?: string;
  buttonOnClick?: () => void;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div
      id="detailed"
      className="min-h-screen w-full bg-black text-white lexend flex justify-center"
    >
      <div className="w-full max-w-[1440px] pt-[138px] lg:pt-[146px] p-[52px] space-y-4 lg:space-y-[92px]">
        {/* Header */}
        <div>
          <h1 className="text-xl lg:text-4xl font mb-6">{title}</h1>

          {/* Image */}
          <div className="w-full h-auto relative">
            <Image
              src={imageSrc}
              alt="Detail Image"
              width={1440}
              height={900}
              className="object-contain w-full h-auto rounded-lg"
            />
          </div>

          {/* Client & Position */}
          <div className="flex justify-between mt-4 text-white text-sm lg:text-xl font-normal lg:font-bold">
            <p className="font-semibold">{client}</p>
            <p className="font-semibold">{position}</p>
          </div>
        </div>

        {/* Detail Section */}
        <div className="mt-0 lg:mt-8 w-full flex flex-col lg:flex-row justify-between items-start lg:gap-8 text-sm lg:text-2xl">
          {/* Button (Kiri) */}

          <div className="w-full lg:w-auto py-6">
            {buttonText && buttonOnClick ? (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -3,
                  transition: { duration: 0.3 },
                }}
                className="w-full lg:w-auto"
              >
                <CustomButton
                  icon={ArrowRight}
                  iconBg="bg-black"
                  iconColor="text-white"
                  onClick={buttonOnClick}
                  className="relative w-full lg:w-[380px]"
                >
                  {buttonText}
                </CustomButton>
              </motion.div>
            ) : (
              <div className="h-[56px] w-full lg:w-[384px]"></div>
            )}
          </div>

          {/* Detail Info (Kanan) */}
          <div className="flex-1 w-full">
            <ul className="text-white lg:text-[24px] text-sm text-wrap balance leading-[100%]">
              {details.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credits & Showcases Section */}
        <div className="flex-1 w-full">
          {/* Credits */}
          <div className="flex items-start w-full">
            <h2 className="text-sm lg:text-2xl w-[414px] font-semibold pb-2 mb-4">
              Credits
            </h2>
            <ul className="text-white text-sm lg:text-[24px] text-wrap balance text-right">
              {credits.map((credit, index) => (
                <li key={index} className="flex items-start gap-2">
                  {credit}
                </li>
              ))}
            </ul>
          </div>

          {/* Showcases */}
          <div className="flex flex-col sm:flex-row sm:items-start w-full mt-4">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold pb-2 mb-4 sm:w-1/3">
              Showcases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {showcases.map((src, index) => (
                <div
                  key={index}
                  className="w-full relative cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`Showcase ${index + 1}`}
                    width={412}
                    height={293}
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Zoom-in */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-9"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Zoomed Showcase"
              width={800}
              height={600}
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-black text-white py-2 px-3 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DetailedPage;
