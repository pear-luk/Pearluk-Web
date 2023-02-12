import { cartState } from '../../recoil/cart/state';
import { CartProductListGetResponseDTO } from '../../types/response/cart';
import { API } from '../util/API';
import { useRecoilQuery } from '../util/useRecoilQuery';
import { CART_KEY } from './key';

const getCartProductList = async () => {
  return (await API<CartProductListGetResponseDTO>('/cart', { method: 'get' })).data;
};

export const useCart = () => {
  const { state, isLoading, refetch } = useRecoilQuery(cartState, CART_KEY, getCartProductList);
  console.log(state);
  return { cartProductList: state, isCartLoading: isLoading, refetchCart: refetch };
};
