import { AxiosError, AxiosResponse } from 'axios';

import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../../recoil/auth/stats';
import { userState } from '../../../recoil/user/state';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { SocailLoginRequestDTO } from '../../../types/request/login';
import { LoginResponseDTO } from '../../../types/response/login';
import { API } from '../../util/API';
// export const useSocialLogin = () => {
//   return useMutation<any, AxiosError, object>((info) => axios.post('/api/login/kakao', info));
// };
export const useSocialLogin = () => {
  const route = useRouter();

  const setUserState = useSetRecoilState(userState);
  const setLoginState = useSetRecoilState(loginState);
  return useMutation<AxiosResponse<BaseResponseDTO<LoginResponseDTO>>, AxiosError, SocailLoginRequestDTO>(
    API('/login', { method: 'post' }),
    {
      onSuccess: ({ data }) => {
        const { is_success, result } = data;

        result && setUserState(result);
        is_success && setLoginState(is_success);

        route.push('/');
      },
      onError: () => {
        route.push('/login');
      },
    },
  );
};
// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
