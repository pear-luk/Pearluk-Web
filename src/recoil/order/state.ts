import { atom } from 'recoil';
import { v1 } from 'uuid';
import { CartProduct } from './../../types/model/cart';
import { OrderCreateRequestDTO } from './../../types/request/order';

export const orderProductState = atom<Array<CartProduct & { use_cuppon?: string }>>({
  key: `orderProductState/${v1()}`,
  default: [],
});

export const orderState = atom<OrderCreateRequestDTO | undefined>({
  key: `orderState/${v1()}`,
  default: undefined,
});
