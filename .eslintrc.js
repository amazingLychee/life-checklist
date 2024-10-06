module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 自定义规则
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // 关闭此规则
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true, // 如果你的项目也在浏览器中运行，请保留这个
    node: true, // 启用 Node.js 全局变量
    es2021: true, // 启用 ES2021 语法
  },
};
