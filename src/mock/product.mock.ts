import { faker } from '@faker-js/faker';
import { ulid } from 'ulid';
import { Product, ProductImg } from './../types/model/product';
import { archiveMock } from './archive.mock';
import { categoryMock } from './category.mock';
export const productImgFaker: ProductImg[] = Array(10)
  .fill(0)
  .map((_, i) => ({
    product_img_id: ulid(),
    product_id: ulid(),
    url: faker.image.animals(),
    sequence: i,
  }));
export const productMock = (): Product => {
  return {
    product_id: ulid(),
    name: faker.lorem.word(26),
    price: faker.datatype.number({ min: 10000, max: 200000 }),
    introduce: faker.lorem.lines(10),
    quantity: faker.datatype.number({ min: 0, max: 20 }),
    product_status: faker.datatype.number({ min: 0, max: 3 }),
    archive_id: ulid(),
    category_id: ulid(),
    imgs: productImgFaker,
    archive: archiveMock(),
    category: categoryMock(),
  };
};

export const productListMock: Product[] = [...new Array(300)].map(() => productMock());
