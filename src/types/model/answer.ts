import { CommonInfo } from './../common/commonData';
export type Answer = {
  answer_id: string;
  product_id: string | null;
  question_id: string;
} & CommonInfo;
