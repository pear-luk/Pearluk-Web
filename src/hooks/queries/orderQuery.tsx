import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { MyOrderListGetResponseDTO } from '../../types/response/order';
import { API } from '../util/API';

type UseMyOrderListType = {
  myOrderList: MyOrderListGetResponseDTO;
  isMyOrderListError: boolean;
  isMyOrderLoading: boolean;
};

export const useMyOrderList = (): UseMyOrderListType => {
  const [myOrderList, setMyOrderList] = useState<MyOrderListGetResponseDTO>([]);

  const { isLoading, isError } = useQuery<AxiosResponse<BaseResponseDTO<MyOrderListGetResponseDTO>> | null, AxiosError>(
    ['myOrderList'],

    myOrderList.length === 0 ? API('/orders', { method: 'get' }) : () => null,
    // API('/auth', { method: 'get' }),
    {
      onSuccess: (res: AxiosResponse<BaseResponseDTO<MyOrderListGetResponseDTO>> | null) => {
        if (res !== null) {
          const { data } = res;
          const { result } = data as BaseResponseDTO<MyOrderListGetResponseDTO>;
          result && setMyOrderList([...myOrderList, ...(result as MyOrderListGetResponseDTO)]);
        }
      },

      retry: false,
    },
  );

  return { myOrderList, isMyOrderListError: isError, isMyOrderLoading: isLoading };
};
//   u
