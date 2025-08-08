import axios, { InternalAxiosRequestConfig } from 'axios';
import { AuthApiInterface } from './auth';
import { browserLocalStorage } from '@/common/browser.local.storage';

class BackednApiInterface {
  public readonly auth: AuthApiInterface;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: '/api',
    });

    axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const token = browserLocalStorage.getCrmSystemAccessToken();

      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    this.auth = new AuthApiInterface(axiosInstance);
  }
}

export const backednApiInterface = new BackednApiInterface();
