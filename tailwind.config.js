/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2C3639", // Rich dark gray
        secondary: "#3F4E4F", // Muted green-gray
        accent: "#A27B5C", // Warm brown
        neutral: "#DCD7C9", // Soft cream
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
