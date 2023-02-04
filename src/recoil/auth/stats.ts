import { atom } from 'recoil';
import { v1 } from 'uuid';
export const loginState = atom<boolean | null>({ key: `loginState/${v1()}`, default: null });
