/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sans: ["var(--font-sans)"],
      heading: ["var(--font-heading)"],
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        stroke: "#EEEEEE",
        strokedark: "#2D2F40",
        hoverdark: "#252A42",
        titlebg: "#ADFFF8",
        titlebg2: "#FFEAC2",
        titlebgdark: "#46495A",
        btndark: "#292E45",
        white: "#FFFFFF",
        black: "#181C31",
        blackho: "#2C3149",
        blacksection: "#1C2136",
        primary: "#006BFF",
        primaryho: "#0063EC",
        meta: "#20C5A8",
        waterloo: "#757693",
        manatee: "#999AA1",
        alabaster: "#FBFBFB",
        zumthor: "#EDF5FF",
        socialicon: "#D1D8E0",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        metatitle: ["12px", "20px"],
        sectiontitle: ["14px", "22px"],
        regular: ["16px", "26px"],
        metatitle3: ["18px", "26px"],
        metatitle2: ["20px", "32px"],
        para2: ["22px", "35px"],
        itemtitle: ["26px", "32px"],
        itemtitle2: ["24px", "32px"],
        hero: ["44px", "58px"],
        sectiontitle3: ["44px", "55px"],
        sectiontitle2: ["40px", "52px"],
        sectiontitle4: ["34px", "48px"],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16: "4rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        25: "6.25rem",
        27: "6.75rem",
        27.5: "6.875rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        32.5: "8.125rem",
        35: "8.75rem",
        37.5: "9.375rem",
        40: "10rem",
        42.5: "10.625rem",
        45: "11.25rem",
        46: "11.5rem",
        47.5: "11.875rem",
        50: "12.5rem",
        55: "13.75rem",
        60: "15rem",
        65: "16.25rem",
        67: "16.75rem",
        67.5: "16.875rem",
        90: "22.5rem",
      },
      maxWidth: {
        "c-1390": "86.875rem",
        "c-1315": "82.188rem",
        "c-1280": "80rem",
        "c-1235": "77.188rem",
        "c-1154": "72.125rem",
        "c-1016": "63.5rem",
      },
      zIndex: {
        99999: "99999",
        999: "999",
        1: "1",
      },
      opacity: {
        65: ".65",
      },
      transitionProperty: { width: "width" },
      boxShadow: {
        "solid-l": "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
        "solid-2": "0px 2px 10px rgba(122, 135, 167, 0.05)",
        "solid-3": "0px 6px 90px rgba(8, 14, 40, 0.04)",
        "solid-4": "0px 6px 90px rgba(8, 14, 40, 0.1)",
        "solid-5": "0px 8px 24px rgba(45, 74, 170, 0.08)",
        "solid-6": "0px 8px 24px rgba(10, 16, 35, 0.08)",
        "solid-7": "0px 30px 50px rgba(45, 74, 170, 0.1)",
        "solid-8": "0px 12px 120px rgba(45, 74, 170, 0.06)",
        "solid-9": "0px 12px 30px rgba(45, 74, 170, 0.06)",
        "solid-10": "0px 8px 30px rgba(45, 74, 170, 0.06)",
        "solid-11": "0px 6px 20px rgba(45, 74, 170, 0.05)",
        "solid-12": "0px 2px 10px rgba(0, 0, 0, 0.05)",
        "solid-13": "0px 2px 19px rgba(0, 0, 0, 0.05)",
        primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
      },
      keyframes: {
        line: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "image-rotate": {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(0.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
        "image-glow": {
          "0%": {
            opacity: 0,
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "10%": {
            opacity: 1,
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "100%": {
            opacity: 0.2,
          },
        },
      },
      animation: {
        line1: "line 3s linear infinite",
        line2: "line 6s linear infinite",
        line3: "line 9s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "image-rotate": "image-rotate 1400ms ease forwards",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, rgb(34, 105, 229), rgb(128, 215, 255))",
        "primary-gradient-2":
          "linear-gradient(120deg, #6836c9, #e6a9fa 100%, #eed4f4 100%, #ff99d7)",
        // "secondary-gradient":
        //   "linear-gradient(to right, rgb(34, 105, 229), rgb(128, 215, 255))",
        "secondary-gradient":
          "linear-gradient(to right, rgb(189, 159, 103), rgb(189, 159, 103))",
        // "secondary-gradient-2":
        //   "linear-gradient(to right, rgb(34, 105, 229), rgb(128, 215, 255))",
        "secondary-gradient-2":
          "linear-gradient(to right, rgb(189, 159, 103), rgb(189, 159, 103))",
        "secondary-gradient-3":
          "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
        "secondary-gradient-4":
          "linear-gradient(to bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
        "heading-gradient":
          "background: linear-gradient(229.1deg, #313ED0 -35.29%, #232971 30.74%, #0E113A 56.42%)",
        "landing-gradient":
          "radial-gradient(circle, rgba(2, 0, 36, 0) 0, hsl(var(--background)) 100%)",
        "landing-gradient-2":
          "radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, #6836c9 0deg, #a770e2 67.5deg, #e6a9fa 198.75deg, #6836c9 251.25deg, #eed4f4 301.88deg, #ff99d7 360deg)",
      },
    },
  },
  plugins: [],
};
