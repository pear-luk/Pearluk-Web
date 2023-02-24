import { Question } from './../model/question';
export type QuestionCreateRequestDTO = Omit<Question, 'question_id' | 'user_id'>;
