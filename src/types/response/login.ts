import { LoginType } from './../model/user';
export type LoginResponseDTO = {
  social_type: LoginType;
  nickname: string;
  user_id: string;
};

export type SignupResponseDTO = {
  social_type: LoginType;
  nickname: string;
  user_id: string;
};
