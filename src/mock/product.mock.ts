import { faker } from '@faker-js/faker';
import { Product } from './../types/model/product';
export const productMock = (): Product => {
  return {
    product_id: faker.lorem.word(26),
    name: faker.lorem.word(26),
    price: faker.datatype.number({ min: 10000, max: 200000 }),
    introduce: faker.lorem.word(300),
    quantity: faker.datatype.number({ min: 0, max: 20 }),
    product_status: faker.datatype.number({ min: 0, max: 3 }),
    archive_id: faker.lorem.word(26),
    category_id: faker.lorem.word(26),
    imgs: ['/imgs/test.png'],
  };
};

export const productListMock: Product[] = [...new Array(10)].map(() => productMock());
