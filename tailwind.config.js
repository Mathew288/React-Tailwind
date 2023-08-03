/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'shamrock': {
          '50': '#edfcf6',
          '100': '#d3f8e7',
          '200': '#aceed4',
          '300': '#75e0bd',
          '400': '#34bc93',
          '500': '#1aaf87',
          '600': '#0e8d6e',
          '700': '#0b715a',
          '800': '#0b5a49',
          '900': '#0a4a3d',
          '950': '#052923',
      },      
        
      }
    },
  },
  plugins: [],
}