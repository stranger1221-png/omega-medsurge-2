import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#081B31",
          900: "#081B31",
          950: "#051120",
        },
        navy: {
          DEFAULT: "#102B49",
          900: "#0d223a",
          800: "#102B49",
          700: "#183e68",
          600: "#22538b",
        },
        royal: {
          DEFAULT: "#205FE5",
          hover: "#184ec0",
          light: "#3a73eb",
        },
        electric: {
          DEFAULT: "#3478F6",
          hover: "#2062de",
          light: "#5a93f8",
        },
        cyan: {
          DEFAULT: "#35C6DF",
          bright: "#67DCEB",
          dark: "#209bb0",
          glow: "rgba(53, 198, 223, 0.4)",
        },
        pale: {
          blue: "#EAF3FF",
          light: "#F0F6FF",
        },
        lightBg: "#F5F8FC",
        textPrimary: "#142940",
        textSecondary: "#687D91",
        borderLight: "#DCE6F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
        reference: "1440px",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(53, 198, 223, 0.25)",
        "glow-lg": "0 0 45px -5px rgba(52, 120, 246, 0.35)",
        "card-modern": "0 10px 30px -10px rgba(8, 27, 49, 0.08), 0 4px 12px -2px rgba(8, 27, 49, 0.04)",
        "card-elevated": "0 20px 40px -15px rgba(8, 27, 49, 0.12), 0 8px 16px -4px rgba(8, 27, 49, 0.06)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #081B31 0%, #102B49 60%, #173860 100%)",
        "cta-gradient": "linear-gradient(135deg, #081B31 0%, #102B49 50%, #1d406a 100%)",
        "card-glow": "linear-gradient(180deg, rgba(53, 198, 223, 0.08) 0%, rgba(52, 120, 246, 0.02) 100%)",
        "electric-gradient": "linear-gradient(135deg, #205FE5 0%, #3478F6 100%)",
        "cyan-gradient": "linear-gradient(135deg, #3478F6 0%, #35C6DF 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

