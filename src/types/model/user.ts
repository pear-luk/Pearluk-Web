import { CommonInfo } from './../common/commonData';
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
  phone_number?: string;
  role: UserRole;
} & CommonInfo;

export type UserSocialInfo = {
  user_id: string;
  social_type: SocialType;
  social_id: string;
} & CommonInfo;

export type UserAddress = {
  uesr_id: string;
  full_address: string;
  address: string;
  detail_address: string;
} & CommonInfo;
