import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // Disables ESLint rules that conflict with Prettier
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      // Enables Tailwind CSS recommended rules
      ...tailwindcss.configs.recommended.rules,
    },
    settings: {
      tailwindcss: {
        // Tailwind-specific settings (optional)
        officialSorting: true, // Enforce Tailwind's class sorting
        whitelist: [],         // Add custom class names if using dynamic ones
      },
    },
  },
];