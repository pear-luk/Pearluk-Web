import { Question } from './../model/question';
export type QuestionGetListResponseDTO = Pick<
  Question,
  'question_id' | 'title' | 'contents' | 'secret_mode' | 'answer_count' | 'writer' | 'created_at'
>[];
