import { Question } from './../model/question';
export type QuestionListGetResponseDTO = {
  questions: Question[];
  total_count: number;
};

export type QuestionDetailGetResponseDTO = Question;

export type QuestionPostResponseDTO = Question;
