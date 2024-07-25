/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/chatwindow.jsx",
    "./src/components/portfolio/portfolio.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        heading1 : ['Merriweather Sans', 'sans-serif'],
        heading2 : ['Merriweather', 'sans-serif'],
        heading3 : ['Poppins', 'sans-serif'],
        heading5 : ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#04467B', // Example custom color
        ai: '#F9FCED', // Another example custom color
        user: '#F9FCED', // A custom gray color
        offwhite: '#F6F6E7', // A custom gray color
        explore: '#63a6ee', // A custom gray color
      },
      spacing: {
        '18': '4.5rem', // Add custom spacing value for top-18
        '17': '4.2rem', // Add custom spacing value for top-18
      },
      borderWidth: {
        '1': '1px', // Custom border width for border-t-1
      },
      height: {
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '77%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
    },
  },
  plugins: [],
}

