import { faker } from '@faker-js/faker';
import { Product } from './../types/model/product';
import { archiveMock } from './archive.mock';
import { categoryMock } from './category.mock';
const imgFaker = Array(10)
  .fill(0)
  .map(() => `/imgs/test${faker.datatype.number({ min: 1, max: 10 })}.png`);
export const productMock = (): Product => {
  return {
    product_id: faker.random.words(10),
    name: faker.lorem.word(26),
    price: faker.datatype.number({ min: 10000, max: 200000 }),
    introduce: faker.lorem.lines(10),
    quantity: faker.datatype.number({ min: 0, max: 20 }),
    product_status: faker.datatype.number({ min: 0, max: 3 }),
    archive_id: faker.random.words(10),
    category_id: faker.random.words(10),
    imgs: imgFaker,
    archive: archiveMock(),
    category: categoryMock(),
  };
};

export const productListMock: Product[] = [...new Array(300)].map(() => productMock());
