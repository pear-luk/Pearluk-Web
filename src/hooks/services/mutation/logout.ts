import { AxiosError, AxiosResponse } from 'axios';

import { useMutation } from 'react-query';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { loginState } from '../../../recoil/auth/stats';
import { userState } from '../../../recoil/user/state';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { API } from '../../util/API';
// export const useSocialLogin = () => {
//   return useMutation<any, AxiosError, object>((info) => axios.post('/api/login/kakao', info));
// };
export const useLogout = () => {
  const resetUserState = useResetRecoilState(userState);
  const setLoginState = useSetRecoilState(loginState);
  return useMutation<AxiosResponse<BaseResponseDTO<unknown>>, AxiosError>(API('/logout', { method: 'post' }), {
    onSuccess: () => {
      resetUserState();
      setLoginState(false);
    },
  });
};
// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
