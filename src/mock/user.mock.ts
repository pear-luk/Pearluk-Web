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
  phone_number: '01073616616',
};

export const userMock_NoEmail_NoRole = {
  user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',
  nickname: '박준혁',
};

export const userWithAddressMock: User = {
  user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',
  nickname: '박준혁',
  phone_number: '01073616616',

  email: 'vo0v0000@naver.com',
  role: 'user',
  user_address: {
    user_id: '01GQHMJ6M796AS8BTJ3GCMPZAW',
    full_address: '서울특별시 광진구 군자동 ooo-oo, xxx호',
    post_code: '010203',
    address: '서울특별시 광진구 군자동 ooo-oo',
    detail_address: 'xxx호',
  },
};
