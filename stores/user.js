import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useLocalStorage('user', {})
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
  },
  getters: {
    getUser: (state) => state.user
  },
})