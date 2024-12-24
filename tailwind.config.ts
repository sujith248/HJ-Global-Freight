import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        lg1050: '1050px',
      },
      colors: {
        brand: {
          DEFAULT: '#C21111',  
          hover: '#F11818',    
          light: '#FFEBEB',    
          dark: '#9E0F0F',     
        },

        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },

        background: {
          DEFAULT: '#FFFFFF',
          light: '#F9FAFB',   
          dark: '#111827',     
        },

        text: {
          DEFAULT: '#111827', 
          heading: '#1F2937', 
          muted: '#6B7280', 
          inverse: '#FFFFFF',  
        },

        accent: {
          DEFAULT: '#FF6F00', 
          hover: '#FF8B1F',
        },

        success: '#16A34A', 
        warning: '#F59E0B', 
        error: '#DC2626',  

        info: '#3B82F6',   
        highlight: '#FDE68A'
      },
    },
  },
  plugins: [],
};

export default config;
