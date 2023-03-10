import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseResponseDTO } from '../../types/common/baseResponse';

export const API = <T,>(uri: string, options?: AxiosRequestConfig): Promise<AxiosResponse<BaseResponseDTO<T>>> => {
  const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;
  // const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const url = `${API_PREFIX}${uri}`;
  return axios(`${url}`, { ...options });
};
