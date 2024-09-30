import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    
    state: () => ({
    user: null, // ユーザー情報を格納するための変数。オブジェクト想定なのでなんでもはいる
  }),

  actions: {
    setUser(userInfo) {
      this.user = userInfo; // ユーザー情報を設定
    },
    clearUser() {
      this.user = null; // ユーザー情報をクリア
    },
  },
});
