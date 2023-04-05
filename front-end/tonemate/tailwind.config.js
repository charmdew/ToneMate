/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        nanum: ['GowunDodum-Regular', 'sans-serif'],
        sm: ['JSongMyung-Regular-KO', 'sans-serif'],
        alatsi: ['Alatsi', 'cursive'],
      },
      width: {
        140: '33.75rem',
      },
      height: {
        '3/7': '45%',
        '5/9': '55%',
      },
      animation: {
        fadein1: 'fadein 1s linear',
        fadein2: 'fadein 2s linear',
        fadein3: 'fadein 3s linear',
      },
      keyframes: {
        fadein: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // scroll
    require('tailwindcss-animation-delay'), // tailwindcss-animation-delay
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
