module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@rideyego/eslint-config',
  ],
  plugins: [
    'react-native',
  ],
  ignorePatterns: ['**/__mocks__/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: [
        'react-native',
      ],
    },
  ],
};
