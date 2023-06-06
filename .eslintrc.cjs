module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    'dist/**/*',
    'node_modules/**/*'
  ],
  root: true,
  rules: {
    "@typescript-eslint/no-namespace": "off"
  },
  globals: {
    "chrome": "readonly"
  }
}
