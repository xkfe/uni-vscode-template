import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest';
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages';
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 带ts类型的manifest.json，编译后会同步到manifest.json https://github.com/uni-helper/vite-plugin-uni-manifest
    UniHelperManifest(),
    // 带ts类型的pages.json，编译后会同步到pages.json https://github.com/uni-helper/vite-plugin-uni-pages
    UniHelperPages(),
    // 继承自unplugin-auto-import/vite，更好的uni和uni-ui组件类型支持 https://github.com/uni-helper/vite-plugin-uni-components
    UniHelperComponents({
      dts: './typings/components.d.ts',
      directoryAsNamespace: true,
    }),
    uni(),
    // 配置自动导入 vue相关函数, uni-app相关函数。ref, reactive，onLoad等
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: './typings/auto-imports.d.ts',
    }),
  ],
});
