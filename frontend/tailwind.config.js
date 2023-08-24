/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist:[
    {
        pattern: /bg-(emeraldgreen|sunshine|bluehorizon|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
        pattern: /text-(emeraldgreen|sunshine|bluehorizon|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
        pattern: /border-(emeraldgreen|sunshine|bluehorizon|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
        pattern: /outline-(emeraldgreen|sunshine|bluehorizon|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
        pattern: /accent-(emeraldgreen|sunshine|bluehorizon|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
        pattern: /from-(emeraldgreen|sunshine|bluehorizon|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
  ],
  theme: {
    extend: {
        colors:{
            emeraldgreen:{
                50: '#ecfdf5',
                100:'#d1fae5',
                200:'#a7f3d0',
                300:'#6ee7b7',
                400:'#34d399',
                500:'#10b981',
                600:'#059669',
                700:'#047857',
                800:'#065f46',
                900:'#064e3b',
                950:'#022c22',
            },
            sunshine:{
                50: '#f7fee7',
                100:'#ecfccb',
                200:'#fef08a',
                300:'#fde047',
                400:'#facc15',
                500:'#f59e0b',
                600:'#d97706',
                700:'#b45309',
                800:'#9a3412',
                900:'#7c2d12',
                950:'#431407',
            },
            bluehorizon:{
                50: '#ecfeff',
                100:'#cffafe',
                200:'#bae6fd',
                300:'#7dd3fc',
                400:'#38bdf8',
                500:'#0ea5e9',
                600:'#2563eb',
                700:'#1d4ed8',
                800:'#1e40af',
                900:'#312e81',
                950:'#1e1b4b',
            },
        },
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

