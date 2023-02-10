import { API } from '../../util/API';
import { AuthResponseDTO } from './../../../types/response/auth';

export const getAuth = async () =>
  (
    await API<AuthResponseDTO>('/auth', {
      method: 'get',
    })
  ).data;
