import { defineStore } from 'pinia';
import api from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await api.post('/auth/login/password', {
          email,
          password,
        });
        const { access_token } = response.data;
        this.token = access_token;
        localStorage.setItem('token', access_token);
        // You might want to fetch user details here and store them
        return true;
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    },
  },
});
