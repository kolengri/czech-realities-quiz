module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],
    'block-no-empty': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
  },
};
