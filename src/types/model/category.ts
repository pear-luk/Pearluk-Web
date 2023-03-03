import { CommonInfo } from './../common/commonData';
export type Category = {
  category_id: string;
  name: string;
  parent_category_id: string | null;
  child_categories?: Category[];
} & CommonInfo;
