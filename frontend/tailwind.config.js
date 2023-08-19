/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        height: {
            '1/12': '8.333333333333333%',
            '11/12': '91.66666666666667%',
        },
        animationDuration:{
            '50000':'50s',
            '30000':'30s',
            '40000':'40s',
            '70000':'70s',
            '100000':'100s',
            '25000':'25s',
        },
        animationDelay:{
            '-25000':'-25s',
            '-7500':'-7.5s',
            '-80000':'-80s',
            '-70000':'-70s',
            '-10000':'-10s',
            '-40000':'-40s',
        },
        keyframes: {
            rideLeft: {
              '0%': { left: '0px',opacity:'0' },
              '2%':{opacity:'1'},
              '100%':{ left: '650px',opacity:'0'},
            },
            rideRight: {
                '0%': { left: '650px',opacity:'0' },
                '2%':{opacity:'1'},
                '100%':{ left: '0px',opacity:'0'},
            },
            fadeOut: {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
            },
        },
        animation: {
            rideLeft: 'rideLeft 0s ease-in-out infinite',
            rideRight: 'rideRight 0s ease-in-out infinite',
            fade: 'fadeOut 0s ease-in-out'
        }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

