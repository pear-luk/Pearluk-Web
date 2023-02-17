import { atom } from 'recoil';
import { v1 } from 'uuid';
import { CartProduct } from './../../types/model/cart';

export const orderProductState = atom<Array<CartProduct & { use_cuppon?: string }>>({
  key: `orderProductState/${v1()}`,
  default: [],
});
