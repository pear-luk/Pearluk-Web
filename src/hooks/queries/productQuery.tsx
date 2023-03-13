import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { productStatusState } from '../../recoil/product/state';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { Product } from '../../types/model/product';
import { ProductListGetResponseDTO, ProductStatusResponseDTO } from '../../types/response/product';
import { getProductList, getProductStatus } from '../API/product/';
import { API } from '../util/API';
import { useRecoilQuery } from '../util/useRecoilQuery';
import { PRODUCT_LIST_KEY, PRODUCT_STATUS_KEY, PROUCT_DETAIL_KEY } from './key';

export const useProjectList = ({
  page,
  archive,
  search,
  parentCategory,
  childCategory,
}: {
  page: string | string[] | undefined;
  archive?: string | string[] | undefined;
  search?: string | string[] | undefined;
  parentCategory?: string | string[] | undefined;
  childCategory?: string | string[] | undefined;
}) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  // const [page, setPage] = useState();
  const { data, isLoading, isError, refetch } = useQuery<BaseResponseDTO<ProductListGetResponseDTO>, AxiosError>(
    PRODUCT_LIST_KEY({ page, archive, search, parentCategory, childCategory }),
    getProductList({ page, archive, search, parentCategory, childCategory }),
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
    if (!total_count) setTotalCount(0);
  }, [data]);

  return {
    productList,
    totalCount,
    isProjectListError: isError,
    isProjectListLoading: isLoading,
    refetchProjectList: refetch,
  };
};

const getProductDetail = ({ product_id }: { product_id: string }) => {
  return async () => (await API<Product>(`/products/${product_id}`, { method: 'get' })).data;
};

export const useProduct = ({ product_id }: { product_id: string | string[] | undefined }) => {
  const [product, setProduct] = useState<Product | undefined>();
  const { data, isError, isLoading, refetch } = useQuery(
    PROUCT_DETAIL_KEY({ product_id }),
    getProductDetail({ product_id }),
  );

  useEffect(() => {
    if (!data || !data.result) return;
    setProduct(data?.result);
  }, [data]);
  return { product, isProductError: isError, isProductLoading: isLoading, refetchProduct: refetch };
};

export const useProductStatus = () => {
  const queryClient = useQueryClient();
  const { state, isLoading, refetch } = useRecoilQuery<ProductStatusResponseDTO | null>(
    productStatusState,
    PRODUCT_STATUS_KEY,
    getProductStatus,
  );
  // queryClient.invalidateQueries(PRODUCT_STATUS_KEY);

  return { productStatus: state, isLoadingProductStatus: isLoading, refetchroductStatus: refetch };
};
