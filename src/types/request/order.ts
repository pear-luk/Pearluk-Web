export type PaymentInfoRequestDTO = { key: string; method: string; payment_status: string };

export type OrderProductRequestDTO = {
  product_id: string;
  count: number;
  use_coppone?: string | null;
  price: bigint | number;
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
