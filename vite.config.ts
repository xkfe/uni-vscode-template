import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest';
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages';
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import { wrapperEnv } from './build/getEnv';
import { createProxy } from './build/proxy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env');
  const viteEnv = wrapperEnv(env);
  return {
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
        imports: ['vue', '@vueuse/core', 'uni-app'],
        dts: './typings/auto-imports.d.ts',
      }),
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      UnoCSS(),
    ],
    envDir: 'env',
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // Load proxy configuration from .env.development
      proxy: createProxy(viteEnv.VITE_PROXY),
    },
  };
});
