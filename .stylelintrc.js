module.exports = {
  // Umi 项目
  extends: require.resolve('umi/stylelint'),
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
