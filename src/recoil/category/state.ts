import { atom } from 'recoil';
import { v1 } from 'uuid';
import { Category } from './../../types/model/category';

export const categoryListState = atom<Category[]>({
  key: `categoryListState/${v1()}`,
  default: [],
});
