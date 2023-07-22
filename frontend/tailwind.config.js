/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        height: {
            '1/12': '8.333333333333333%',
            '11/12': '91.66666666666667%',
        }
    },
  },
  plugins: [],
}

