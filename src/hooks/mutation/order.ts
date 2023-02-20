import { useMutation, useQueryClient } from 'react-query';
import { confirmOrder, createOrder } from './../API/order/index';
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
export const useConfirmOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(confirmOrder, {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(ORDER_KEY);
    },
  });
};
