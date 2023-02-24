import { CommonInfo } from './../common/commonData';
import { Answer } from './answer';
import { User } from './user';
export type Question = {
  question_id: string;
  title: string;
  contents: string;
  type?: number;
  secret_mode: number;
  password?: string;

  user_id: string;
  product_id?: string;

  // Join
  user?: Pick<User, 'nickname' | 'user_id'>;
  answers?: Answer[];
  answer_count?: number;
  imgs?: QuestionImg[];
} & CommonInfo;

export type QuestionImg = {
  question_img_id: string;
  question_id: string;
  url: string;
  sequence: number;
};
