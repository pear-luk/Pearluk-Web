import { AuthResponseDTO } from '../../../types/response/auth';
import { API } from '../../util/API';

export const getAuth = async () =>
  (
    await API<AuthResponseDTO>('/auth', {
      method: 'get',
    })
  ).data;
