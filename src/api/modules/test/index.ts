import http from '@/api/request';

// 用户列表
export function currentActivityApi(data: any) {
  return http.post('/currentActivity', data);
}
