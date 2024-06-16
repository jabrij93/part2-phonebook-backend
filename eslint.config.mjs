import globals from 'globals';
import stylisticJsPlugin from '@stylistic/eslint-plugin-js';

// Manually specify recommended rules (a simplified example)
const recommendedRules = {
  // Add other recommended rules here
  'no-unused-vars': 'error',
  'no-undef': 'error',
  'eqeqeq': 'error',
  'no-trailing-spaces': 'error',
  'object-curly-spacing': ['error', 'always'],
  'arrow-spacing': ['error', { 'before': true, 'after': true }],
  'no-console': 0
};

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      '@stylistic/js': stylisticJsPlugin,
    },
    rules: {
      ...recommendedRules,
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
    },
  },
];
