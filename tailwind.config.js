/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "glass-bg": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      borderRadius: {
        glass: "10px",
      },
      boxShadow: {
        glass: "0 4px 6px 0 rgba(31, 38, 135, 0.37)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#d33d6f",
          secondary: "#eac14f",
          tertiary:"#3c5979",
          accent: "#ac99e8",
          neutral: "#1d242b",
          "base-100": "#f7f6f8",
          info: "#7dcdf7",
          success: "#1b986e",
          warning: "#eabb39",
          error: "#e54b48",
          body: {
            // "background-color": "#3c5979",
            "padding-top": "1rem",
          },
        },
      },
    ],
    components: {
      glass: {
        "": {
          "@apply bg-glass-bg border-glass-border rounded-glass backdrop-glass shadow-glass":
            {},
        },
      },
    },
  },
};
