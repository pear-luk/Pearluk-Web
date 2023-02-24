import { SocailLoginRequestDTO } from './../../../types/request/login';
import { API } from './../../util/API';

import { AuthResponseDTO } from './../../../types/response/auth';

export const socialLogin = async (mutationData: SocailLoginRequestDTO) => {
  return (await API<AuthResponseDTO>('/login', { method: 'post', data: mutationData })).data;
};
