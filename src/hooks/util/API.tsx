import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseResponseDTO } from '../../types/common/baseResponse';

export const API = <T,>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<BaseResponseDTO<T>>> => {
  const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;

  return axios(`http://localhost:3000${API_PREFIX}${url}`, { ...options });
};
