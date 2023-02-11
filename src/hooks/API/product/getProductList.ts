import { ProductListGetResponseDTO } from '../../../types/response/product';
import { API } from '../../util/API';

export const getProductList =
  ({ page, archive }: { page: string | string[] | undefined; archive: string | string[] | undefined }) =>
  async () =>
    (await API<ProductListGetResponseDTO>(`/products?archive=${archive}&page=${page}`, { method: 'get' })).data;
