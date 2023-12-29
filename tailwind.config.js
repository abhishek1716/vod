/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "san-serif"],
    },
    extend: {
      colors: {
        "primary-base": "#a6f5ff",
        "primary-light": "#c8f9ff",
        "primary-regular": "#00bdd6",
        "primary-dark": "#006d7c",
        "secondary-dark": "#ed7d2d",
        "gray-base": "#bcc1ca",
        "gray-light": "#f3f4f6",
        "gray-dark": "#9095a0",
        "t-black-base": "#6e7787",
        "t-black-light": "#565e6c",
        "t-black-dark": "#323842",
        "t-black-dark2": "#424955",
        "t-black-regular": "#171a1f",
      },

      width: {
        card: "38rem",
      },
      borderRadius: {
        large: "24px",
      },
    },
  },
  plugins: [],
};
