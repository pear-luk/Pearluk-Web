import { Category } from './../../../types/model/category';
import { API } from './../../util/API';
export const getCategoryList = async () => {
  return (await API<Category[]>('/categories', { method: 'get' })).data;
};
