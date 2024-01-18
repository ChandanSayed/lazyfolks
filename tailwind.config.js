/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'text-color': '#212121',
        'bg-color': '#252F524D',
        'border-color': '#E9EAEE',
        'button-color': '#0000ff',
        'button-disabled': '#9BB2FF'
      },
      height: {
        18: '18px'
      }
    }
  },
  plugins: []
};
