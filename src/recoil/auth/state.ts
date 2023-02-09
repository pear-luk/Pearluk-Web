import { atom } from 'recoil';
import { v1 } from 'uuid';
import { AuthResponseDTO } from './../../types/response/auth';

export const authState = atom<AuthResponseDTO | null>({
  key: `authState/${v1()}`,
  default: null,
});
