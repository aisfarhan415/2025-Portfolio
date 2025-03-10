"use client";

import "./globals.css";
import CustomCursor from "./components/customcursor";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (isMobile) {
      alert(
        "It is recommended to open this project on a laptop/PC for the best experience."
      );
    }
  }, [isMobile]);

  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
