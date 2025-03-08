"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "2px solid rgba(0, 0, 255, 1)",
  });
  const [isHovering, setIsHovering] = useState(false);

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
      const projects = document.querySelector("#projects");
      const contact = document.querySelector("#contact");

      if (
        (projects &&
          projects.getBoundingClientRect().top <= window.innerHeight / 2) ||
        (contact &&
          contact.getBoundingClientRect().top <= window.innerHeight / 2)
      ) {
        setCursorStyle({
          backgroundColor: "rgba(0, 0, 255, 1)",
          border: "2px solid rgba(255, 255, 255, 1)",
        });
      } else {
        setCursorStyle({
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "2px solid rgba(0, 0, 255, 1)",
        });
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", hoverEffect);
    document.addEventListener("mouseout", hoverEffect);
    document.addEventListener("scroll", changeStyle);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", hoverEffect);
      document.removeEventListener("mouseout", hoverEffect);
      document.removeEventListener("scroll", changeStyle);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 md:block hidden"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovering ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        position: "fixed",
        transform: "translate(-50%, -50%)",
        ...cursorStyle,
      }}
    />
  );
};

export default CustomCursor;
