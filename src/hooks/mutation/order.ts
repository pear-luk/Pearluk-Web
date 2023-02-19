import { useMutation, useQueryClient } from 'react-query';
import { createOrder } from './../API/order/index';
import { ORDER_KEY } from './../queries/key/index';

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(createOrder, {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(ORDER_KEY);
    },
  });
};
//   export const useAddCart = () => {
//     const queryClient = useQueryClient();
//     return useMutation<BaseResponseDTO<CartProduct>, AxiosError, CreateCartProductDTO>(addCartProduct, {
//       onSuccess: () => {
//         queryClient.invalidateQueries(CART_KEY);
//       },
//     });
