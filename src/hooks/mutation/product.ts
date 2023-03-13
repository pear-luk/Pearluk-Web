import { useMutation, useQueryClient } from 'react-query';
import { createProduct, updateManyProduct, updateProduct, uploadProductImgs } from './../API/product/index';
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

export const useUpdateManyProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(updateManyProduct(), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(PRODUCT_ALL_LIST_KEY);
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProduct(), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(PRODUCT_ALL_LIST_KEY);
    },
  });
};
