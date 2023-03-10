import { Category } from './../../../types/model/category';
import { API } from './../../util/API';
export const getCategoryList = async () => {
  return (await API<Category[]>('/categories', { method: 'get' })).data;
};

export const createCategory = () => async (mutationData: Omit<Category, 'category_id'>) => {
  return (await API<Category>('/categories', { method: 'post', data: mutationData })).data;
};

export const deleteCategory = () => async (mutationData: Pick<Category, 'category_id'>) => {
  const { category_id } = mutationData;
  return (await API<Category>(`/categories/${category_id}`, { method: 'put' })).data;
};
