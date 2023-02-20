import { AxiosError } from 'axios';
import { addCartProduct, deleteCart, deleteCartProduct, updateCartProduct } from '../API/cart';
import { CartProduct } from './../../types/model/cart';
import { CreateCartProductDTO, DeleteCartDTO, UpdateCartProductDTO } from './../../types/request/cart';
import { CART_KEY } from './../queries/key/index';

import { useMutation, useQueryClient } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';

export const useAddCart = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<CartProduct>, AxiosError, CreateCartProductDTO>(addCartProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(CART_KEY);
    },
  });
};

export const useUpdateCartProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<CartProduct>, AxiosError, UpdateCartProductDTO>(updateCartProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(CART_KEY);
    },
  });
};

export const useDeleteCartProduct = () => {
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

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<CartProduct[]>, AxiosError, DeleteCartDTO>(deleteCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(CART_KEY);
    },
  });
};
