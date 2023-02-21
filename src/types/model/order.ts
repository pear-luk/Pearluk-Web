import { CommonInfo } from './../common/commonData';
import { Product } from './product';
export type Order = {
  order_id: string;

  name: string;

  user_id: string;

  use_point?: bigint | number | null;

  total_price: bigint | number;

  order_status: OrderStatusEnum & number;

  payment_status: number;

  order_products: OrderProduct[];

  customer_info: OrderCustomerInfo;

  recipient_info: OrderRecipientInfo;

  payment_info?: PaymentInfo;

  shipping?: Shipping;
} & CommonInfo;

export type OrderCustomerInfo = {
  order_id: string;
  name: string;
  phone_number: string;
} & CommonInfo;

export type OrderRecipientInfo = {
  order_id: string;
  name: string;
  phone_number: string;
  post_code: string;
  full_address: string;
  address: string;
  detail_address: string;
} & CommonInfo;

export type OrderProduct = {
  order_id: string;
  product_id: string;
  count: number;
  ues_coupon?: string;
  price: number;
  product: Pick<Product, 'name' | 'price' | 'imgs'>;
} & CommonInfo;

export type Shipping = {
  order_id: string;
  courier_id: number;
  courier_name: string;
  waybill_number: string;
  shipping_status: number;
} & CommonInfo;

export type PaymentInfo = {
  order_id: string;
  key: string;
  method: string;
  payment_status: PaymentStatus;
  account_number?: string;
  bank_code?: string;
  refund_account_number?: string;
  refund_bank_code?: string;
  refund_holder_name?: string;
  secret?: string;
  transaction_key?: string;
} & CommonInfo;

export enum OrderStatusEnum {
  '결제대기중' = 0,
  '배송준비중' = 1,
  '배송중' = 2,
  '배송완료' = 3,
  '구매확정' = 4,
  '결제취소' = 5, // 배송준비중일때 결제 취소 한경우
  '환불' = 6, // 배송중 이후로 취소한경우
  '교환' = 7, // 상품에 하자가 있어서 교환 신청한경우
}

/**
 * status string
결제 처리 상태입니다. 아래와 같은 상태 값을 가질 수 있습니다. 상태 변화 흐름이 궁금하다면 흐름도를 살펴보세요.

- READY: 결제를 생성하면 가지게 되는 초기 상태 입니다. 인증 전까지는 READY 상태를 유지합니다.

- IN_PROGRESS: 결제 수단 정보와 해당 결제 수단의 소유자가 맞는지 인증을 마친 상태입니다. 결제 승인 API를 호출하면 결제가 완료됩니다.

- WAITING_FOR_DEPOSIT: 가상계좌 결제 흐름에만 있는 상태로, 결제 고객이 발급된 가상계좌에 입금하는 것을 기다리고 있는 상태입니다.

- DONE: 인증된 결제 수단 정보, 고객 정보로 요청한 결제가 승인된 상태입니다.

- CANCELED: 승인된 결제가 취소된 상태입니다.

- PARTIAL_CANCELED: 승인된 결제가 부분 취소된 상태입니다.

- ABORTED: 결제 승인이 실패한 상태입니다.

- EXPIRED: 결제 유효 시간 30분이 지나 거래가 취소된 상태입니다. IN_PROGRESS 상태에서 결제 승인 API를 호출하지 않으면 EXPIRED가 됩니다.
 */
export type PaymentStatus =
  | 'READY'
  | 'IN_PROGRESS'
  | 'WAITING_FOR_DEPOSIT'
  | 'DONE'
  | 'CANCELED'
  | 'PARTIAL_CANCELED'
  | 'ABORTED'
  | 'EXPIRED';
