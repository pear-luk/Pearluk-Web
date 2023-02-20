import { PaymentInfo, Shipping } from './../model/order';
import { Product } from './../model/product';
export type PaymentInfoRequestDTO = { key: string; method: string; payment_status: string };

export type OrderProductRequestDTO = {
  product_id: string;
  count: number;
  use_coppone?: string | null;
  price: bigint | number;
  product: Pick<Product, 'name' | 'price' | 'imgs'>;
};

export type CustomerInfoRequestDTO = { name: string; phone_number: string };

export type RecipientInfoRequestDTO = {
  name: string;
  phone_number: string;
  full_address: string;
  address: string;
  detail_address: string;
};

export type OrderRequestDTO = {
  order_id: string;
  user_id: string;
  name: string;
  use_point?: bigint | number | null;
  total_price: bigint | number;
  order_status: number;
  payment_status: number;
};

export type OrderCreateRequestDTO = {
  name: string;

  use_point?: bigint | number | null;

  total_price: bigint | number;

  order_status: number;

  payment_status: number;

  order_products: OrderProductRequestDTO[];

  customer_info?: CustomerInfoRequestDTO;

  recipient_info?: RecipientInfoRequestDTO;

  payment_info?: PaymentInfo;

  shipping?: Omit<Shipping, 'order_id'>;
};

export type OrderConfirmRequestDTO = {
  payment_key: string;

  amount: string;

  order_id: string;
};
