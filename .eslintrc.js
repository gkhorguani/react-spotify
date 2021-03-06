module.exports = {
  extends: 'airbnb',
  rules: {
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-buffer-constructor': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-debugger': 'off',
    'max-len': 'off',
    'import/first': 'off',
    'react/forbid-prop-types': 'off',
    'object-curly-newline': 'off',
  },
  globals: {
    document: true,
    window: true,
  },
};
