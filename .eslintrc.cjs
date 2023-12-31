module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['eslint:recommended'],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2023,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'no-useless-catch': 'off',
  },
}
