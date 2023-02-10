import { AxiosError, AxiosResponse } from 'axios';
import { authState } from './../../recoil/auth/state';
import { API } from './../util/API';

import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { BaseResponseDTO } from '../../types/common/baseResponse';
// export const useSocialLogin = () => {
//   return useMutation<any, AxiosError, object>((info) => axios.post('/api/login/kakao', info));
// };
const logout = async () => API('/logout', { method: 'post' });

export const useLogout = () => {
  const setAuthState = useSetRecoilState(authState);
  return useMutation<AxiosResponse<BaseResponseDTO<unknown>>, AxiosError>(logout, {
    onSuccess: () => {
      setAuthState({ is_login: false });
    },
  });
};
// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
