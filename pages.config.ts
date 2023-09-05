import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';

export default defineUniPages({
  pages: [
    {
      path: 'pages/index/index',
      style: {
        navigationBarTitleText: '首页',
        navigationStyle: 'custom',
      },
    },
    {
      path: 'pages/my/index',
      style: {
        navigationBarTitleText: '我的',
      },
    },
  ],
  tabBar: {
    color: '#999999',
    selectedColor: '#02C996',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    height: '98rpx',
    fontSize: '22rpx',
    iconWidth: '20px',
    spacing: '5px',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'static/tabBar/index.png',
        selectedIconPath: 'static/tabBar/index_selected.png',
        text: '首页',
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'static/tabBar/my.png',
        selectedIconPath: 'static/tabBar/my_selected.png',
        text: '我的',
      },
    ],
  },
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
  easycom: {
    autoscan: true,
    custom: {
      // uni-ui 规则如下配置
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
    },
  },
});
