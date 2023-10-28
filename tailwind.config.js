/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'typo-neutral-10': '#FFFFFF',
        'typo-neutral-20': '#F5F5F5',
        'typo-neutral-30': '#EDEDED',
        'typo-neutral-40': '#E0E0E0',
        'typo-neutral-50': '#C2C2C2',
        'typo-neutral-60': '#9E9E9E',
        'typo-neutral-70': '#757575',
        'typo-neutral-80': '#616161',
        'typo-neutral-90': '#424242',
        'typo-neutral-100': '#0A0A0A',

        'red-primary': '#F45050',
        'red-white-color': '#DFDFDE',
        'white-color': '#F0F0F0',
      },
      boxShadow: {
        1: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px -1px 2px 0px rgba(16, 24, 40, 0.06)',
        d1: '0px 1px 3px 0px rgba(239, 231, 215, 0.10), 0px -1px 2px 0px rgba(239, 231, 215, 0.06)',
        2: '0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
        6: '0px 0px 13px 0px rgba(13, 15, 19, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        d6: '0px 0px 13px 0px rgba(242, 240, 236, 0.10), 0px 2px 4px -2px rgba(239, 231, 215, 0.06)',
      },
    },
  },
  plugins: [],
};
