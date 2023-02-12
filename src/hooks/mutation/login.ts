import { AxiosError } from 'axios';

import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../recoil/auth/state';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { SocailLoginRequestDTO } from '../../types/request/login';
import { AuthResponseDTO } from '../../types/response/auth';
import { socialLogin } from '../API/login/socialLogin';
// export const useSocialLogin = () => {
//   return useMutation<any, AxiosError, object>((info) => axios.post('/api/login/kakao', info));
// };

export const useSocialLogin = () => {
  const route = useRouter();
  const setAuthState = useSetRecoilState(authState);
  return useMutation<BaseResponseDTO<AuthResponseDTO>, AxiosError, SocailLoginRequestDTO>(socialLogin, {
    onSuccess: ({ result }) => {
      if (!result) return;
      setAuthState(result);
      route.push('/');
    },
    onError: () => {
      setAuthState({ is_login: false });
      route.push('/login');
    },
  });
};
// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
