import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// 引入自动导入插件
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 配置自动导入 vue相关函数, uni-app相关函数。ref, reactive，onLoad等
    AutoImport({
      imports: ['vue','uni-app'],
      dts: './typings/auto-imports.d.ts',
    }),
  ],
});
