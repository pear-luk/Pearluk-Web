import axios, { AxiosRequestConfig } from 'axios';

export const API = (url: string, options?: AxiosRequestConfig) => {
  const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;
  const AXIOS_instance = axios.create({
    baseURL: `http://localhost:3000${API_PREFIX}${url}`,

    headers: {},
    ...options,
  });

  return async () => (await AXIOS_instance({ ...options })).data;
  // return {
  //   get: async () => await (await AXIOS_instance.get(url)).data,
  //   post: async () => await (await AXIOS_instance.post(url, data)).data,
  //   patch: async () => await (await AXIOS_instance.patch(url, data)).data,
  //   delete: async () => await (await AXIOS_instance.delete(url, data)).data,
  // };
};
