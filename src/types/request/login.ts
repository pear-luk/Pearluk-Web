import { LoginType, SocialType } from '../common';

export interface LoginRequest {
  social_type: LoginType;
  social_token: string;
  email: string;
  password: string;
}

export interface SocailLoginRequest extends Pick<LoginRequest, 'social_type' | 'social_token'> {
  social_type: SocialType;
  social_token: string;
}

export interface LocalLoginRequest extends Pick<LoginRequest, 'social_type' | 'email' | 'password'> {
  social_type: 'local';
  email: string;
  password: string;
}
