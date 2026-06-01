import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3A5C',
        secondary: '#8B5E3C',
        accent: '#C4914F',
        cream: '#FAF6F1',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
