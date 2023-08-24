module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // https://github.com/antfu/eslint-config
  extends: '@antfu',
  rules: {
    // your custom rules...
    'vue/html-self-closing': ['error', {
      html: { normal: 'never', void: 'always' },
    }],
    'no-console': 'off', // 禁用对 console 的报错检查
    // "@typescript-eslint/quotes": ["error", "double"], // 强制使用双引号
    '@typescript-eslint/semi': ['error', 'always'], // 强制使用行位分号
  },
};
