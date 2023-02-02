import { CommonInfo } from './../common/commonData';
export type OrderAddress = {
  order_id: string;
  full_address: string;
  address: string;
  detail_address: string;
} & CommonInfo;
