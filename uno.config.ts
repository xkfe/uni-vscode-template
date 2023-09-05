import process from 'node:process';
import type { Preset, SourceCodeTransformer } from 'unocss';

/*
  unocss预设：
   开发的时候检查样式：http://localhost: port/__unocss
    - defineConfig: 提供了一个类型安全的方式来定义配置对象，它将自动推断您的配置对象的类型，以便在您的 IDE 中获得完整的类型提示。
    - presetAttributify: 属性化模式，属性冲突时，可以通过默认un-前缀来解决：<div m-2 rounded text-teal-400 >代替class</div>
    - presetIcons: 可以自定义图标转换.配合 @iconify-json/xx 生成的 json 文件，可以直接使用 iconify 的图标。
    - presetUno: 提供流行的实用程序优先框架的通用超集，包括 Tailwind CSS: https://tailwindcss.com/，Windi CSS: https://windicss.org/
    - transformerDirectives
    - transformerVariantGroup 组合，方便书写
*/
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// 把默认rem单位改为px单位，在通过postcss-pxtorem进行rem转换
import presetRemToPx from '@unocss/preset-rem-to-px';

// 生成class
// import transformerCompileClass from '@unocss/transformer-compile-class'
// 加载本地svg图标
// import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

/* unocss 小程序兼容预设： https://github.com/unocss-applet/unocss-applet/blob/main/README.zh-CN.md */
import { presetApplet, presetRemRpx, transformerApplet, transformerAttributify } from 'unocss-applet';

// uni-app
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false;
console.log('isApplet', isApplet);
const presets: Preset[] = [];
const transformers: SourceCodeTransformer[] = [];

if (isApplet) {
  presets.push(presetApplet());
  presets.push(presetRemRpx({ baseFontSize: 4 })); // 默认16(1rem=16px)，改为4以后，1rem=1px，方便移动端直接使用px单位
  transformers.push(transformerAttributify({ ignoreAttributes: ['block'] }));
  transformers.push(transformerApplet());
}
else {
  presets.push(presetUno());
  presets.push(presetAttributify());
  // presets.push(presetRemRpx({ baseFontSize: 4, mode: 'rpx2rem', enable: false }));
  presets.push(presetRemToPx({ baseFontSize: 4 }));
}

export default defineConfig({
  // 预设的别名，可以进行一些组合使用
  shortcuts: [
    ['center', 'flex items-center justify-center'],
    ['primary-color', 'text-teal-600'],
  ],
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    ...presets,
  ],
  transformers: [
    // 指令：@apply等
    transformerDirectives(),
    transformerVariantGroup(),
    ...transformers,
  ],
  rules: [],
});
