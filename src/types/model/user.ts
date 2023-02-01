import { SocialType } from '../common';
export const UserRole: {
  user: 'user';
  admin: 'admin';
  developer: 'developer';
} = {
  user: 'user',
  admin: 'admin',
  developer: 'developer',
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export type SocialType = 'kakao';
export type LoginType = 'local' | SocialType;

export type User = {
  user_id: string;
  email: string;
  nickname: string;
  role: UserRole;
};

export type UserSocialInfo = {
  user_id: string;
  social_type: SocialType;
  social_id: string;
};

export type UserAddress = {
  addresses_id: string;
  uesr_id: string;
};
