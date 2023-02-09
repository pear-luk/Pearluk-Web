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
  isLoginFetching: boolean;
};

export const useIsLogin = (): IsLoginType => {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  const [login, setLogin] = useRecoilState(loginState);
  const {
    isLoading: isLoginLoading,
    isError: isLoginError,
    isFetching: isLoginFetching,
  } = useQuery<AxiosResponse<BaseResponseDTO<LoginResponseDTO>> | AxiosResponse<null>, AxiosError>(
    ['isLogin'],

    API('/auth', { method: 'get' }),
    // API('/auth', { method: 'get' }),
    {
      onSuccess: (res) => {
        const { data } = res;
        if (data) {
          const { is_success, result } = data as BaseResponseDTO<LoginResponseDTO>;
          user === null && setUser(result as LoginResponseDTO);
          login === null && setLogin(is_success);
        } else {
          resetUser();
          setLogin(false);
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

  return { login, user, isLoginError, isLoginLoading, isLoginFetching };
};
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
