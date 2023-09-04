# uni-vscode-template

[uniapp]: https://img.shields.io/badge/-uniapp-35495e?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUrmTkalSwPkyUjlzOnzqvW59husnTR5NL///+EvIkfljDO49B8uIIAkBje7N816861AAAAR0lEQVR4AWPAAhiVGRiMBIAMkTAD5lRHIEO9cwHXjCIgQxvE2EQso+eS7gkwo2/37hcghnoHEIDMMZsJBMlABvMqIDBA2A0AmdQg4B1U1TIAAAAASUVORK5CYII=
[npm]:https://img.shields.io/npm/v/@xkfe/uni-vscode-template?color=444&label=&logo=npm
[vue3]: https://img.shields.io/badge/-3-35495e?logo=vue.js
[vite]: https://img.shields.io/badge/-Vite-646CFF
[unocss]: https://img.shields.io/badge/-UnoCSS-ff0080?logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VW5vQ1NTPC90aXRsZT48cGF0aCBkPSJNMTIuODYwMiAxOC4zOTkxYzAtMy4wNzYxIDIuNDkzOC01LjU2OTkgNS41Njk5LTUuNTY5OVMyNCAxNS4zMjMgMjQgMTguMzk5MWMwIDMuMDc2Mi0yLjQ5MzggNS41Njk5LTUuNTY5OSA1LjU2OTlzLTUuNTY5OS0yLjQ5MzctNS41Njk5LTUuNTY5OVpNMTIuODYwMiA1LjYwMDljMC0zLjA3NjIgMi40OTM4LTUuNTcgNS41Njk5LTUuNTdTMjQgMi41MjQ4IDI0IDUuNjAxdjUuMDEyOWEuNTU3LjU1NyAwIDAgMS0uNTU3LjU1NjlIMTMuNDE3MmEuNTU3LjU1NyAwIDAgMS0uNTU3LS41NTY5di01LjAxM1pNMTEuMTM5OCAxOC4zOTkxYzAgMy4wNzYyLTIuNDkzNyA1LjU2OTktNS41Njk5IDUuNTY5OUMyLjQ5MzcgMjMuOTY5IDAgMjEuNDc1MyAwIDE4LjM5OTF2LTUuMDEyOWEuNTU3LjU1NyAwIDAgMSAuNTU3LS41NTdoMTAuMDI1OGEuNTU3LjU1NyAwIDAgMSAuNTU3LjU1N3Y1LjAxMjlaIi8+PC9zdmc+
[vscode]: https://img.shields.io/badge/-VSCode-3c7fba?logo=visual-studio-code
[typescript]: https://img.shields.io/npm/types/typescript
[xkfe]: https://img.shields.io/badge/juejin-小凯同学-blue


[![xkfe]](https://juejin.cn/post/7270830083740450816) [![npm]](https://www.npmjs.com/package/@xkfe/uni-vscode-template) ![uniapp] ![vue3] ![vite] ![unocss] ![vscode] ![typescript]



一套基于`uniapp+uni-ui+vite+ts+unocss`的`vscode`快速开发模版，助你高效开发`h5、小程序、app`应用。

## Features (特性)

- [x] ⚡️集成 [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/) 就是快！
- [x] 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- [x] 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- [x] 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) - 保证代码质量
- [x] 🚀 [网络请求集成](https://github.com/uni-helper/uni-network)

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

## catalog (目录结构)

...



