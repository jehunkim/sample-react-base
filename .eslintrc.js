const path = require('path');

module.exports = {
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': {
      node: { paths: [path.resolve('./src')] },
    },
  },
  rules: {
    'camelcase': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'arrow-parens': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': 'off',
    'react/no-unused-state': 'off',
    'eol-last': 'off',
    'object-curly-newline': 'off',
  },
};
