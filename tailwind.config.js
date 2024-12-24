/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mesh-gradient": "url('/src/assets/Meshgradient.svg')",
      },
      fontFamily: {
        'neue-bit': ['PPNeueBit-Bold', 'sans-serif'],
      },
      colors :{
        background:{
          'gray' : "rgb(236,238,242)"
        }
      },
      fontSize: {
        h1: ["36px", { lineHeight: "54px" }],
        h2: ["24px", { lineHeight: "36px" }],
        h3: ["20px", { lineHeight: "150%" }],
        body: ["16px", { lineHeight: "150%" }],
        "ultra-90":["90px" ,{lineHeight : "70%"}],
        "ultra-150":["150px", { lineHeight: "70%" }],
        "display-d2": ["42px", { lineHeight: "110%" }],
        "small-p": ["12px", { lineHeight: "150%" }],
        "large-p": ["14px", { lineHeight: "20.3px" }],
      },
    },
  },
  plugins: [],
}