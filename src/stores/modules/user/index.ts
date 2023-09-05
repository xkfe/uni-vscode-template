import { defineStore } from 'pinia';
import type { UserState } from './type';
import { storeNamespace } from '@/config';

export const useUserStore = defineStore({
  id: `${storeNamespace}-user`,
  state: (): UserState => ({
    token: '',
    userInfo: { name: '' },
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo;
    },
  },
});
