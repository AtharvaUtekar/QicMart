/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headingColor: "#2e2e2e",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        textColor: "#515151",
        cardOverlay: "rgba(255,255,255,0.4)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },

  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
