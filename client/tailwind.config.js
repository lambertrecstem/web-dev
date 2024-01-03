export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      "size-200": "200% 200%",
    },
    backgroundPosition: {
      "pos-0": "0% 0%",
      "pos-100": "100% 100%",
    },
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        "inner-deep": "inset 0 0 5px 2px rgba(0, 0, 0, 0.05)",
      },
      rotate: {
        360: "360deg",
      },
      fontFamily: {
        primary: ["Product Sans", "sans-serif"],
        primarySub: ["Open Sans", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#141414",
        secondary: "#FFFFFF",
        redAccent: "#871525",
        greyAccent: "#868686",
        greenAccent: "#42f548",
        yellowAccent: "#a8a832",
        orangeAccent: "#f5a442",
        blueAccent: "#4248f5",
        buttonRedGradientTo: "#e52d27",
        buttonRedGradientFrom: "#b31217",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
