import { LoginType, User } from './../model/user';
export type LoginResponseDTO = {
  access_token: string;
  user: User & { social_type: LoginType };
};

export type SignupResponseDTO = {
  access_token: string;
  user: User & { social_type: LoginType };
};
