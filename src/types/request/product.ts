import { Product } from './../model/product';
export type ProductCreateRequestDTO = Omit<Product, 'product_id'>;

export type ProductUpdateManyRequestDTO = {
  products: Pick<Product, 'product_id'>[];
  archive_id?: string;
  category_id?: string;
};
