import { CartProduct } from './../model/cart';
export type CreateCartProductDTO = Omit<CartProduct, 'cart_product_id' | 'product'>;

export type UpdateCartProductDTO = Pick<CartProduct, 'cart_product_id' | 'count'>;

export type DeleteCartDTO = {
  product_list: CartProduct[];
};
