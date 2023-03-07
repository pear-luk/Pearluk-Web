import { faker } from '@faker-js/faker';
import { Category } from './../types/model/category';
export const categoryMock = (): Category => ({
  category_id: faker.random.words(10),
  name: faker.lorem.word(26),
  parent_category_id: null,
  child_categories: [childCategoryMock(), childCategoryMock()],
});
export const childCategoryMock = (): Category => ({
  category_id: faker.random.words(10),
  name: faker.lorem.word(26),
  parent_category_id: null,
});

export const categoryListMock: Category[] = Array(30)
  .fill(0)
  .map(() => categoryMock());
