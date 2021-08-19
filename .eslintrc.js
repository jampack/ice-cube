const { peerDependencies } = require('./package.json');

module.exports = {
  extends: ['airbnb', 'prettier', 'standard-react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  settings: {
    react: {
      version: '^17.0.2',
    },
  },
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': ['error', { ignore: Object.keys(peerDependencies) }],
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
