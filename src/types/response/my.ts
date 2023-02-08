import { UserAddress } from './../model/user';
export type MyInfoGetResponseDTO = {
  uesr_id: string;
  nickname: string;
  email: string;
  phone_number?: string;
  address?: UserAddress;
};
