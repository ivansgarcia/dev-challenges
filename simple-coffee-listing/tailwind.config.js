/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#111315',
      'dark-grey': '#1B1D1F',
      'grey': '#6F757C',
      'lime': '#BEE3CC',
      'cream': '#FEF7EE',
      'yellow': '#F6C768',
      'orange': '#ED735D',
    },
    extend: {
      animation: {
        'pulse-fast': 'pulse 1s linear infinite',
      }
    },
  },
  plugins: [],
};
