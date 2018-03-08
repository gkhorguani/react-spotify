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
  },
  globals: {
    document: true,
    window: true,
  },
};
