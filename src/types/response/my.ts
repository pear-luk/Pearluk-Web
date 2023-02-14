import { UserAddress } from './../model/user';
export type MyInfoGetResponseDTO = {
  user_id: string;
  nickname: string;
  email: string;
  phone_number?: string;
  address?: UserAddress;
};
