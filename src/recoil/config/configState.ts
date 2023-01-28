import { atom } from 'recoil';

export type ModeType = 'dark' | 'white';
// dark mode , white mode
export const modeAtom = atom<ModeType>({
  key: 'modeState',
  default: 'dark',
});
