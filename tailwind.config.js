const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1929FE",
        white: "#FFFFFF",
        black: "#000000",
        background: "#FFFFFF",
      },
      fontFamily: {
        lexend: ["Lexend Exa", ...fontFamily.sans],
        castoro: ["Castoro Titling", ...fontFamily.serif],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
