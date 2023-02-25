import { CartProduct } from '../../../types/model/cart';
import { CreateCartProductDTO, DeleteCartDTO, UpdateCartProductDTO } from '../../../types/request/cart';
import { API } from '../../util/API';
export const addCartProduct = async (mutationData: CreateCartProductDTO) => {
  return (await API<CartProduct>('/cart', { method: 'post', data: mutationData })).data;
};

export const updateCartProduct = async (mutationData: UpdateCartProductDTO) => {
  return (await API<CartProduct>('/cart', { method: 'patch', data: mutationData })).data;
};

export const deleteCartProduct = async (mutationData: Pick<UpdateCartProductDTO, 'cart_product_id'>) => {
  const { cart_product_id } = mutationData;
  return (await API<CartProduct>(`/cart/${cart_product_id}`, { method: 'put' })).data;
};

export const deleteCart = async (mutationData: DeleteCartDTO) => {
  return (await API<CartProduct[]>(`/cart`, { method: 'put', data: mutationData })).data;
};
