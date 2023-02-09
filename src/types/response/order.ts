import { OrderProduct, Shipping } from './../model/order';
export type MyOrderListGetResponseDTO = MyOderListGetResponItemDTO[];

export type MyOderListGetResponItemDTO = {
  order_id: string;
  name: string;
  user_id: string;
  total_price: number | bigint;
  order_status: number;
  payment_status: number;
  order_products: OrderProduct[];
  shipping?: Shipping | null;
  created_at: string | Date;
};

// export
