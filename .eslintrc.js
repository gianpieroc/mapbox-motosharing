module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@rideyego/eslint-config',
    'plugin:react/jsx-runtime',
    // '@react-native',
  ],
  plugins: ['react-native'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
  overrides: [
    {
      files: ['tests/**'],
      plugins: ['jest'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: ['plugin:jest/all'],
      settings: {
        jest: {
          // eslint-disable-next-line global-require
          version: require('jest/package.json').version,
        },
      },
      rules: {
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', 'waitFor'],
            additionalTestBlockFunctions: [],
          },
        ],
        'jest/no-hooks': [
          'error',
          {
            allow: ['afterEach', 'afterAll', 'beforeEach', 'beforeAll'],
          },
        ],
        'jest/prefer-expect-assertions': 'off',
      },
    },
    {
      /**
       * Disable some rules for tests that are disabled.
       * (eg: templates, examples, incoming tests, fixings...).
       */
      files: ['tests/**/*.disabled.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'jest/expect-expect': 'off',
        'jest/no-commented-out-tests': 'off',
        'jest/no-disabled-tests': 'off',
        'max-len': 'off',
      },
    },
  ],
};
