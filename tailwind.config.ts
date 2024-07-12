import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2559px',
        'laptop': '1025px',
        'tablet': '768px',
        'mobile': '576px'
      },
      colors: {
        // Brand colors, use for primary cta's and other brand identity points
        primary: '#F00003',
        primaryHover: '#CC0002',
        primaryPressed: '#990002',
        // Functional colors, blacks, greys etc. 
        black: '#1E1E1E',
        gray1: '#3B3B3B',
        gray2: '#575757',
        gray3: '#737373',
        gray4: '#8F8F8F',
        gray5: '#ABABAB',
        gray6: '#C7C7C7',
        gray7: '#E1E1E1',
        surface: '#F7F7F7',
        white: '#FAFAFA',
        // Semantic colors, differentiate between warning success etc.
        warning: '#FFAD31',
        warningBackground: '#FFEBCC'
      },
      spacing: {
        s: '0.25rem',
        m: '0.5rem',
        ml: '0.75rem',
        base: '1rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '3rem'
      },
      lineHeight: {
        paragraph: '1.5'
      },
      fontSize: {
        base: '1rem',
        h1: '1.75rem',
        h2: '1.5rem',
        h3: '1.25rem',
        s: '0.875rem',
        xs: '0.75rem'
      },
      boxShadow: {
        'main': '0 32px 64px rgba(240,0,3,0.03), 0 16px 32px rgba(240,0,3,0.03), 0 8px 16px rgba(240,0,3,0.03), 0 4px 8px rgba(240,0,3,0.03), 0 2px 4px rgba(240,0,3,0.03)',
        'right': '16px 0 16px rgba(240,0,3,0.03), 4px 0 4px rgba(240,0,3,0.03), 1px 0 1px rgba(240,0,3,0.03) ',
        'bottom': '0 16px 16px rgba(240,0,3,0.03), 0 4px 4px rgba(240,0,3,0.03), 0 1px 1px rgba(240,0,3,0.03)',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
        light: '300'
      },
      borderRadius: {
        'base': '1rem',
        's': '0.25rem'
      }
    },
  },
  plugins: [],
};
export default config;
