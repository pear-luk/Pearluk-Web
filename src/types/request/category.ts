import { Category } from './../model/category';
export type CreateCategoryDTO = Omit<Category, 'category_id'>;
