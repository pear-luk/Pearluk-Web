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
  imgs: string[];
  category?: Category;
  archive?: Archive;
} & CommonInfo;
