import { CommonInfo } from './../common/commonData';
import { Question } from './question';
export type Answer = {
  answer_id: string;
  contents: string;
  product_id: string | null;
  question_id: string;
  question?: Question;
  imgs?: AnswerImg[];
} & CommonInfo;

export type AnswerImg = {
  answer_img_id: string;
  answer_id: string;
  sequence: number;
  url: string;
  answer?: Answer;
};
