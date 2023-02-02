import { LoginType, SocialType } from './../model/user';
export interface LoginRequestDTO {
  social_type: LoginType;
  social_token: string;
  email: string;
  password: string;
}

export interface SocailLoginRequestDTO extends Pick<LoginRequestDTO, 'social_type' | 'social_token'> {
  social_type: SocialType;
  social_token: string;
}

export interface LocalLoginRequestDTO extends Pick<LoginRequestDTO, 'social_type' | 'email' | 'password'> {
  social_type: 'local';
  email: string;
  password: string;
}
