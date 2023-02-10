import { atom } from 'recoil';
import { v1 } from 'uuid';
import { Archive } from '../../types/model/archive';

export const archiveListState = atom<Archive[]>({
  key: `archiveState/${v1()}`,
  default: [],
});
