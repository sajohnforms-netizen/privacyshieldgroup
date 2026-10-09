import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0b1a30',
          deep: '#050c18',
          mid: '#122240',
          soft: '#1a2d4e',
        },
        gold: {
          DEFAULT: '#c4a265',
          light: '#d6bb88',
          pale: '#e8dbc0',
          dark: '#a68740',
        },
        cream: '#f6f3ee',
        'off-white': '#fbfaf8',
        'warm-gray': '#f0ede7',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', ...defaultTheme.fontFamily.serif],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: '1100px',
      },
      boxShadow: {
        subtle: '0 2px 12px rgba(6,13,26,0.04)',
        soft: '0 4px 24px rgba(6,13,26,0.06)',
        lift: '0 12px 40px rgba(6,13,26,0.08)',
        gold: '0 8px 36px rgba(196,162,101,0.14)',
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '20px',
      },
    },
  },
  plugins: [],
};
