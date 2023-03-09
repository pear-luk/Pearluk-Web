import { faker } from '@faker-js/faker';
import { ulid } from 'ulid';
import { Category } from './../types/model/category';
export const categoryMock = (): Category => ({
  category_id: ulid(),
  name: faker.lorem.word(26),
  parent_category_id: undefined,
  child_categories: [childCategoryMock(), childCategoryMock()],
});
export const childCategoryMock = (): Category => ({
  category_id: ulid(),
  name: faker.lorem.word(26),
  parent_category_id: ulid(),
});

export const categoryListMock: Category[] = Array(4)
  .fill(0)
  .map(() => categoryMock());
