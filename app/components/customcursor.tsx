"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "none",
  });
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const hoverEffect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .hover-effect")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const changeStyle = () => {
      const sections = [
        { id: "hero", color: "rgba(25, 41, 254, 1)" },
        { id: "testimonials", color: "rgba(25, 41, 254, 1)" },
        { id: "about", color: "rgba(221, 238, 255, 1)" },
        { id: "projects", color: "rgba(255, 255, 255, 1)" },
        { id: "contact", color: "rgba(255, 255, 255, 1)" },
        { id: "detailed", color: "rgba(255, 255, 255, 1)" },
      ];

      for (let section of sections) {
        const element = document.querySelector(`#${section.id}`);
        if (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight / 2 &&
          element.getBoundingClientRect().bottom >= window.innerHeight / 2
        ) {
          setCursorStyle({
            backgroundColor: isHovering ? "#DDEEFF" : section.color,
            border: "none",
          });

          break;
        }
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", hoverEffect);
    document.addEventListener("mouseout", hoverEffect);
    document.addEventListener("scroll", changeStyle);

    controls.start({
      scale: [1, 1.5, 1], // Efek napas
      opacity: [0.8, 1, 0.8], // Smooth
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", hoverEffect);
      document.removeEventListener("mouseout", hoverEffect);
      document.removeEventListener("scroll", changeStyle);
    };
  }, [controls]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 md:block hidden"
      animate={controls}
      style={{
        x: position.x - 10,
        y: position.y - 10,
        width: isHovering ? "40px" : "20px",
        height: isHovering ? "40px" : "20px",
        borderRadius: isHovering ? "12px" : "50%",
        position: "fixed",
        transform: "translate(-50%, -50%)",
        zIndex: 90,
        transition:
          "width 0.2s ease, height 0.2s ease, border-radius 0.2s ease, background-color 0.2s ease",
        ...cursorStyle,
        opacity: isHovering ? 0.6 : 1,
        backgroundColor: isHovering ? "#DDEEFF" : cursorStyle.backgroundColor,
      }}
    />
  );
};

export default CustomCursor;
