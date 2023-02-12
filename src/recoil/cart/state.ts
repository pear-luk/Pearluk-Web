import { atom } from 'recoil';
import { v1 } from 'uuid';
import { CartProductListGetResponseDTO } from './../../types/response/cart';

export const cartState = atom<CartProductListGetResponseDTO>({
  key: `cartState/${v1()}`,
  default: [],
});
