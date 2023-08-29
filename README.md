# uni-vscode-template

[![npm](https://img.shields.io/npm/v/@xkfe/uni-vscode-template?color=444&label=)](https://www.npmjs.com/package/@xkfe/uni-vscode-template) <a href="https://juejin.cn/post/7270830083740450816"><img src="https://img.shields.io/badge/juejin-小凯同学-blue" alt="juejin"></a>



一套基于`uniapp+uni-ui+vite+ts+unocss`的`vscode`快速开发模版，助你高效开发`h5、小程序、app`应用。

## Features (特性)

- [x] ⚡️集成 [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/) 就是快！
- [x] 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- [x] 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- [x] 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) - 保证代码质量

- [ ] 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- [ ] 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

## Pro-VScode-Plugin (推荐插件)

- 可以为`pages.json`、`manifest.json`等提供**语法提示**和**校验工作**。**[uni-app-schemas](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-schemas-vscode)**
- uni-app 基本能力代码片段。**[uni-app-snippets](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-snippets-vscode)**
- 一键创建页面、组件、分包，个人用不习惯。**[uni-create-view](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view)**


## Usage (使用)

### Pull

```bash
npx degit uni-vscode-template my-uni-app
cd my-uni-app
```

### Install

```bash
pnpm install
yarn install
npm install
```



### Development

```bash
# 运行到 h5   
npm run dev:h5  
# 运行到 app   
npm run dev:app  
# 运行到 微信小程序  
npm run dev:mp-weixin  
```

### Build

```bash
# 打包到 h5   
npm run build:h5  
# 打包到 app   
npm run build:app  
# 打包到 微信小程序  
npm run build:mp-weixin  
```


### More
- 查看文章👉<a href="https://juejin.cn/post/7270830083740450816"><img src="https://img.shields.io/badge/juejin-小凯同学-blue" alt="juejin"></a>
- 参考 uni-app 官方文档： [运行、发布 uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#运行、发布uni-app)

## catalog (目录结构)

...



