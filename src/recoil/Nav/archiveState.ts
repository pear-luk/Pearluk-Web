import { atom } from 'recoil';
import { v1 } from 'uuid';
import { Archive } from '../../types/model/archive';

export const archiveState = atom<Archive[]>({
  key: `archiveState/${v1()}`,
  default: [],
});
