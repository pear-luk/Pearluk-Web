import { SocailLoginRequestDTO } from './../../../types/request/login';
import { API } from './../../util/API';

import { AuthResponseDTO } from './../../../types/response/auth';

export const socialLogin = async (mudationData: SocailLoginRequestDTO) => {
  return (await API<AuthResponseDTO>('/login', { method: 'post', data: mudationData })).data;
};
