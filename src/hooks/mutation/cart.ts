import { AxiosError } from 'axios';
import { CartProduct } from './../../types/model/cart';
import { CreateCartProductDTO } from './../../types/request/cart';
import { CART_KEY } from './../queries/key/index';
import { API } from './../util/API';

import { useMutation, useQueryClient } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';

const addCartProduct = async (mudationData: CreateCartProductDTO) => {
  return (await API<CartProduct>('/cart', { method: 'post', data: mudationData })).data;
};

export const useCartADD = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<CartProduct>, AxiosError, CreateCartProductDTO>(addCartProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(CART_KEY);
    },
  });
};
// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
