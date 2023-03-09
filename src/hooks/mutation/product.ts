import { useMutation, useQueryClient } from 'react-query';
import { createProduct, uploadProductImgs } from './../API/product/index';
import { PRODUCT_ALL_LIST_KEY } from './../queries/key/index';
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createProduct(), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(PRODUCT_ALL_LIST_KEY);
    },
  });
};

export const useUploadProductImg = () => {
  const queryClient = useQueryClient();

  return useMutation(uploadProductImgs(), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(PRODUCT_ALL_LIST_KEY);
    },
  });
};
