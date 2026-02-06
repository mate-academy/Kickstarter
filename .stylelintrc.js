module.exports = {
  extends: '@mate-academy/stylelint-config',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: [
          'inside-block',
          'first-nested',
          'blockless-after-same-name-blockless',
        ],
        ignoreAtRules: ['@else'],
      },
    ],
  },
};
