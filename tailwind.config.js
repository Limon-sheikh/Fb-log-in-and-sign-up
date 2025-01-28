
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['SFProDisplay-Regular', 'Helvetica', 'Arial', 'sans-serif'],  // লোকাল ফন্টের জন্য
      },
    },
  },
  plugins: [],
}
