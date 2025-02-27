/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,cjs,mjs,ts,jsx,tsx}', // Scans frontend files
    './public/**/*.html', // For public static HTML
    './views/**/*.{ejs,hbs,njk,pug}', // Server-rendered templates
    './components/**/*.{vue,svelte}', // Vue & Svelte support
    './templates/**/*.{php,html}', // PHP templates, etc.
  ],
  theme: {
    extend: {
      // Add customizations here if needed
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};
