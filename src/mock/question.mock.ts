import { Question } from './../types/model/question';
import { userMock_NoEmail_NoRole } from './user.mock';

export const questionListItemMock_NoSecret_NoProduct: Omit<Question, 'password', 'contents'> = {
  question_id: '01GQHV1R2AEM4TMQ0SRC749KWS',
  title: '배송언제와배송언제와배송언제와배송언제와',

  secret_mode: 0,
  user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',

  // Join
  writer: userMock_NoEmail_NoRole,
  created_at: '2023-01-24 12:11:37.931',
  answer_count: 3,
};

export const questionListItemMock_Secret_NoProduct: Omit<Question, 'password', 'contents'> = {
  question_id: '01GQHV1R2AEM4TMQ0SRC749KWS',
  title: '비번있다~~~~',

  secret_mode: 1,
  user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',

  // Join
  writer: userMock_NoEmail_NoRole,
  created_at: '2023-01-24 12:11:37.931',
  answer_count: 3,
};
