import 'ant-design-vue/dist/reset.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL_API

const app = createApp(App)

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401 && error.config.url !== '/auth/sign-in') {
      localStorage.removeItem('token');
      
      router.push({ name: 'sign-in' });
    }

    return Promise.reject(error);
  }
);

app.config.globalProperties.$axios = axios

app.use(router)

app.mount('#app')
