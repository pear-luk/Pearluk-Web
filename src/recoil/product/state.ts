import { atom } from 'recoil';
import { v1 } from 'uuid';
import { ProductStatusResponseDTO } from './../../types/response/product';

export const productStatusState = atom<ProductStatusResponseDTO | null>({
  key: `products/status/${v1()}`,
  default: null,
});
