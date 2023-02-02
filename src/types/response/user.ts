import { User, UserAddress } from '../model/user';

export type MyGetResponseDTO = User & { uesr_address: UserAddress };
