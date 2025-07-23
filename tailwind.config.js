/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // App Router
    './src/pages/**/*.{js,ts,jsx,tsx}',     // Pages Router
    './src/components/**/*.{js,ts,jsx,tsx}' // Components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#46C2DE',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
