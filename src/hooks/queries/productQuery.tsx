import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { Product } from '../../types/model/product';
import { ProductListGetResponseDTO } from '../../types/response/product';
import { API } from '../util/API';
import { PRODUCT_LIST_KEY } from './key';

const getProductList =
  ({ page, archive }: { page: string | string[] | undefined; archive: string | string[] | undefined }) =>
  async () =>
    (await API<ProductListGetResponseDTO>(`/products?archive=${archive}&page=${page}`, { method: 'get' })).data;

export const useProjectList = ({
  page,
  archive,
}: {
  page: string | string[] | undefined;
  archive?: string | string[] | undefined;
}) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  // const [page, setPage] = useState();
  const { data, isLoading, isError, refetch } = useQuery<BaseResponseDTO<ProductListGetResponseDTO>, AxiosError>(
    PRODUCT_LIST_KEY({ page, archive }),
    getProductList({ page, archive }),
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
    const { total_count, products } = result;
    setProductList(products);
    setTotalCount(total_count);
  }, [data]);

  return {
    productList,
    totalCount,
    isProjectListError: isError,
    isProjectListLoading: isLoading,
    refetchProjectList: refetch,
  };
};
