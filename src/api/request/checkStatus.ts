type Icon = 'success' | 'loading' | 'none' | 'error';
function ErrorMsg(title: string, icon: Icon = 'error') {
  uni.showToast({ title, icon });
}

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export function checkStatus(status: number) {
  switch (status) {
    case 400:
      ErrorMsg('请求失败！请您稍后重试');
      break;
    case 401:
      ErrorMsg('登录失效！请您重新登录');
      break;
    case 403:
      ErrorMsg('当前账号无权限访问！');
      break;
    case 404:
      ErrorMsg('你所访问的资源不存在！');
      break;
    case 405:
      ErrorMsg('请求方式错误！请您稍后重试');
      break;
    case 408:
      ErrorMsg('请求超时！请您稍后重试');
      break;
    case 500:
      ErrorMsg('服务异常！');
      break;
    case 502:
      ErrorMsg('网关错误！');
      break;
    case 503:
      ErrorMsg('服务不可用！');
      break;
    case 504:
      ErrorMsg('网关超时！');
      break;
    default:
      ErrorMsg('请求失败！');
  }
}
