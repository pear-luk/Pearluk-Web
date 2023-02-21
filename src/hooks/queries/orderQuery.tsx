import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { Order } from '../../types/model/order';
import { MyOrderListGetResponseDTO } from '../../types/response/order';
import { getDetailOrder, getMyOrderList } from '../API/order';
import { ORDER_DETAIL_KEY } from './key';

type UseMyOrderListType = {
  myOrderList: MyOrderListGetResponseDTO;
  isMyOrderListError: boolean;
  isMyOrderLoading: boolean;
};

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

export const useDetailOrder = (order_id: stirng) => {
  const [order, setOrder] = useState<Order>();
  const router = useRouter();
  const { data, isLoading, isError, refetch } = useQuery<BaseResponseDTO<Order>, AxiosError>(
    ORDER_DETAIL_KEY(order_id),
    getDetailOrder(order_id),
    {
      retry: false,
      onError: () => {
        router.push('/my');
      },
    },
  );
  useEffect(() => {
    if (data) setOrder(data.result);
  }, [data]);

  return {
    order,
    isLoading,
    isError,
    refetch,
  };
};

// export const useProjectList = ({
//   page,
//   archive,
// }: {
//   page: string | string[] | undefined;
//   archive?: string | string[] | undefined;
// }) => {
//   const [productList, setProductList] = useState<Product[]>([]);
//   const [totalCount, setTotalCount] = useState<number>(0);
//   // const [page, setPage] = useState();
//   const { data, isLoading, isError, refetch } = useQuery<BaseResponseDTO<ProductListGetResponseDTO>, AxiosError>(
//     PRODUCT_LIST_KEY({ page, archive }),
//     getProductList({ page, archive }),
//     // API('/auth', { method: 'get' }),
//     {
//       retry: false,
//     },
//   );
//   // const { result } = data as BaseResponseDTO<MyOrderListGetResponseDTO>;
//   useEffect(() => {
//     if (!data) return;
//     if (!data.result) return;
//     const { result } = data;
//     const { total_count, products } = result;
//     setProductList(products);
//     setTotalCount(total_count);
//     if (!total_count) setTotalCount(0);
//   }, [data]);

//   return {
//     productList,
//     totalCount,
//     isProjectListError: isError,
//     isProjectListLoading: isLoading,
//     refetchProjectList: refetch,
//   };
// };
