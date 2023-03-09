import { useMutation, useQueryClient } from 'react-query';
import { createProduct, uploadProductImgs } from './../API/product/index';
import { PRODUCT_ALL_LIST_KEY, PROUCT_DETAIL_KEY } from './../queries/key/index';
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createProduct(), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(PRODUCT_ALL_LIST_KEY);
    },
  });
};

export const useUploadProductImg = (product_id: string) => {
  const queryClient = useQueryClient();

  return useMutation(uploadProductImgs(product_id), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(PROUCT_DETAIL_KEY({ product_id }));
    },
  });
};
