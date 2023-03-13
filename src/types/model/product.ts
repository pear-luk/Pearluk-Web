import { CommonInfo } from './../common/commonData';
import { Archive } from './archive';
import { Category } from './category';
export type Product = {
  product_id: string;
  name: string;
  price: bigint | number;
  introduce: string;
  quantity: number;
  product_status: number;
  archive_id: string;
  category_id: string;
  imgs?: ProductImg[];
  category?: Category;
  archive?: Archive;
} & CommonInfo;

export type ProductImg = {
  product_img_id: string;
  product_id: string;
  url: string;
  sequence: number;
} & CommonInfo;
