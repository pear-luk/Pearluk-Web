import { Product, ProductImg } from '../../../types/model/product';
import { ProductListGetResponseDTO } from '../../../types/response/product';
import { API } from '../../util/API';
import { ProductCreateRequestDTO } from './../../../types/request/product';

export const getProduct =
  ({ product_id }: { product_id: string }) =>
  async () =>
    (await API<Product>(`/products/${product_id}`, { method: 'get' })).data;

export const getProductList =
  ({ page, archive }: { page: string | string[] | undefined; archive: string | string[] | undefined }) =>
  async () =>
    (await API<ProductListGetResponseDTO>(`/products?archive=${archive}&page=${page}`, { method: 'get' })).data;

export const createProduct = () => async (mutationData: ProductCreateRequestDTO) =>
  (await API<Product>(`/products`, { method: 'post', data: mutationData })).data;

export const uploadProductImgs = () => async (data: { product_id: string; mutationData: FormData }) => {
  const { product_id, mutationData } = data;
  return (await API<ProductImg[]>(`/upload/products/${product_id}`, { method: 'post', data: mutationData })).data;
};
