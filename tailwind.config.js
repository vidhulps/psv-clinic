/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50:'#eff8ff', 100:'#dbeffe', 200:'#b9e0fd', 300:'#7cc8fb', 400:'#38adf5', 500:'#0e93e0', 600:'#0274be', 700:'#035d9a', 800:'#074f7f', 900:'#0b4269' },
        cyan: { 50:'#ecfeff', 100:'#cffafe', 400:'#22d3ee', 500:'#06b6d4', 600:'#0891b2' },
        medical: { light:'#f0f9ff', mid:'#e0f2fe', dark:'#0369a1' }
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-20px)' } },
        fadeUp: { from:{ opacity:0, transform:'translateY(30px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        slideIn: { from:{ opacity:0, transform:'translateX(-20px)' }, to:{ opacity:1, transform:'translateX(0)' } },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'glass': '0 8px 32px rgba(14,147,224,0.12)',
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'hover': '0 16px 48px rgba(14,147,224,0.2)',
      }
    },
  },
  plugins: [],
}
