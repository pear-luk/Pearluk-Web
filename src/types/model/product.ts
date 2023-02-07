import { CommonInfo } from './../common/commonData';
export type Product = {
  product_id: string;
  name: string;
  price: bigint | number;
  introduce: string;
  quantity: number;
  product_status: number;
  archive_id: string;
  category_id: string;
  imgs: string[];
} & CommonInfo;
