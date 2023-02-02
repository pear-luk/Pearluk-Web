import { CommonInfo } from './../common/commonData';
export type Question = {
  question_id: string;

  product_id: string | null;
  type: number | null;
} & CommonInfo;
