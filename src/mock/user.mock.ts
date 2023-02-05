import { User } from './../types/model/user';
// user_id: string;
//     email: string;
//     nickname: string;
//     phone_number?: string | undefined;
//     role: UserRole;
export const userMock: User = {
  user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',
  nickname: '박준혁',
  email: 'vo0v0000@naver.com',
  role: 'user',
};

export const userMock_NoEmail_NoRole = {
  user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',
  nickname: '박준혁',
};
