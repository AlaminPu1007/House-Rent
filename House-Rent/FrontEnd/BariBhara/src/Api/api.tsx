import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = {Bearer: token};
    }
    console.log(config.headers);
    return config;
  },

  err => {
    return Promise.reject(err);
  },
);

export default instance;
