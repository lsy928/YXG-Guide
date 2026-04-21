/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yuzu: '#FFD700',
        fresh: '#34D399',
        text: '#2D3748',
        softgray: '#F7FAFC'
      },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};
