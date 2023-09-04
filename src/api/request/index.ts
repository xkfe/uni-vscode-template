import un from '@uni-helper/uni-network';
import { checkStatus } from './checkStatus';

let baseURL = import.meta.env.VITE_API_URL as string;
// #ifdef MP
baseURL = import.meta.env.VITE_API_URL_MP as string;
// #endif

const http = un.create({
  baseUrl: baseURL,
  // 默认地址请求地址，可在 .env.** 文件中修改
  timeout: 1000 * 30, // 超时时间 30s
  // 跨域时候允许携带凭证
  withCredentials: true,
});

/**
 * @description 请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * token校验(JWT) : 接受服务器返回的 token,存储到 vuex/pinia/本地储存当中
 */
http.interceptors.request.use((config) => {
  // loading -> true
  uni.showLoading({ title: '加载中...', mask: true });
  if (config.headers && typeof config.headers.set === 'function') {
    config.headers.set('x-access-token', '');
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

/**
 * @description 响应拦截器
 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
 */
http.interceptors.response.use((response) => {
  // loading -> false
  uni.hideLoading();
  // 对响应数据做点什么
  return response;
}, (error) => {
  const { response } = error;
  // loading -> false
  uni.hideLoading();
  if (error.message.includes('timeout')) { uni.showToast({ title: '请求超时！请您稍后重试', icon: 'none' }); }
  if (error.message.includes('Network Error')) { uni.showToast({ title: '网络错误！请您稍后重试', icon: 'none' }); }
  if (response) { checkStatus(response.status); }
  return Promise.reject(error);
});

export default http;
