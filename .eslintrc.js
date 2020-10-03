module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['jest.config.js'],
  rules: {
    'no-console': 'off',
  },
};
