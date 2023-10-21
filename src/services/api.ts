import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONSIGAKI_API,
  headers: {
    'Api-Authorization':
      'Bearer $2y$10$x3wqNWc4ZonF6dVWKAPnMuU1A258mgKbGWziVPdL5mhzqQwlhQEqK',
    Authorization: 'Bearer 35|bkdTKk4t5WoNeApCMkVwWLBhmkjtarmeULMfwKiW',
  },
});

export default api;
