const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000000",
      white: {
        DEFAULT: "#F8F9FA",
        100: "#F8F9FA",
        200: "#DEE2E6",
        300: "#ADB5BD",
        400: "#868E96",
      },
      cyan: {
        DEFAULT: "#3bc9db",
        200: "#99e9f2",
        300: "#66d9e8",
        400: "#3bc9db",
      },
      blue: {
        DEFAULT: "#4DABF7",
        200: "#A5D8FF",
        300: "#74C0FC",
        400: "#4DABF7",
      },
      pink: {
        DEFAULT: "#F783AC",
        200: "#FCC2D7",
        300: "#FAA2C1",
        400: "#F783AC",
      },
      teal: {
        DEFAULT: "#38D9A9",
        200: "#96F2D7",
        300: "#63E6BE",
        400: "#38D9A9",
      },
      green: {
        DEFAULT: "#66BB6A",
        200: "#A5D6A7",
        300: "#81C784",
        400: "#66BB6A",
      },
      red: {
        DEFAULT: "#FF8787",
        200: "#FFC9C9",
        300: "#FFA8A8",
        400: "#FF8787",
      },
      orange: {
        DEFAULT: "#FFA94D",
        200: "#FFD8A8",
        300: "#FFC078",
        400: "#FFA94D",
      },
      yellow: {
        DEFAULT: "#FFCA28",
        200: "#FFE082",
        300: "#FFD54F",
        400: "#FFCA28",
      },
      gray: {
        DEFAULT: "#2F3134",
        100: "#48494B",
        200: "#38393B",
        300: "#34363A",
        400: "#2F3134",
        500: "#2A2B2E",
        600: "#242629",
        700: "#1F2023",
        800: "#1A1B1D",
        900: "#151617",
      },
    },
    fontFamily: {
      sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      display: ["'Monument Extended'", ...defaultTheme.fontFamily.sans],
    },
    fill: {
      current: "currentColor",
      transparent: "transparent",
    },
    stroke: {
      current: "currentColor",
      transparent: "transparent",
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        "2xs": "16.5rem",
      },
      boxShadow: {
        DEFAULT: "0px 1px 4px 0px rgba(0,0,0,0.4)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
