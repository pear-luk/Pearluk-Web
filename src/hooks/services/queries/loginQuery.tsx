import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { loginState } from '../../../recoil/auth/stats';
import { userState } from '../../../recoil/user/state';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { LoginResponseDTO } from '../../../types/response/login';
import { API } from '../../util/API';

type IsLoginType = {
  login: boolean | null;
  user: LoginResponseDTO | null;
  isLoginLoading: boolean;
  isLoginError: boolean;
};

export const useIsLogin = (): IsLoginType => {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  const [login, setLogin] = useRecoilState(loginState);
  const { isLoading: isLoginLoading, isError: isLoginError } = useQuery<
    AxiosResponse<BaseResponseDTO<LoginResponseDTO>> | null,
    AxiosError
  >(
    ['isLogin'],

    login === null ? API('/auth', { method: 'get' }) : () => null,
    // API('/auth', { method: 'get' }),
    {
      onSuccess: (res) => {
        if (res !== null) {
          const { data } = res;
          const { is_success, result } = data;
          user === null && setUser(result as LoginResponseDTO);
          login === null && setLogin(is_success);
        }
      },
      onError: (err) => {
        if (err as AxiosError) {
          const { data } = err.response as AxiosResponse;
          const { is_success } = data;
          user !== null && resetUser();
          setLogin(is_success);
        }
      },
      retry: false,
    },
  );

  return { login, user, isLoginError, isLoginLoading };
};
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
