import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
   
        'bg-img-1': "url('/img-1.png')",
      },
      
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    
    },
  },
 
  plugins: [],
}
export default config
