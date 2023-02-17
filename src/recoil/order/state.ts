import { atom } from 'recoil';
import { v1 } from 'uuid';
import { Order } from '../../types/model/order';
import { CartProduct } from './../../types/model/cart';

export const orderProductState = atom<Array<CartProduct & { use_cuppon?: string }>>({
  key: `orderProductState/${v1()}`,
  default: [],
});

export const orderState = atom<Order>({
  key: `orderState/${v1()}`,
  default: [],
});
