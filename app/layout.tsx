import { Lexend_Exa, Castoro_Titling } from "next/font/google";
import "./globals.css";

const lexendExa = Lexend_Exa({ subsets: ["latin"], weight: "400" });
const castoroTitling = Castoro_Titling({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lexendExa.className} ${castoroTitling.className}`}>
        {children}
      </body>
    </html>
  );
}
