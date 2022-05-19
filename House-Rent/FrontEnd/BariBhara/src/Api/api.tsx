/**
 * create of instance of axios,
 * we can call our route at any where with token
 */

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://192.168.136.2:5000/api',
});

instance.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = {Bearer: token};
    }
    return config;
  },

  err => {
    return Promise.reject(err);
  },
);

export default instance;
