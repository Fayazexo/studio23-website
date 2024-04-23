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
        slate_gray: "#1b222c",
        fiery_black: "#12151c",
        crimson_red: "#661b1c",
        brick_red: "#531516",
        studio_blue: "#0097CB",
        footer_black: "#070707",
      },
    },
  },
  plugins: [],
};
