import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONSIGAKI_API,
  headers: {
    'Api-Authorization':
      'Bearer $2y$10$x3wqNWc4ZonF6dVWKAPnMuU1A258mgKbGWziVPdL5mhzqQwlhQEqK',
    Authorization: 'Bearer 35|bkdTKk4t5WoNeApCMkVwWLBhmkjtarmeULMfwKiW',
  },
});

// const apiAuthorizationToken =
//   'Bearer $2y$10$x3wqNWc4ZonF6dVWKAPnMuU1A258mgKbGWziVPdL5mhzqQwlhQEqK';
// const authorizationToken = '35|bkdTKk4t5WoNeApCMkVwWLBhmkjtarmeULMfwKiW';

// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.headers['Api-Authorization'] = apiAuthorizationToken;
//     config.headers['Authorization'] = authorizationToken;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, config);
    },

    getSection: function (url: string) {
      return axios.get(url);
    },

    put: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axios.put<T>(url, body, config);
    },
    post: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axios.post<T>(url, body, config);
    },
    patch: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axios.patch<T>(url, body, config);
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.delete<T>(url, config);
    },
  };
};

export default api(axiosInstance);
