/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      dropShadow: {
        'pink': ['0 5px 8px rgba(244, 114, 182, 0.40)',
                  '0 2px 3px rgba(244, 114, 182, 0.1)']
      },
      screens: {
        'mobile': '375px',
        'xs': '600px',
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
    require('preline/plugin'),
    require("tailwind-gradient-mask-image")
  ],
}
