/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals', // Next.js defaults
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:prettier/recommended', // For Prettier integration
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // 🧹 General cleanup
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // ✅ Allow require() (for Prisma WASM, etc.)
    '@typescript-eslint/no-require-imports': 'off',

    // ✅ Allow short-circuit expressions (like a && b)
    '@typescript-eslint/no-unused-expressions': 'off',

    // ⚙️ Optional: Relax some stylistic rules
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',

    // 💡 Allow console logs during development
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
