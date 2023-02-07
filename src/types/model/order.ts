import { CommonInfo } from './../common/commonData';
import { Product } from './product';
export type Order = {
  order_id: string;

  name: string;

  user_id: string;

  use_point?: bigint | number | null;

  total_price: bigint | number;

  order_status: number;

  payment_status: number;

  order_products: OrderProduct[];

  customer_info?: OrderCustomerInfo;

  recipient_info?: OrderRecipientInfo;

  payment_info?: PaymentInfo;

  shipping?: Shipping;
} & CommonInfo;

export type OrderCustomerInfo = {
  order_id: string;
  name: string;
  phone_number: string;
};
export type OrderRecipientInfo = {
  order_id: string;
  name: string;
  phone_number: string;
  full_address: string;
  address: string;
  detail_address: string;
};

export type OrderProduct = {
  order_id: string;
  product_id: string;
  count: number;
  ues_coupon?: string;
  price: number;
  product: Pick<Product, 'name' | 'price' | 'imgs'>;
};

export type Shipping = {
  order_id: string;
  courier_id: number;
  courier_name: string;
  waybill_number: string;
  shipping_status: number;
};

export type PaymentInfo = {
  order_id: string;
  key: string;
  method: string;
  payment_status: string;
};

export enum OrderStatusEnum {
  '상품준비중' = 0,
  '배송대기중' = 1,
  '배송중' = 2,
}
