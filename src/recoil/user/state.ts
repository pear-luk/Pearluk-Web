import { atom } from 'recoil';
import { v1 } from 'uuid';
import { LoginResponseDTO } from '../../types/response/login';
export const userState = atom<LoginResponseDTO | null>({ key: `userState/${v1()}`, default: null });
