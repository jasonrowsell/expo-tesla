module.exports = {
  preset: 'jest-expo',

  collectCoverage: true,

  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!*.{js,jsx,ts,tsx}',
    '!**/index.{js,jsx,ts,tsx}',
  ],

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],

  coverageReporters: [
    'html',
    'text',
  ],

  transform: { '^.+\\.(js|jsx)$': 'babel-jest' },

  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
