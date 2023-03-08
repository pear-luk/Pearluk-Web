import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { Category } from './../../types/model/category';
import { CreateCategoryDTO } from './../../types/request/category';
import { createCategory } from './../API/category/index';
import { CATEGORY_KEY } from './../queries/key/index';
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<Category>, AxiosError, CreateCategoryDTO>(createCategory(), {
    onSuccess: () => {
      queryClient.invalidateQueries(CATEGORY_KEY);
    },
  });
};
