import { CartProduct } from './../../../types/model/cart';
import { CreateCartProductDTO, UpdateCartProductDTO } from './../../../types/request/cart';
import { API } from './../../util/API';
export const addCartProduct = async (mudationData: CreateCartProductDTO) => {
  return (await API<CartProduct>('/cart', { method: 'post', data: mudationData })).data;
};

export const updateCartProduct = async (mudationData: UpdateCartProductDTO) => {
  return (await API<CartProduct>('/cart', { method: 'patch', data: mudationData })).data;
};

export const deleteCartProduct = async (mudationData: Pick<UpdateCartProductDTO, 'cart_product_id'>) => {
  const { cart_product_id } = mudationData;
  return (await API<CartProduct>(`/cart/${cart_product_id}`, { method: 'put' })).data;
};

export const deleteCart = async () => {
  return (await API<CartProduct[]>(`/cart`, { method: 'put' })).data;
};
