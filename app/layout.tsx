"use client";

import { useEffect } from "react";
import { useThemeStore } from "./utils/themeStore";
import "./globals.css";
import CustomCursor from "./components/customcursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === "glass") {
      document.body.classList.add("theme-glass");
      document.body.classList.remove("theme-tactile");
    } else {
      document.body.classList.add("theme-tactile");
      document.body.classList.remove("theme-glass");
    }
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <title>Ais Farhan | UI/UX Designer & Frontend Developer</title>
        <meta name="description" content="Ais Farhan's portfolio showcasing UI/UX design systems, front-end architecture, and custom AI integrations." />
        <link rel="icon" href="/assets/favicon.svg" />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

