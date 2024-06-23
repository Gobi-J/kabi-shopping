/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors:{
            'primary': '#088178',
            'black':'#2e2e2e',
            'grey':'#e3e6e3',
        }
    },
  },
  plugins: [],
};
