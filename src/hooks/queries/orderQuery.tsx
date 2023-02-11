import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { MyOrderListGetResponseDTO } from '../../types/response/order';
import { API } from '../util/API';

type UseMyOrderListType = {
  myOrderList: MyOrderListGetResponseDTO;
  isMyOrderListError: boolean;
  isMyOrderLoading: boolean;
};

const getMyOrderList = async () => (await API<MyOrderListGetResponseDTO>('/orders', { method: 'get' })).data;

export const useMyOrderList = (): UseMyOrderListType => {
  const [myOrderList, setMyOrderList] = useState<MyOrderListGetResponseDTO>([]);

  const { data, isLoading, isError } = useQuery<BaseResponseDTO<MyOrderListGetResponseDTO>, AxiosError>(
    ['myOrderList'],

    getMyOrderList,
    // API('/auth', { method: 'get' }),
    {
      retry: false,
    },
  );
  // const { result } = data as BaseResponseDTO<MyOrderListGetResponseDTO>;
  useEffect(() => {
    if (!data) return;
    if (!data.result) return;
    const { result } = data;
    setMyOrderList(result);
  }, [data]);

  return { myOrderList, isMyOrderListError: isError, isMyOrderLoading: isLoading };
};