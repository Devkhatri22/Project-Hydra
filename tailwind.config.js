/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      backgroundImage: {
        purpleBgGradient: "radial-gradient(circle, #3a3456, #211e2e)",
        bgimage: "url(/graphics/hardware.png)"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue: {
          951: '#302C42'
        },
        violet: {
          951: '#8176AF'
        },
        purple: {
          951: '#C0B7E8'
        },
        darkpurple: '#343045',
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "info": "#C0B7E8",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}