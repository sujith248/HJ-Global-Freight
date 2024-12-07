import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C21111',  // Brand primary (Red)
          hover: '#F11818',    // Hover state of brand color
          light: '#FFEBEB',    // A lighter tint for subtle backgrounds or highlights
          dark: '#9E0F0F',     // A darker shade for accents, borders, or hover states
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
          light: '#F9FAFB',    // For sections, modals, and panels
          dark: '#111827',     // For dark-mode background
        },

        text: {
          DEFAULT: '#111827',  // Primary text color (dark grey for good legibility)
          heading: '#1F2937',  // Slightly lighter for headings
          muted: '#6B7280',    // Muted text for less important info
          inverse: '#FFFFFF',  // Text on dark backgrounds
        },

        accent: {
          DEFAULT: '#FF6F00', // A bold, warm accent color for CTAs (orange/golden hue)
          hover: '#FF8B1F',
        },

        success: '#16A34A', // Green (indicates success or completed steps)
        warning: '#F59E0B', // Amber (alerts and warnings)
        error: '#DC2626',   // Red (error states, form validations)

        info: '#3B82F6',    // Blue (informational alerts, hints)
        highlight: '#FDE68A'// Soft yellow highlight for emphasis
      },
    },
  },
  plugins: [],
};

export default config;
