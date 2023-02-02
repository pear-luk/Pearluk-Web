import { Product } from './product';
export type Order = {
  order_id: string;
  user_id: string;
  product_list: Product[];
};
