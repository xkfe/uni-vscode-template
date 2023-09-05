module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // https://github.com/antfu/eslint-config
  extends: ['@antfu', '@unocss'],
  rules: {
    // your custom rules...
    'vue/html-self-closing': ['error', {
      html: { normal: 'never', void: 'always' },
    }],
    'no-console': 'off', // 禁用对 console 的报错检查
    // "@typescript-eslint/quotes": ["error", "double"], // 强制使用双引号
    '@typescript-eslint/semi': ['error', 'always'], // 强制使用行位分号
    'curly': ['error', 'multi-line'], // 强制所有控制语句使用一致的括号风格
    'max-statements-per-line': 'off',
  },
};
