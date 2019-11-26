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
    // "camelcase": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": ["error", { "aegsIgnorePattern": "next" }]
  },
  env: {
    "jest": true
  }
};