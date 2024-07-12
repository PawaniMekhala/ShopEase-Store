/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        // primary: "#fea928",
        // secondary: "#ed8900",
        // primary: "#a55eea",
        // secondary: "#8854d0",
        primary: "#b148d2",
        secondary: "#9614d0",
        
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

