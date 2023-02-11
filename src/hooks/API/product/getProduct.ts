import { API } from '../../util/API';
import { Product } from './../../../types/model/product';

export const getProduct =
  ({ product_id }: { product_id: string }) =>
  async () =>
    (await API<Product>(`/products/${product_id}`, { method: 'get' })).data;
