import { CartProduct } from './../model/cart';
export type CreateCartProductDTO = Omit<CartProduct, 'cart_product_id' | 'product'>;
