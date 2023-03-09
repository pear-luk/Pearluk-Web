import { faker } from '@faker-js/faker';
import { ulid } from 'ulid';
import { CartProduct } from './../types/model/cart';
import { productImgFaker } from './product.mock';

export const cartProductMock = (): CartProduct => {
  return {
    cart_product_id: ulid(),
    product_id: ulid(),
    count: faker.datatype.number({ min: 1, max: 20 }),
    product: {
      name: faker.lorem.words(10),
      price: faker.datatype.number({ min: 1000, max: 9999999 }),
      imgs: productImgFaker,
    },
  };
};

export const cartProductListMock = Array(5)
  .fill(0)
  .map(() => cartProductMock());
