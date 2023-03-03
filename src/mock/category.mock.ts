import { faker } from '@faker-js/faker';
import { Category } from './../types/model/category';
export const categoryMock = (): Category => ({
  category_id: faker.lorem.word(26),
  name: faker.lorem.word(26),
  parent_category_id: null,
});

export const categoryListMock: Category[] = Array(10)
  .fill(0)
  .map(() => categoryMock());
