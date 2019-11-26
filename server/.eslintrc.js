module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": 0,
    "no-console": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "import/order": ["error", {"newlines-between": "always-and-inside-groups"}],
    "import/no-unresolved": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
  env: {
    "jest": true
  }
};