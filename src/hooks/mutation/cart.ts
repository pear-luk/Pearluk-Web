import { AxiosError } from 'axios';
import { CartProduct } from './../../types/model/cart';
import { CreateCartProductDTO, UpdateCartProductDTO } from './../../types/request/cart';
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

const updateCartProduct = async (mudationData: UpdateCartProductDTO) => {
  return (await API<CartProduct>('/cart', { method: 'patch', data: mudationData })).data;
};

export const useCartProductUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<CartProduct>, AxiosError, UpdateCartProductDTO>(updateCartProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(CART_KEY);
    },
  });
};

const deleteCartProduct = async (mudationData: Pick<UpdateCartProductDTO, 'cart_product_id'>) => {
  const { cart_product_id } = mudationData;
  return (await API<CartProduct>(`/cart/${cart_product_id}`, { method: 'put' })).data;
};

export const useCartProductDelete = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<CartProduct>, AxiosError, Pick<UpdateCartProductDTO, 'cart_product_id'>>(
    deleteCartProduct,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CART_KEY);
      },
    },
  );
};

// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
