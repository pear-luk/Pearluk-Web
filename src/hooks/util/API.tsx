import axios, { AxiosRequestConfig } from 'axios';

export const API = (url: string, options?: AxiosRequestConfig) => {
  const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;
  const AXIOS_instance = axios.create({
    baseURL: `http://localhost:3000${API_PREFIX}${url}`,

    headers: {},
    ...options,
  });

  return (mutationData?: any) => AXIOS_instance({ ...options, data: mutationData });
  // return {
  //   get: async () => await (await AXIOS_instance.get(url)).data,
  //   post: async () => await (await AXIOS_instance.post(url, data)).data,
  //   patch: async () => await (await AXIOS_instance.patch(url, data)).data,
  //   delete: async () => await (await AXIOS_instance.delete(url, data)).data,
  // };
};

// 리액트 쿼리 사용법.
// export const useGet = () => {
//   return useQuery(['login'], API('/', { method: 'post', data: { asd: '123' } }), {
//     onSuccess: (data) => {
//       console.log(data);
//     },
//     retry: false,
//   });
// };
