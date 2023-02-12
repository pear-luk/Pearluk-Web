import { Product } from './product';
export type CartProduct = {
  cart_product_id: string;
  product_id: string;
  count: number;
  product: Pick<Product, 'name' | 'price' | 'imgs'>;
};
