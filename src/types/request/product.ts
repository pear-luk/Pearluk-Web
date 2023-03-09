import { Product } from './../model/product';
export type ProductCreateRequestDTO = Omit<Product, 'product_id'>;
