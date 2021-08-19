const { peerDependencies } = require('./package.json');

module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'standard-react', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['prettier', 'sort-keys-fix'],
  rules: {
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': ['error', { ignore: Object.keys(peerDependencies) }],
    'no-console': 'off',
    'no-process-exit': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'object-shorthand': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: true, natural: false }],
  },
  settings: {
    react: {
      version: '^17.0.2',
    },
  },
};
